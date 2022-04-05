import { NewProduct, Products } from '../interfaces/products.interfaces';
import connection from '../models/connection';
import ProductsModels from '../models/products.model';

export default class ProductsService {
  private productsModels: ProductsModels;
  
  constructor() {
    this.productsModels = new ProductsModels(connection);
  }

  getAll = async (): Promise<Products[]> => {
    const products = await this.productsModels.getAll();

    return products;
  };

  create = async (product: Products): Promise<NewProduct> => {
    const newProduct = await this.productsModels.create(product);

    return newProduct;
  };
}