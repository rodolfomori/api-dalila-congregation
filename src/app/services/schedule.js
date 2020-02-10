import cron from 'node-cron';
import {
  createMidweekMeeting,
  createWeekendMeeting,
} from './createMeetingsService';

import publishers from './insertPublishers';

cron.schedule('*/15 * * * * *', async () => {
  // await createMidweekMeeting();
  // await createWeekendMeeting();
});

// cron.schedule('*/30 * * * * *', async () => {
//   // await createWeekendMeeting();
// });
