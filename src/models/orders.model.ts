import { Pool } from 'mysql2/promise';
import { IOrders } from '../interfaces/orders.interfaces';

export default class OrdersModels {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async (): Promise<IOrders[]> => {
    const query = `SELECT 
      ord.id, 
      userId, 
      pro.id AS product FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS pro ON ord.id = pro.orderId;`;

    const [result] = await this.connection.execute(query);

    return result as IOrders[];
  };
}