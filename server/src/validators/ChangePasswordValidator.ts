import Joi from 'joi';
import ChangePasswordRequest from '../models/ChangePasswordRequest';

export default Joi.object<ChangePasswordRequest>({
  oldPassword: Joi.string().min(8).required().messages({
    'any.required': 'Senha antiga deve ser inserida',
  }),
  newPassword: Joi.string().min(8).required().messages({
    'any.required': 'Nova senha deve ser inserida',
  }),
  confirmNewPassword: Joi.string().equal(Joi.ref('newPassword')).messages({
    'any.only': 'nova senha e confirmação não são iguais',
  }),
});
