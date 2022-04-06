import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  private ordersService: OrdersService;

  constructor() {
    this.ordersService = new OrdersService();
  }

  async getAll(_req: Request, res: Response) {
    const orders = await this.ordersService.getAll();

    return res.status(200).json(orders);
  }
}