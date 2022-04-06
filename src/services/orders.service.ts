import { ListOrders } from '../interfaces/orders.interfaces';
import connection from '../models/connection';
import OrdersModels from '../models/orders.model';

export default class OrdersService {
  private ordersModels: OrdersModels;

  constructor() {
    this.ordersModels = new OrdersModels(connection);
  }

  getAll = async (): Promise<ListOrders[]> => {
    const getOrders = await this.ordersModels.getAll();

    const allOrders = getOrders.map(({ id, userId, product }) => ({
      id,
      userId,
      products: [product],
    }));

    return allOrders;
  };
}