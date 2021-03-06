import { Request, Response, Router } from 'express';
import ProductsController from '../controllers/products.controller';
import { amountValidate, nameValidate } from '../middlewares';

const productsController = new ProductsController();

const router = Router();

router.get(
  '/',
  async (req: Request, res: Response) => {
    await productsController.getAll(req, res);
  },
);

router.post(
  '/',
  nameValidate,
  amountValidate,
  async (req: Request, res: Response) => {
    await productsController.create(req, res);
  },
);

export default router;
