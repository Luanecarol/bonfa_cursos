import { Router } from 'express';
import { subscriptionPaidWebHook } from '../models/subscriptionPaidWebHook';
import { GetAccountByEmailOrUsername } from '../repositories/AccountRepository';
import { getPlanByName } from '../repositories/PlanRepository';
import { createSubscription } from '../repositories/SubscriptionRepository';

const subscriptionRouter = Router();

subscriptionRouter.post('/webhook/callback', async (req, res) => {
  const subcriptionPaidWebHook = req.body as subscriptionPaidWebHook;

  const account = await GetAccountByEmailOrUsername(
    subcriptionPaidWebHook.client.email
  );

  const plan = await getPlanByName(subcriptionPaidWebHook.product.name);
  console.log(plan);
  console.log(subcriptionPaidWebHook.product.name);
  await createSubscription(account!, plan!);

  return res.status(200).json();
});

export default subscriptionRouter;
