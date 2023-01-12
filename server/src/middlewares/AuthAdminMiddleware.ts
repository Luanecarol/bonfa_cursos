import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import path from 'path';

import { TokenPayload } from '../models/TokenPayload';
dotenv.config({
  path: path.resolve('.env'),
});
const privateKey = process.env.PRIVATE_KEY;

const validateTokenAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const [, token] = req.headers.authorization?.split(' ') || [' ', ' '];
  if (!token) return res.status(401).json();

  try {
    const payload = jsonwebtoken.verify(token, privateKey!) as TokenPayload;
    if (!payload.user || payload.role != 'admin') return res.status(403).json();

    return next();
  } catch (e: any) {
    return res.status(401).json();
  }
};

export { validateTokenAdmin };
