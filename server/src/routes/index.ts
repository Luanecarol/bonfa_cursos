import { Router } from 'express';
import accountRoutes from './account.routes';
import authRouter from './auth.routes';
import courseRouter from './course.routes';
import moduleRouter from './module.routes';

const routes = Router();

routes.use('/v1/account', accountRoutes);
routes.use('/auth', authRouter);
routes.use('/v1/courses', courseRouter);
routes.use('/v1/modules', moduleRouter);

export default routes;
