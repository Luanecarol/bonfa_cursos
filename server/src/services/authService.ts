import jsonwebtoken from 'jsonwebtoken';
import { Document, WithId } from 'mongodb';

const privateKey = process.env.PRIVATE_KEY || '';

const generateToken = (account: WithId<Document>) =>
  jsonwebtoken.sign(
    {
      user: account._id,
    },
    privateKey
  );

export { generateToken };
