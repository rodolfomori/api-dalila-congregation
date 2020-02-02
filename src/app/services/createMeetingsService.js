import { getDate, getMonth, getYear } from 'date-fns';
import Meeting from '../models/Meeting';
import Setting from '../models/Setting';
import listPublishers from './insertPublishers';

export async function createMidweekMeeting() {
  const { midweek, midweek_time } = await Setting.findOne({
    where: { id: 1001 },
  });
  // console.log(midweek, weekend, midweek_time, weekend_time);

  const meetingMidweekDate = `${getYear(new Date())}-0${getMonth(new Date()) +
    1}-0${getDate(new Date()) + midweek}T${midweek_time}-03:00`;

  console.log(meetingMidweekDate);
  const { id } = await Meeting.create({
    date: meetingMidweekDate,
    midweek: true,
    special_week: false,
  });

  listPublishers(id);

  // "date":"2019-12-29T18:00:00-03:00"
}

export async function createWeekendMeeting() {
  const { weekend, weekend_time } = await Setting.findOne({
    where: { id: 1001 },
  });

  const meetingWeekendDate = `${getYear(new Date())}-0${getMonth(new Date()) +
    1}-0${getDate(new Date()) + weekend}T${weekend_time}-03:00`;

  const { id } = await Meeting.create({
    date: meetingWeekendDate,
    midweek: true,
    special_week: false,
  });

  listPublishers(id);

  // "date":"2019-12-29T18:00:00-03:00"
}
