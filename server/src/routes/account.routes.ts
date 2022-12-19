import { Router } from 'express';
import { generateUsername } from 'unique-username-generator';
import { OrderEventWebHook } from '../models/OrderEventWebHook';
import {
  GetAccountByUsername,
  SaveAccount,
} from '../repositories/AccountRepository';
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

export default accountRoutes;
