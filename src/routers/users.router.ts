import { Request, Response, Router } from 'express';
import UsersController from '../controllers/users.controller';
import { classeValidate, levelValidate, passwordValidate, usernameValidate } from '../middlewares';

const usersController = new UsersController();

const router = Router();

router.post(
  '/',
  usernameValidate,
  classeValidate,
  levelValidate,
  passwordValidate,
  async (req: Request, res: Response) => {
    await usersController.create(req, res);
  },
);

export default router;