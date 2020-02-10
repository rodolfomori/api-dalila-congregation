import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import GroupController from './app/controllers/GroupController';
import SettingController from './app/controllers/SettingController';
import PublisherController from './app/controllers/PublisherController';
import MeetingController from './app/controllers/MeetingController';
import AssistanceController from './app/controllers/AssistanceController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware); // MIDDLEWARE TOKEN JWT

routes.get('/groups', GroupController.index);
routes.get('/groups/:id', GroupController.show);
routes.post('/groups', GroupController.store);
routes.put('/groups/:id', GroupController.update);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);

// routes.get('/groups/:group_id/users', UserController.index);
// routes.put('/groups/:group_id/users', UserController.update);

routes.post('/settings', SettingController.store);
routes.put('/settings', SettingController.update);
routes.get('/settings', SettingController.index);

routes.post('/publishers', PublisherController.store);
routes.put('/publishers/:id', PublisherController.update);
routes.get('/publishers', PublisherController.index);
routes.get('/publishers/:id', PublisherController.show);

routes.get('/meetings', MeetingController.index);
routes.post('/meetings', MeetingController.store);

// routes.get('/assistance', AssistanceController.index);
routes.get(
  '/assistance/meeting/:meeting_id/group/:group_id',
  AssistanceController.index
);

routes.post('/assistance', AssistanceController.store);
routes.put('/assistance/:meeting_id', AssistanceController.update);

export default routes;
