import AppDataSource from '../../dataSource';
import Account from '../entities/Account';

const AccountRepo = AppDataSource.getRepository(Account);

const getAllAccounts = async () => await AccountRepo.find();

const SaveAccount = async (username: string, password: string) => {
  const account = new Account();
  account.username = username;
  account.password = password;

  AccountRepo.save(account);
};

const GetAccountByUsername = async (username: string) => {
  const account = await AccountRepo.findOne({
    where: { username },
  });

  return account;
};

const GetAccountById = async (id: number) =>
  await AccountRepo.findOne({ where: { id } });

const ChangePassword = async (id: number, password: string) => {
  const account = await AccountRepo.findOne({ where: { id } });

  if (account) {
    account.password = password;

    await AccountRepo.save(account);
  }
};

export {
  SaveAccount,
  GetAccountByUsername,
  ChangePassword,
  GetAccountById,
  getAllAccounts,
};
