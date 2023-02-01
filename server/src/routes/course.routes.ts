import { Router } from 'express';
import { validateTokenAdmin } from '../middlewares/AuthAdminMiddleware';
import { validateToken } from '../middlewares/authMiddleware';
import { validateCourseAdd } from '../middlewares/courseValidation';
import saveUpdateCourseRequest from '../models/saveUpdateCourseRequest';
import { GetAccountById } from '../repositories/AccountRepository';
import { getCategoryByName } from '../repositories/CategoryRepository';
import {
  deleteCourse,
  editCourse,
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

  return res
    .status(200)
    .json(courses.map((item) => delete item.account.password));
});

courseRouter.get('/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const course = await getCourseById(Number.parseInt(id) ?? 0);
  if (!course)
    return res.status(404).json({
      erro: 'Curso não encontrado',
    });

  delete course.account.password;
  return res.status(200).json(course);
});

courseRouter.post(
  '/save/:accountId',
  validateToken,
  validateCourseAdd,
  async (req, res) => {
    const course = req.body as saveUpdateCourseRequest;
    const accountId = req.params.accountId;

    const account = await GetAccountById(Number.parseInt(accountId));

    if (!account)
      return res.status(404).json({
        error: 'Conta não encontrada',
      });

    if (!verifyUser(account, req.headers.authorization!))
      return res.status(403).json();

    const category = await getCategoryByName(course.category);

    if (!category)
      return res.status(404).json({
        error: 'Categoria não encontrada',
      });
    const { error } = CourseValidator.validate(course);

    if (error) return res.status(400).json(error.details.map((p) => p.message));

    await saveCourse(account, course.name, course.description, category);
    return res.status(200).json();
  }
);

courseRouter.put('/update/:id', validateToken, async (req, res) => {
  const courseUpdated = req.body as saveUpdateCourseRequest;
  const { id } = req.params;

  const course = await getCourseById(Number.parseInt(id));

  if (!course)
    return res.status(400).json({
      erro: 'Curso não encontrado',
    });

  if (!verifyUser(course.account, req.headers.authorization!))
    return res.status(403).json();

  const category = await getCategoryByName(courseUpdated.category);

  if (!category)
    return res.status(404).json({
      error: 'Categoria não encontrada',
    });
  const { error } = CourseValidator.validate(courseUpdated);

  if (error) return res.status(400).json(error.details.map((p) => p.message));

  await editCourse(
    course.id,
    courseUpdated.name,
    courseUpdated.description,
    category
  );
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
