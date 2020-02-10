import Publisher from '../models/Publisher';
import Assistance from '../models/Assistance';

export default async function listPublishers(meeting_id) {
  const publishers = await Publisher.findAll();

  publishers.map(
    async publisher =>
      await Assistance.create({
        publisher_id: publisher.id,
        meeting_id,
      })
  );
}
