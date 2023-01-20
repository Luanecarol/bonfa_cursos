import Joi from 'joi';
import Lesson from '../entities/Lesson';

export default Joi.object<Lesson>({
  videoUrl: Joi.string().min(3).required(),
  lessonTitle: Joi.string().min(3).required(),
});
