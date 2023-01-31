import { Router } from 'express';
import { validateTokenAdmin } from '../middlewares/AuthAdminMiddleware';
import { validateToken } from '../middlewares/authMiddleware';
import IntegrationSaveRequest from '../models/IntegrationSaveRequest';
import { getCourseById } from '../repositories/CourseRepository';
import {
  deleteIntegration,
  editIntegration,
  getAllIntegrations,
  getAllIntegrationsByCourseId,
  getIntegrationByCourseAndPlatform,
  getIntegrationById,
  saveIntegration,
} from '../repositories/IntegrationRepository';
import { getPlaformByName } from '../repositories/PlatformRepository';
import { verifyUser } from '../services/authService';
import {
  IntegrationSaveValidator,
  IntegrationUpdateValidator,
} from '../validators/IntegrationValidator';

const integrationRouter = Router();

integrationRouter.get('/', validateTokenAdmin, async (req, res) => {
  const modules = await getAllIntegrations();

  return res.status(200).json(modules);
});

integrationRouter.get('/byCourse/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const modules = await getAllIntegrationsByCourseId(Number.parseInt(id) ?? 0);

  return res.status(200).json(modules);
});

integrationRouter.get('/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const integration = await getIntegrationById(Number.parseInt(id) ?? 0);
  if (!integration)
    return res.status(404).json({
      erro: 'Integração não encontrada',
    });

  delete integration.course.account.password;
  return res.status(200).json(integration);
});

integrationRouter.post('/save/:courseId', validateToken, async (req, res) => {
  const integration = req.body as IntegrationSaveRequest;
  const { error } = IntegrationSaveValidator.validate(integration);

  if (error) return res.status(400).json(error.details.map((p) => p.message));

  const courseId = req.params.courseId;
  const course = await getCourseById(Number.parseInt(courseId));
  if (!course)
    return res.status(404).json({
      error: 'Conta não encontrada',
    });
  const platform = await getPlaformByName(integration.platformName);

  if (!platform)
    return res.status(404).json({
      error: 'plataforma não encontrada',
    });

  const alreadyHaveIntegration = await getIntegrationByCourseAndPlatform(
    course.id,
    platform.id
  );
  if (alreadyHaveIntegration) {
    return res.status(400).json({
      error: 'Já possui essa integração',
    });
  }

  await saveIntegration(course, platform, integration.urlCheckout);

  return res.status(200).json();
});

integrationRouter.put('/update/:id', validateToken, async (req, res) => {
  const integrationUpdated = req.body as { urlCheckout: string };
  const { error } = IntegrationUpdateValidator.validate(integrationUpdated);

  if (error) return res.status(400).json(error.details.map((p) => p.message));
  const { id } = req.params;

  const integration = await getIntegrationById(Number.parseInt(id));

  if (!integration)
    return res.status(400).json({
      erro: 'Integração não encontrada',
    });

  delete integration.course.account.password;

  await editIntegration(integration.id, integrationUpdated.urlCheckout);
  return res.status(200).json();
});

integrationRouter.delete('/delete/:id', validateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const integration = await getIntegrationById(Number.parseInt(id));

    if (!integration)
      return res.status(404).json({
        erro: 'Integração não encontrada',
      });

    if (!verifyUser(integration.course.account, req.headers.authorization!))
      return res.status(403).json();

    await deleteIntegration(integration.id);

    return res.status(204).json();
  } catch (e: any) {
    return res.status(500).json(e.message);
  }
});

export default integrationRouter;
