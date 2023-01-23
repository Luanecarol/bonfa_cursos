import Joi from 'joi';
import IntegrationSaveRequest from '../models/IntegrationSaveRequest';

export const IntegrationSaveValidator = Joi.object<IntegrationSaveRequest>({
  publicKey: Joi.string().min(3).required(),
  platformName: Joi.string().min(3).required(),
});

export const IntegrationUpdateValidator = Joi.object<IntegrationSaveRequest>({
  publicKey: Joi.string().min(3).required(),
});
