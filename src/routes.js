import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import GroupController from './app/controllers/GroupController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware); // MIDDLEWARE TOKEN JWT

routes.get('/group', GroupController.index);
routes.post('/group', GroupController.store);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);

export default routes;
