import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  private productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  async getAll(_req: Request, res: Response) {
    const products = await this.productsService.getAll();

    return res.status(200).json(products);
  }
}