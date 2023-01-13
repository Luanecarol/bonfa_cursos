import { Router } from 'express';
import Course from '../entities/Course';
import { validateTokenAdmin } from '../middlewares/AuthAdminMiddleware';
import { validateToken } from '../middlewares/authMiddleware';
import { GetAccountById } from '../repositories/AccountRepository';
import {
  deleteCourse,
  getAllCourses,
  getAllCoursesByAccountId,
  getCourseById,
  saveCourse,
} from '../repositories/CourseRepository';
import { verifyUser } from '../services/authService';
import CourseValidator from '../validators/CourseValidator';

const courseRouter = Router();

courseRouter.get('/', validateTokenAdmin, async (req, res) => {
  const courses = await getAllCourses();

  return res.status(200).json(courses);
});

courseRouter.get('/byAccount/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const courses = await getAllCoursesByAccountId(Number.parseInt(id) ?? 0);

  return res.status(200).json(courses);
});

courseRouter.get('/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const course = await getCourseById(Number.parseInt(id) ?? 0);
  if (!course)
    return res.status(404).json({
      erro: 'Curso não encontrado',
    });
  return res.status(200).json(course);
});

courseRouter.post('/save/:accountId', validateToken, async (req, res) => {
  const course = req.body as Course;
  const accountId = req.params.accountId;

  const account = await GetAccountById(Number.parseInt(accountId));

  if (!account)
    return res.status(404).json({
      error: 'Conta não encontrada',
    });

  const { error } = CourseValidator.validate(course);

  if (error) return res.status(400).json(error.details.map((p) => p.message));

  await saveCourse(account, course.name, course.description, course.category);
  return res.status(200).json();
});

courseRouter.delete('/delete/:id', validateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const course = await getCourseById(Number.parseInt(id));

    if (!course)
      return res.status(404).json({
        erro: 'Curso não encontrado',
      });

    if (!verifyUser(course.account, req.headers.authorization!))
      return res.status(403).json();

    await deleteCourse(course.id);

    return res.status(204).json();
  } catch (e: any) {
    return res.status(500).json(e.message);
  }
});

export default courseRouter;
