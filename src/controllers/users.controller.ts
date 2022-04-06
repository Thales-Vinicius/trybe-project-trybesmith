import { Request, Response } from 'express';
import UsersService from '../services/users.serivece';

export default class UsersController {
  private userService: UsersService;

  constructor() {
    this.userService = new UsersService();
  }

  async create(req: Request, res: Response) {
    const user = req.body;

    const token = await this.userService.create(user);

    return res.status(201).json({ token });
  }
}