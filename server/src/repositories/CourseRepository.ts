import AppDataSource from '../../dataSource';
import Account from '../entities/Account';
import Course from '../entities/Course';

const CourseRepo = AppDataSource.getRepository(Course);
const AccountRepo = AppDataSource.getRepository(Account);

const SaveCourse = async (
  accountId: number,
  title: string,
  description: string,
  category: string
) => {
  const account = await AccountRepo.findOne({ where: { id: accountId } });

  if (account) {
    const course = new Course();
    course.category = category;
    course.name = title;
    course.description = description;
    course.account = account;

    await CourseRepo.save(course);
  }
};

export { SaveCourse };
