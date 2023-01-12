import { Router } from 'express';
import Course from '../entities/Course';
import { GetAccountById } from '../repositories/AccountRepository';
import { SaveCourse } from '../repositories/CourseRepository';
import CourseValidator from '../validators/CourseValidator';

const courseRouter = Router();

courseRouter.post('/save/:accountId', async (req, res) => {
  const course = req.body as Course;
  const accountId = req.params.accountId;

  const account = await GetAccountById(Number.parseInt(accountId));

  if (!account)
    return res.status(404).json({
      error: 'Conta não encontrada',
    });

  const { error } = CourseValidator.validate(course);

  if (error) return res.status(400).json(error.details.map((p) => p.message));

  await SaveCourse(
    account.id,
    course.name,
    course.description,
    course.category
  );
  return res.status(200).json();
});

export default courseRouter;
