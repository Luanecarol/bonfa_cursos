import { ObjectId } from 'mongodb';
import { Account } from '../models/Account';
import { GetMongoCollection } from '../services/mongoConnectionService';

const SaveCourse = async (
  id: ObjectId,
  title: string,
  description: string,
  category: string
) => {
  const collection = await GetMongoCollection('Account');
  let account = (await collection.findOne({ _id: id })) as Account;

  if (!account.courses) {
    account = { ...account, courses: [] };
  }

  account.courses.push({
    title,
    description,
    category,
    videos: [],
  });

  await collection.updateOne({ _id: id }, { $set: account });
};

export { SaveCourse };
