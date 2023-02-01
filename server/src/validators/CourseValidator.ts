import Joi from 'joi';
import saveUpdateCourseRequest from '../models/saveUpdateCourseRequest';

export default Joi.object<saveUpdateCourseRequest>({
  name: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
});
