import Joi from 'joi';
import IntegrationSaveRequest from '../models/IntegrationSaveRequest';

export default Joi.object<IntegrationSaveRequest>({
  publicKey: Joi.string().min(3).required(),
  platformName: Joi.string().min(3).required(),
});
