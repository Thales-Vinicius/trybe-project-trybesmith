import { Request, Response, Router } from 'express';
import ProductsController from '../controllers/products.controller';
// import validations

const productsController = new ProductsController();

const router = Router();

router.get(
  '/',
  async (req: Request, res: Response) => {
    await productsController.getAll(req, res);
  },
);

export default router;
