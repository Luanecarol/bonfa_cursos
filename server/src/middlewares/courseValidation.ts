import { NextFunction, Request, Response } from 'express';
import { getAllCoursesByAccountId } from '../repositories/CourseRepository';
import { getSubscriptionByAccountId } from '../repositories/SubscriptionRepository';

export const validateCourseAdd = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accountId = req.params.accountId;

    const courses = await getAllCoursesByAccountId(Number.parseInt(accountId));
    const subscription = await getSubscriptionByAccountId(
      Number.parseInt(accountId)
    );
    console.log(courses.length);
    switch (subscription?.plan.title) {
      case 'PLANO LITE':
        if (courses.length == 1) {
          return res
            .status(403)
            .json({ erro: 'Não pode adicionar mais cursos' });
        }
      case 'PLANO START':
        if (courses.length == 20) {
          return res
            .status(403)
            .json({ erro: 'Não pode adicionar mais cursos' });
        }
      default:
        return next();
    }
  } catch (e: any) {
    console.log(e);
    return res.status(401).json();
  }
};
