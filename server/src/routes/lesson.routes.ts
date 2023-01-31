import { Router } from 'express';
import Lesson from '../entities/Lesson';
import { validateTokenAdmin } from '../middlewares/AuthAdminMiddleware';
import { validateToken } from '../middlewares/authMiddleware';
import {
  deleteLesson,
  editLesson,
  getAllLessons,
  getAllLessonsByModuleId,
  getLessonById,
  saveLesson,
} from '../repositories/LessonRepository';
import { getModuleById } from '../repositories/ModuleRepository';
import { verifyUser } from '../services/authService';
import LessonValidator from '../validators/LessonValidator';

const lessonRouter = Router();

lessonRouter.get('/', validateTokenAdmin, async (req, res) => {
  const lessons = await getAllLessons();

  return res.status(200).json(lessons);
});

lessonRouter.get('/byModule/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const lessons = await getAllLessonsByModuleId(Number.parseInt(id) ?? 0);

  return res.status(200).json(lessons);
});

lessonRouter.get('/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const lesson = await getLessonById(Number.parseInt(id) ?? 0);
  if (!lesson)
    return res.status(404).json({
      erro: 'Aula não encontrada',
    });

  delete lesson.module.course.account.password;
  return res.status(200).json(lesson);
});

lessonRouter.post('/save/:moduleId', validateToken, async (req, res) => {
  const lesson = req.body as Lesson;
  const moduleId = req.params.moduleId;
  const module = await getModuleById(Number.parseInt(moduleId));

  if (!module)
    return res.status(404).json({
      error: 'Modulo não encontrado',
    });

  const { error } = LessonValidator.validate(lesson);

  if (error) return res.status(400).json(error.details.map((p) => p.message));

  await saveLesson(module, lesson.videoUrl, lesson.lessonTitle);
  return res.status(200).json();
});

lessonRouter.put('/update/:id', validateToken, async (req, res) => {
  const lessonUpdated = req.body as Lesson;
  const { id } = req.params;

  const lesson = await getLessonById(Number.parseInt(id));

  if (!lesson)
    return res.status(400).json({
      erro: 'Aula não encontrada',
    });

  const { error } = LessonValidator.validate(lessonUpdated);

  if (error) return res.status(400).json(error.details.map((p) => p.message));

  await editLesson(
    lesson.id,
    lessonUpdated.videoUrl,
    lessonUpdated.lessonTitle
  );
  return res.status(200).json();
});

lessonRouter.delete('/delete/:id', validateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const lesson = await getLessonById(Number.parseInt(id));

    if (!lesson)
      return res.status(404).json({
        erro: 'Aula não encontrado',
      });

    if (!verifyUser(lesson.module.course.account, req.headers.authorization!))
      return res.status(403).json();

    await deleteLesson(lesson.id);

    return res.status(204).json();
  } catch (e: any) {
    return res.status(500).json(e.message);
  }
});

export default lessonRouter;
