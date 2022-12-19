import { GetMongoCollection } from '../services/mongoConnectionService';

const SaveAccount = async (username: string, password: string) => {
  const collection = await GetMongoCollection('Account');

  await collection.insertOne({
    username,
    password,
  });
};

const GetAccountByUsername = async (username: string) => {
  const collection = await GetMongoCollection('Account');

  return await collection.findOne({
    username,
  });
};

export { SaveAccount, GetAccountByUsername };
