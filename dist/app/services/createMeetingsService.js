"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _datefns = require('date-fns');
var _Meeting = require('../models/Meeting'); var _Meeting2 = _interopRequireDefault(_Meeting);
var _Setting = require('../models/Setting'); var _Setting2 = _interopRequireDefault(_Setting);
var _insertPublishers = require('./insertPublishers'); var _insertPublishers2 = _interopRequireDefault(_insertPublishers);

 async function createMidweekMeeting() {
  const { midweek, midweek_time } = await _Setting2.default.findOne({
    where: { id: 1001 },
  });

  const meetingMidweekDate = `${_datefns.format.call(void 0, 
    _datefns.addDays.call(void 0, new Date(), midweek),
    'yyyy-MM-dd'
  )}T${midweek_time}-03:00`;

  // const meetingMidweekDate = '2020-03-03T20:00:00-03:00';

  const date = await _Meeting2.default.findOne({
    where: { date: meetingMidweekDate },
  });

  if (date) {
    return { error: 'Date already exists.' };
  }

  const { id } = await _Meeting2.default.create({
    date: meetingMidweekDate,
    midweek: true,
    special_week: false,
  });

  _insertPublishers2.default.call(void 0, id);

  return 'Done';
} exports.createMidweekMeeting = createMidweekMeeting;

 async function createWeekendMeeting() {
  const { weekend, weekend_time } = await _Setting2.default.findOne({
    where: { id: 1001 },
  });

  const meetingWeekendDate = `${_datefns.format.call(void 0, 
    _datefns.addDays.call(void 0, new Date(), weekend),
    'yyyy-MM-dd'
  )}T${weekend_time}-03:00`;

  // const meetingWeekendDate = '2020-03-07T19:00:00-03:00';

  const date = await _Meeting2.default.findOne({
    where: { date: meetingWeekendDate },
  });

  if (date) {
    return { error: 'Date already exists.' };
  }

  const { id } = await _Meeting2.default.create({
    date: meetingWeekendDate,
    midweek: false,
    special_week: false,
  });

  _insertPublishers2.default.call(void 0, id);

  return 'Done';
} exports.createWeekendMeeting = createWeekendMeeting;
