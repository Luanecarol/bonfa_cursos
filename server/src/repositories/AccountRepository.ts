import { ObjectId } from 'mongodb';
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

const GetAccountById = async (id: string) => {
  const collection = await GetMongoCollection('Account');

  return await collection.findOne({
    _id: new ObjectId(id),
  });
};

const ChangePassword = async (id: ObjectId, password: string) => {
  const collection = await GetMongoCollection('Account');

  await collection.findOneAndUpdate({ _id: id }, { $set: { password } });
};

export { SaveAccount, GetAccountByUsername, ChangePassword, GetAccountById };
