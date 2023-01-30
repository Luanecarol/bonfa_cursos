import { Equal } from 'typeorm';
import AppDataSource from '../../dataSource';
import Course from '../entities/Course';
import Integration from '../entities/Integration';
import Platform from '../entities/Platform';

const IntegrationRepo = AppDataSource.getRepository(Integration);

const getAllIntegrations = async () => {
  return await IntegrationRepo.find({
    relations: {
      course: true,
      platform: true,
    },
  });
};

const getIntegrationByCourseAndPlatform = async (
  accountId: number,
  platformId: number
) => {
  return await IntegrationRepo.findOne({
    where: {
      course: { id: accountId },
      platform: { id: platformId },
    },
  });
};

const getAllIntegrationsByCourseId = async (courseId: number) => {
  return await IntegrationRepo.find({
    where: {
      course: { id: courseId },
    },
  });
};

const getIntegrationById = (id: number) =>
  IntegrationRepo.findOne({
    where: {
      id,
    },
    relations: {
      course: {
        account: true,
      },
      platform: true,
    },
  });

const saveIntegration = async (
  course: Course,
  platform: Platform,
  urlCheckout?: string
) => {
  const integration = new Integration();
  integration.course = course;
  integration.platform = platform;
  integration.urlCheckout = urlCheckout ?? null;

  await IntegrationRepo.save(integration);
};

const editIntegration = async (id: number, urlCheckout: string) => {
  const integration = new Integration();
  integration.urlCheckout = urlCheckout;

  await IntegrationRepo.update(
    {
      id,
    },
    integration
  );
};

const deleteIntegration = async (id: number) =>
  await IntegrationRepo.delete({
    id: Equal(id),
  });

export {
  saveIntegration,
  getAllIntegrations,
  getAllIntegrationsByCourseId,
  getIntegrationById,
  deleteIntegration,
  editIntegration,
  getIntegrationByCourseAndPlatform,
};