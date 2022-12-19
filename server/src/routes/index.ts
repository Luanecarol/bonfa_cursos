import { Router } from 'express';
import accountRoutes from './account.routes';

const routes = Router();

routes.use('/v1/account', accountRoutes);

export default routes;
