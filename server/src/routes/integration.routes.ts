import { Router } from 'express';
import { validateTokenAdmin } from '../middlewares/AuthAdminMiddleware';
import { validateToken } from '../middlewares/authMiddleware';
import IntegrationSaveRequest from '../models/IntegrationSaveRequest';
import { GetAccountById } from '../repositories/AccountRepository';
import {
  deleteIntegration,
  editIntegration,
  getAllIntegrations,
  getAllIntegrationsByAccountId,
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

integrationRouter.get('/byAccount/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const modules = await getAllIntegrationsByAccountId(Number.parseInt(id) ?? 0);

  return res.status(200).json(modules);
});

integrationRouter.get('/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const module = await getIntegrationById(Number.parseInt(id) ?? 0);
  if (!module)
    return res.status(404).json({
      erro: 'Integração não encontrado',
    });
  return res.status(200).json(module);
});

integrationRouter.post('/save/:accountId', validateToken, async (req, res) => {
  const integration = req.body as IntegrationSaveRequest;
  const { error } = IntegrationSaveValidator.validate(integration);

  if (error) return res.status(400).json(error.details.map((p) => p.message));

  const accountId = req.params.accountId;
  const account = await GetAccountById(Number.parseInt(accountId));
  if (!account)
    return res.status(404).json({
      error: 'Conta não encontrado',
    });
  const platform = await getPlaformByName(integration.platformName);

  if (!platform)
    return res.status(404).json({
      error: 'plataforma não encontrado',
    });

  await saveIntegration(account, platform, integration.publicKey);

  return res.status(200).json();
});

integrationRouter.put('/update/:id', validateToken, async (req, res) => {
  const integrationUpdated = req.body as { publicKey: string };
  const { error } = IntegrationUpdateValidator.validate(integrationUpdated);

  if (error) return res.status(400).json(error.details.map((p) => p.message));
  const { id } = req.params;

  const integration = await getIntegrationById(Number.parseInt(id));

  if (!integration)
    return res.status(400).json({
      erro: 'Integração não encontrado',
    });

  await editIntegration(integration.id, integrationUpdated.publicKey);
  return res.status(200).json();
});

integrationRouter.delete('/delete/:id', validateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const integration = await getIntegrationById(Number.parseInt(id));

    if (!integration)
      return res.status(404).json({
        erro: 'Integração não encontrado',
      });

    if (!verifyUser(integration.account, req.headers.authorization!))
      return res.status(403).json();

    await deleteIntegration(integration.id);

    return res.status(204).json();
  } catch (e: any) {
    return res.status(500).json(e.message);
  }
});

export default integrationRouter;
