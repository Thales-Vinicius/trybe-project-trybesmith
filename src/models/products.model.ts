import { Pool } from 'mysql2/promise';
import { Products } from '../interfaces/products.interfaces';

export default class ProductsModels {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async () => {
    const query = 'SELECT * FROM Trybesmith.Products;';

    const [result] = await this.connection.execute(query);

    return result as Products[];
  };
}