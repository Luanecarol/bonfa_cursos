import { Equal } from 'typeorm';
import AppDataSource from '../../dataSource';
import Account from '../entities/Account';
import Integration from '../entities/Integration';
import Platform from '../entities/Platform';

const IntegrationRepo = AppDataSource.getRepository(Integration);

const getAllIntegrations = async () => {
  return await IntegrationRepo.find({
    relations: {
      account: true,
      platform: true,
    },
  });
};

const getAllIntegrationsByAccountId = async (accountId: number) => {
  return await IntegrationRepo.find({
    where: {
      account: { id: accountId },
    },
  });
};

const getIntegrationById = (id: number) =>
  IntegrationRepo.findOne({
    where: {
      id,
    },
    relations: {
      account: true,
      platform: true,
    },
  });

const saveIntegration = async (
  account: Account,
  platform: Platform,
  key: string
) => {
  const integration = new Integration();
  integration.account = account;
  integration.platform = platform;
  integration.publicKey = key;

  await IntegrationRepo.save(integration);
};

const editIntegration = async (id: number, key: string) => {
  const integration = new Integration();
  integration.publicKey = key;

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
  getAllIntegrationsByAccountId,
  getIntegrationById,
  deleteIntegration,
  editIntegration,
};
