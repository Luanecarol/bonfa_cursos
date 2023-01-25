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

const getIntegrationByAccountAndPlatform = async (
  accountId: number,
  platformId: number
) => {
  return await IntegrationRepo.findOne({
    where: {
      account: { id: accountId },
      platform: { id: platformId },
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

const getAccountActiveIntegration = async (accountId: number) =>
  await IntegrationRepo.findOne({
    where: {
      account: { id: accountId },
      isActive: true,
    },
  });

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

const activateIntegration = async (
  integrationId: number,
  accountId: number
) => {
  const integration = await IntegrationRepo.update(
    {
      id: integrationId,
    },
    {
      isActive: true,
    }
  );

  await IntegrationRepo.query(
    'UPDATE integration SET isActive = 0 WHERE accountId = ? AND id != ?',
    [accountId, integrationId]
  );
};

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
  getIntegrationByAccountAndPlatform,
  activateIntegration,
  getAccountActiveIntegration,
};
