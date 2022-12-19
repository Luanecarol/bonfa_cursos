import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import path from 'path';
dotenv.config({
  path: path.resolve('.env'),
});
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri!);

const GetMongoCollection = async (collection: string) => {
  await client.connect();
  return client.db('Teste').collection(collection);
};

export { GetMongoCollection };
