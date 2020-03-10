import cron from 'node-cron';
import {
  createMidweekMeeting,
  createWeekendMeeting,
} from './createMeetingsService';

// cron.schedule('* * 23 * * 0', async () => {
//   await createMidweekMeeting();
//   await createWeekendMeeting();
// });

cron.schedule('*/30 * * * * *', async () => {
  // await createMidweekMeeting();
  // await createWeekendMeeting();
});
