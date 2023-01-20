import { Equal } from 'typeorm';
import AppDataSource from '../../dataSource';
import Lesson from '../entities/Lesson';
import Module from '../entities/Module';

const LessonRepo = AppDataSource.getRepository(Lesson);

const getAllLessons = async () => {
  return await LessonRepo.find({
    relations: {
      module: true,
    },
  });
};

const getAllLessonsByModuleId = async (moduleId: number) => {
  return await LessonRepo.find({
    where: {
      module: { id: moduleId },
    },
  });
};

const getLessonById = (id: number) =>
  LessonRepo.findOne({
    where: {
      id,
    },
    relations: {
      module: {
        course: {
          account: true,
        },
      },
    },
  });

const saveLesson = async (
  module: Module,
  videoUrl: string,
  lessonTitle: string
) => {
  const lesson = new Lesson();
  lesson.videoUrl = videoUrl;
  lesson.lessonTitle = lessonTitle;
  lesson.module = module;
  await LessonRepo.save(lesson);
};

const editLesson = async (
  id: number,
  videoUrl: string,
  lessonTitle: string
) => {
  const lesson = new Lesson();
  lesson.videoUrl = videoUrl;
  lesson.lessonTitle = lessonTitle;

  await LessonRepo.update(
    {
      id,
    },
    lesson
  );
};

const deleteLesson = async (id: number) =>
  await LessonRepo.delete({
    id: Equal(id),
  });

export {
  saveLesson,
  getAllLessons,
  getAllLessonsByModuleId,
  getLessonById,
  deleteLesson,
  editLesson,
};
