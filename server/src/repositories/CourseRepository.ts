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
  });

const SaveCourse = async (
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

export { SaveCourse, getAllCourses, getAllCoursesByAccountId, getCourseById };
