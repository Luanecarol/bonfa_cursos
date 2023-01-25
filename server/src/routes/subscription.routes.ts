import { Router } from 'express';
import MercadoPagoApi from '../config/MercadoPagoApi';
import { validateToken } from '../middlewares/authMiddleware';
import CardInfoRequest from '../models/cardInfoRequest';

const subscriptionRouter = Router();

subscriptionRouter.post('/create', validateToken, async (req, res) => {
  const cardInfo = req.body as CardInfoRequest;

  const response = await MercadoPagoApi.post('/v1/payments', cardInfo, {
    headers: {
      Authorization:
        'Bearer TEST-786632715734040-012217-bde69ef715ad8d4090604f16255a7f43-219805889',
    },
  });
  return res.status(200).json();
});

export default subscriptionRouter;
