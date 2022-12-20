import { Router } from 'express';
import accountRoutes from './account.routes';
import authRouter from './auth.routes';

const routes = Router();

routes.use('/v1/account', accountRoutes);
routes.use('/auth', authRouter);

export default routes;
