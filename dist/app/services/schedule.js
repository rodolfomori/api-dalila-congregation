"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _nodecron = require('node-cron'); var _nodecron2 = _interopRequireDefault(_nodecron);



var _createMeetingsService = require('./createMeetingsService');

_nodecron2.default.schedule('0 6 * * 0 ', async () => {
  await _createMeetingsService.createMidweekMeeting.call(void 0, );
  await _createMeetingsService.createWeekendMeeting.call(void 0, );
});
