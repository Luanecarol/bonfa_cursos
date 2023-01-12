import Joi from 'joi';
import Course from '../entities/Course';

export default Joi.object<Course>({
  name: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
});
