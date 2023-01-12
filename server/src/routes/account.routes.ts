import dotenv from 'dotenv';
import { Router } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import path from 'path';
import { generateUsername } from 'unique-username-generator';
import { SplitBearerToken } from '../helpers/TokenHelper';
import { validateToken } from '../middlewares/authMiddleware';
import ChangePasswordRequest from '../models/ChangePasswordRequest';
import { OrderEventWebHook } from '../models/OrderEventWebHook';
import { TokenPayload } from '../models/TokenPayload';
import {
  ChangePassword,
  GetAccountById,
  GetAccountByUsername,
  SaveAccount,
} from '../repositories/AccountRepository';
import ChangePasswordValidator from '../validators/ChangePasswordValidator';
dotenv.config({
  path: path.resolve('.env'),
});
const privateKey = process.env.PRIVATE_KEY;

const accountRoutes = Router();

accountRoutes.post('/create_account', async (req, res) => {
  const username = generateUsername();
  const password = new Date().getTime();
  const account = await GetAccountByUsername(username);
  const webHookRequest = req.body as OrderEventWebHook;

  if (webHookRequest.event === 'PURCHASE_APPROVED' && !account) {
    try {
      await SaveAccount(username, password.toString());

      return res.status(201).json();
    } catch (e: any) {
      res.status(500).json(e.message);
    }
  }
  return res.status(400).json();
});

accountRoutes.put('/change_password', validateToken, async (req, res) => {
  try {
    const body = req.body as ChangePasswordRequest;

    const { error } = ChangePasswordValidator.validate(body);
    if (error) return res.status(400).json(error.details.map((p) => p.message));

    const payload = jsonwebtoken.verify(
      SplitBearerToken(req.headers.authorization!),
      privateKey!
    ) as TokenPayload;

    const account = await GetAccountById(payload.user);

    if (account?.password != body.oldPassword)
      return res.status(400).json('Senha incorreta');
    await ChangePassword(payload.user, body.newPassword);
    return res.status(200).json();
  } catch (e: any) {
    return res.status(500).json(e.message);
  }
});

export default accountRoutes;
