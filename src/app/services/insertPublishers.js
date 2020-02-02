import Publisher from '../models/Publisher';
import Assistance from '../models/Assistance';

export default async function listPublishers(meetingID) {
  const publishers = await Publisher.findAll();

  const pub = publishers.map(
    async publisher =>
      await Assistance.create({
        publisher_id: publisher.id,
        meeting_id: meetingID,
      })
  );
}
