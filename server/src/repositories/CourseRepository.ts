import { Equal } from 'typeorm';
import AppDataSource from '../../dataSource';
import Account from '../entities/Account';
import Course from '../entities/Course';

const CourseRepo = AppDataSource.getRepository(Course);

const getAllCourses = async () => {
  return await CourseRepo.find({
    relations: {
      account: true,
    },
  });
};

const getAllCoursesByAccountId = async (accountId: number) => {
  return await CourseRepo.find({
    where: {
      account: { id: accountId },
    },
  });
};

const getCourseById = (id: number) =>
  CourseRepo.findOne({
    where: {
      id,
    },
    relations: {
      account: true,
    },
  });

const saveCourse = async (
  account: Account,
  title: string,
  description: string,
  category: string
) => {
  const course = new Course();
  course.category = category;
  course.name = title;
  course.description = description;
  course.account = account;

  await CourseRepo.save(course);
};

const editCourse = async (
  id: number,
  title: string,
  description: string,
  category: string
) => {
  const course = new Course();
  course.category = category;
  course.name = title;
  course.description = description;

  await CourseRepo.update(
    {
      id,
    },
    course
  );
};

const deleteCourse = async (id: number) =>
  await CourseRepo.delete({
    id: Equal(id),
  });

export {
  saveCourse,
  getAllCourses,
  getAllCoursesByAccountId,
  getCourseById,
  deleteCourse,
  editCourse,
};
