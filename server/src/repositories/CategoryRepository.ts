import AppDataSource from '../../dataSource';
import Category from '../entities/Category';

const CategoryRepository = AppDataSource.getRepository(Category);

const getAllCategories = async () => {
  return await CategoryRepository.find();
};

const getCategoryByName = async (name: string) => {
  return await CategoryRepository.findOne({
    where: {
      title: name,
    },
  });
};

const getCategoryById = (id: number) =>
  CategoryRepository.findOne({
    where: {
      id,
    },
  });

export { getAllCategories, getCategoryById, getCategoryByName };
