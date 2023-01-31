import moment from 'moment';
import AppDataSource from '../../dataSource';
import Account from '../entities/Account';
import Plan from '../entities/Plan';
import Subscription from '../entities/Subscription';

const SubscriptionRepository = AppDataSource.getRepository(Subscription);

const createSubscription = async (account: Account, plan: Plan) => {
  var currentDate = moment();
  console.log(plan);
  var sub = new Subscription();
  sub.account = account;
  sub.plan = plan;
  sub.startDate = currentDate.toDate();
  sub.expiresIn = currentDate.add(30, 'day').toDate();

  await SubscriptionRepository.save(sub);
};

const getSubscriptionByAccountId = async (accountId: number) =>
  SubscriptionRepository.findOne({
    where: {
      account: { id: accountId },
    },
    relations: {
      plan: true,
    },
  });

export { createSubscription, getSubscriptionByAccountId };
