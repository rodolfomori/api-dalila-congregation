"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _GroupController = require('./app/controllers/GroupController'); var _GroupController2 = _interopRequireDefault(_GroupController);
var _SettingController = require('./app/controllers/SettingController'); var _SettingController2 = _interopRequireDefault(_SettingController);
var _PublisherController = require('./app/controllers/PublisherController'); var _PublisherController2 = _interopRequireDefault(_PublisherController);
var _MeetingController = require('./app/controllers/MeetingController'); var _MeetingController2 = _interopRequireDefault(_MeetingController);
var _AssistanceController = require('./app/controllers/AssistanceController'); var _AssistanceController2 = _interopRequireDefault(_AssistanceController);
var _ModalityController = require('./app/controllers/ModalityController'); var _ModalityController2 = _interopRequireDefault(_ModalityController);
var _BuildingController = require('./app/controllers/BuildingController'); var _BuildingController2 = _interopRequireDefault(_BuildingController);
var _ActivityController = require('./app/controllers/ActivityController'); var _ActivityController2 = _interopRequireDefault(_ActivityController);
// import authMiddleware from './app/middlewares/auth';

const routes = new (0, _express.Router)();

// Then pass them to cors:
_express2.default.call(void 0, ).use(_cors2.default.call(void 0, ));

routes.post('/session', _SessionController2.default.store);
routes.post('/users', _UserController2.default.store);

// routes.use(authMiddleware); // MIDDLEWARE TOKEN JWT

routes.get('/groups', _GroupController2.default.index);
routes.get('/groups/:id', _GroupController2.default.show);
routes.post('/groups', _GroupController2.default.store);
routes.put('/groups/:id', _GroupController2.default.update);

routes.get('/users', _UserController2.default.index);
routes.put('/users', _UserController2.default.update);
routes.delete('/users/:id', _UserController2.default.delete);

// routes.get('/groups/:group_id/users', UserController.index);
// routes.put('/groups/:group_id/users', UserController.update);

routes.post('/settings', _SettingController2.default.store);
routes.put('/settings', _SettingController2.default.update);
routes.get('/settings', _SettingController2.default.index);

routes.post('/publishers', _PublisherController2.default.store);
routes.put('/publishers/:id', _PublisherController2.default.update);
routes.get('/publishers', _PublisherController2.default.index);
routes.get('/publishers/:id', _PublisherController2.default.show);

routes.get('/meetings', _MeetingController2.default.index);
routes.post('/meetings', _MeetingController2.default.store);

// routes.get('/assistance', AssistanceController.index);
routes.get(
  '/assistance/meeting/:meeting_id/group/:group_id',
  _AssistanceController2.default.index
);

routes.post('/assistance', _AssistanceController2.default.store);
routes.put('/assistance/:meeting_id', _AssistanceController2.default.update);

routes.get('/modalities', _ModalityController2.default.index);
routes.get('/modalities/:id', _ModalityController2.default.show);
routes.post('/modalities', _ModalityController2.default.store);
// routes.put('/modalities/:id', ModalityController.update);

routes.get('/buildings', _BuildingController2.default.index);
routes.get('/buildings/:id', _BuildingController2.default.show);
routes.post('/buildings', _BuildingController2.default.store);

routes.get('/activities', _ActivityController2.default.index);
// routes.get('/buildings/:id', BuildingController.show);
routes.post('/activities', _ActivityController2.default.store);

exports. default = routes;
