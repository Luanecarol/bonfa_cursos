import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import path from 'path';

import { TokenPayload } from '../models/TokenPayload';
dotenv.config({
  path: path.resolve('.env'),
});
const privateKey = process.env.PRIVATE_KEY;

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const [, token] = req.headers.authorization?.split(' ') || [' ', ' '];
  if (!token) return res.status(401).json();

  try {
    const payload = jsonwebtoken.verify(token, privateKey!) as TokenPayload;
    if (!payload.user) return res.status(401).json('unhe');

    return next();
  } catch (e: any) {
    return res.status(401).json();
  }
};

export { validateToken };
