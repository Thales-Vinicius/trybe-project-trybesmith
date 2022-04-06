import { Request, Response, Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersController = new OrdersController();

const router = Router();

router.get(
  '/',
  async (req: Request, res: Response) => {
    await ordersController.getAll(req, res);
  },
);

export default router;