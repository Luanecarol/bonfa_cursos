import { Router } from 'express';
import Module from '../entities/Module';
import { validateTokenAdmin } from '../middlewares/AuthAdminMiddleware';
import { validateToken } from '../middlewares/authMiddleware';
import { getCourseById } from '../repositories/CourseRepository';
import {
  deleteModule,
  editModule,
  getAllModules,
  getAllModulesByCourseId,
  getModuleById,
  saveModule,
} from '../repositories/ModuleRepository';
import { verifyUser } from '../services/authService';
import ModuleValidator from '../validators/ModuleValidator';

const moduleRouter = Router();

moduleRouter.get('/', validateTokenAdmin, async (req, res) => {
  const modules = await getAllModules();

  return res.status(200).json(modules);
});

moduleRouter.get('/byCourse/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const modules = await getAllModulesByCourseId(Number.parseInt(id) ?? 0);

  return res.status(200).json(modules);
});

moduleRouter.get('/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const module = await getModuleById(Number.parseInt(id) ?? 0);
  if (!module)
    return res.status(404).json({
      erro: 'Modulo não encontrado',
    });

  delete module.course.account.password;
  return res.status(200).json(module);
});

moduleRouter.post('/save/:courseId', validateToken, async (req, res) => {
  const module = req.body as Module;
  const courseId = req.params.courseId;
  const course = await getCourseById(Number.parseInt(courseId));

  if (!course)
    return res.status(404).json({
      error: 'Curso não encontrado',
    });

  const { error } = ModuleValidator.validate(module);

  if (error) return res.status(400).json(error.details.map((p) => p.message));

  await saveModule(course, module.name);
  return res.status(200).json();
});

moduleRouter.put('/update/:id', validateToken, async (req, res) => {
  const moduleUpdated = req.body as Module;
  const { id } = req.params;

  const module = await getModuleById(Number.parseInt(id));

  if (!module)
    return res.status(400).json({
      erro: 'Modulo não encontrado',
    });

  const { error } = ModuleValidator.validate(moduleUpdated);

  if (error) return res.status(400).json(error.details.map((p) => p.message));

  await editModule(module.id, moduleUpdated.name);
  return res.status(200).json();
});

moduleRouter.delete('/delete/:id', validateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const module = await getModuleById(Number.parseInt(id));

    if (!module)
      return res.status(404).json({
        erro: 'Modulo não encontrado',
      });

    if (!verifyUser(module.course.account, req.headers.authorization!))
      return res.status(403).json();

    await deleteModule(module.id);

    return res.status(204).json();
  } catch (e: any) {
    return res.status(500).json(e.message);
  }
});

export default moduleRouter;
