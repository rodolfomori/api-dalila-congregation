import cron from 'node-cron';
import {
  createMidweekMeeting,
  createWeekendMeeting,
} from './createMeetingsService';

import publishers from './insertPublishers';

cron.schedule('*/2 * * * * *', async () => {
  // await createMidweekMeeting();
  // await createWeekendMeeting();
});
