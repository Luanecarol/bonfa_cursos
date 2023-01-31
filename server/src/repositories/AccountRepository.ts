import AppDataSource from '../../dataSource';
import Account from '../entities/Account';

const AccountRepo = AppDataSource.getRepository(Account);

const getAllAccounts = async () =>
  await AccountRepo.find({
    relations: {
      subscription: true,
    },
  });

const SaveAccount = async (
  username: string,
  password: string,
  email: string
) => {
  const account = new Account();
  account.username = username;
  account.password = password;
  account.email = email;

  AccountRepo.save(account);
};

const GetAccountByUsername = async (username: string) => {
  const account = await AccountRepo.findOne({
    where: { username },
  });

  return account;
};

const GetAccountByEmailOrUsername = async (usernameOrEmail: string) => {
  const account = await AccountRepo.findOne({
    where: [
      {
        username: usernameOrEmail,
      },
      {
        email: usernameOrEmail,
      },
    ],
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
  GetAccountByEmailOrUsername,
};
