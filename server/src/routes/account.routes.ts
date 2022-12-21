import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { generateUsername } from 'unique-username-generator';
import { validateToken } from '../middlewares/authMiddleware';
import { Course } from '../models/Course';
import { OrderEventWebHook } from '../models/OrderEventWebHook';
import {
  GetAccountByUsername,
  SaveAccount,
} from '../repositories/AccountRepository';
import { SaveCourse } from '../repositories/CourseRepository';
import CourseValidator from '../validators/CourseValidator';
const accountRoutes = Router();

accountRoutes.post('/create_account', async (req, res) => {
  const username = generateUsername();
  const password = new Date().getTime();
  const account = await GetAccountByUsername(username);
  const webHookRequest = req.body as OrderEventWebHook;

  if (webHookRequest.event === 'PURCHASE_APPROVED' && !account) {
    try {
      await SaveAccount(username, password.toString());

      return res.status(201).json();
    } catch (e: any) {
      res.status(500).json(e.message);
    }
  }
  return res.status(400).json();
});

accountRoutes.post('/add_course/:id', async (req, res) => {
  const course = req.body as Course;
  const id = req.params.id;

  const { error } = CourseValidator.validate(course);

  if (error) return res.status(400).json(error.details.map((p) => p.message));

  await SaveCourse(
    new ObjectId(id),
    course.title,
    course.description,
    course.category
  );
  return res.status(200).json();
});

accountRoutes.get('/teste', validateToken, (req, res) => {
  return res.status(200).json();
});

export default accountRoutes;
