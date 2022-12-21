import Joi from 'joi';
import { Course } from '../models/Course';

export default Joi.object<Course>({
  title: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
});
