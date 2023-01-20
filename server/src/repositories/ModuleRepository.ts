import { Equal } from 'typeorm';
import AppDataSource from '../../dataSource';
import Course from '../entities/Course';
import Module from '../entities/Module';

const ModuleRepo = AppDataSource.getRepository(Module);

const getAllModules = async () => {
  return await ModuleRepo.find({
    relations: {
      course: true,
    },
  });
};

const getAllModulesByCourseId = async (courseId: number) => {
  return await ModuleRepo.find({
    where: {
      course: { id: courseId },
    },
  });
};

const getModuleById = (id: number) =>
  ModuleRepo.findOne({
    where: {
      id,
    },
    relations: {
      course: {
        account: true,
      },
    },
  });

const saveModule = async (course: Course, name: string) => {
  const module = new Module();
  module.name = name;
  module.course = course;

  await ModuleRepo.save(module);
};

const editModule = async (id: number, name: string) => {
  const module = new Module();
  module.name = name;

  await ModuleRepo.update(
    {
      id,
    },
    module
  );
};

const deleteModule = async (id: number) =>
  await ModuleRepo.delete({
    id: Equal(id),
  });

export {
  saveModule,
  getAllModules,
  getAllModulesByCourseId,
  getModuleById,
  deleteModule,
  editModule,
};
