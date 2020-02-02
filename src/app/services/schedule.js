import cron from 'node-cron';
import {
  createMidweekMeeting,
  createWeekendMeeting,
} from './createMeetingsService';

import publishers from './insertPublishers';

cron.schedule('*/30 * * * * *', async () => {
  // await createMidweekMeeting();
});

cron.schedule('*/30 * * * * *', async () => {
  // await createWeekendMeeting();
});
