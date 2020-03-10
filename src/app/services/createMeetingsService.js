import { format, addDays } from 'date-fns';
import Meeting from '../models/Meeting';
import Setting from '../models/Setting';
import listPublishers from './insertPublishers';

export async function createMidweekMeeting() {
  const { midweek, midweek_time } = await Setting.findOne({
    where: { id: 1001 },
  });

  const meetingMidweekDate = `${format(
    addDays(new Date(), midweek),
    'yyyy-MM-dd'
  )}T${midweek_time}-03:00`;

  // const meetingMidweekDate = '2020-03-03T20:00:00-03:00';

  const date = await Meeting.findOne({
    where: { date: meetingMidweekDate },
  });

  if (date) {
    return { error: 'Date already exists.' };
  }

  const { id } = await Meeting.create({
    date: meetingMidweekDate,
    midweek: true,
    special_week: false,
  });

  listPublishers(id);

  return 'Done';
}

export async function createWeekendMeeting() {
  const { weekend, weekend_time } = await Setting.findOne({
    where: { id: 1001 },
  });

  const meetingWeekendDate = `${format(
    addDays(new Date(), weekend),
    'yyyy-MM-dd'
  )}T${weekend_time}-03:00`;

  // const meetingWeekendDate = '2020-03-07T19:00:00-03:00';

  const date = await Meeting.findOne({
    where: { date: meetingWeekendDate },
  });

  if (date) {
    return { error: 'Date already exists.' };
  }

  const { id } = await Meeting.create({
    date: meetingWeekendDate,
    midweek: false,
    special_week: false,
  });

  listPublishers(id);

  return 'Done';
}
