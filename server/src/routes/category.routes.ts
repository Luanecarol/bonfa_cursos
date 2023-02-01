import { Router } from 'express';
import { validateToken } from '../middlewares/authMiddleware';
import {
  getAllCategories,
  getCategoryById,
} from '../repositories/CategoryRepository';

const categoryRouter = Router();

categoryRouter.get('/', validateToken, async (req, res) => {
  const categories = await getAllCategories();

  return res.status(200).json(categories);
});

categoryRouter.get('/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const category = await getCategoryById(Number.parseInt(id) ?? 0);

  if (!category) return res.status(404).json({ erro: 'Categoria não existe' });
  return res.status(200).json(category);
});

export default categoryRouter;
