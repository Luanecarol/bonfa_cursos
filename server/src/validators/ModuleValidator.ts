import Joi from 'joi';
import Module from '../entities/Module';

export default Joi.object<Module>({
  name: Joi.string().min(3).required(),
});
