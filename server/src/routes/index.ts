import { Router } from 'express';
import accountRoutes from './account.routes';
import authRouter from './auth.routes';
import courseRouter from './course.routes';
import integrationRouter from './integration.routes';
import lessonRouter from './lesson.routes';
import moduleRouter from './module.routes';
import subscriptionRouter from './subscription.routes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/v1/account', accountRoutes);
routes.use('/v1/courses', courseRouter);
routes.use('/v1/modules', moduleRouter);
routes.use('/v1/lessons', lessonRouter);
routes.use('/v1/integrations', integrationRouter);
routes.use('/v1/subscription', subscriptionRouter);

export default routes;
