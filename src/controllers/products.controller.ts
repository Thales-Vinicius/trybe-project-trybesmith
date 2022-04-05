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

  async create(req: Request, res: Response) {
    const product = req.body;

    const newProduct = await this.productsService.create(product);

    return res.status(201).json(newProduct);
  }
}