import jsonwebtoken from 'jsonwebtoken';
import Account from '../entities/Account';

const privateKey = process.env.PRIVATE_KEY || '';

const generateToken = (account: Account) =>
  jsonwebtoken.sign(
    {
      user: account.id,
    },
    privateKey
  );

export { generateToken };
