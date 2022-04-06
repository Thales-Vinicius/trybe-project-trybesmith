import jwt from 'jsonwebtoken';
import { IUsers } from '../interfaces/users.interfaces';

const jwtConfig = {
  expiresIn: '1d',
};

const SECRET = 'coxinha';

export default (data: IUsers) => jwt.sign({ data }, SECRET, jwtConfig);