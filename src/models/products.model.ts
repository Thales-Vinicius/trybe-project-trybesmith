import { Pool, ResultSetHeader } from 'mysql2/promise';
import { INewProduct, IProducts } from '../interfaces/products.interfaces';

export default class ProductsModels {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async (): Promise<IProducts[]> => {
    const query = 'SELECT * FROM Trybesmith.Products;';

    const [result] = await this.connection.execute(query);

    return result as IProducts[];
  };

  create = async (product: IProducts): Promise<INewProduct> => {
    const { name, amount } = product;

    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';

    const [result] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    const item = { id: result.insertId, ...product };

    return { item };
  };
}