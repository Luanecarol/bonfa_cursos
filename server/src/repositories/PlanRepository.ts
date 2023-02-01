import AppDataSource from '../../dataSource';
import Plan from '../entities/Plan';

const planRepository = AppDataSource.getRepository(Plan);

const getPlanByName = async (name: string) => {
  return await planRepository.findOne({
    where: {
      title: name,
    },
  });
};

const getAllPlans = async () => planRepository.find({});

export { getPlanByName, getAllPlans };
