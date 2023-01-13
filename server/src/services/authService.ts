import jsonwebtoken from 'jsonwebtoken';
import Account from '../entities/Account';
import { SplitBearerToken } from '../helpers/TokenHelper';
import { TokenPayload } from '../models/TokenPayload';

const privateKey = process.env.PRIVATE_KEY || '';

const generateToken = (account: Account) =>
  jsonwebtoken.sign(
    {
      user: account.id,
      role: account.role,
    },
    privateKey
  );

const verifyUser = (account: Account, token: string) => {
  var payload = jsonwebtoken.verify(
    SplitBearerToken(token),
    privateKey
  ) as TokenPayload;
  console.log(payload);
  console.log(account);
  return account.id == payload.user;
};

export { generateToken, verifyUser };
