import cron from 'node-cron';
import {
  createMidweekMeeting,
  createWeekendMeeting,
} from './createMeetingsService';

cron.schedule('0 6 * * 0 ', async () => {
  await createMidweekMeeting();
  await createWeekendMeeting();
});
