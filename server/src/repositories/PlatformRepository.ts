import AppDataSource from '../../dataSource';
import Platform from '../entities/Platform';

const platformRepository = AppDataSource.getRepository(Platform);

const getPlaformByName = async (name: string) => {
  return await platformRepository.findOne({
    where: {
      platformName: name,
    },
  });
};

export { getPlaformByName };
