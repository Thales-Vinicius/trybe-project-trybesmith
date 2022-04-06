import jwtGenerator from '../helpers/jwtGenerator';
import { IUsers } from '../interfaces/users.interfaces';
import connection from '../models/connection';
import UsersModels from '../models/users.models';

export default class UsersService {
  private usersModels: UsersModels;

  constructor() {
    this.usersModels = new UsersModels(connection);
  }

  create = async (user: IUsers): Promise<string> => {
    const newUser = await this.usersModels.create(user);

    const createToken = jwtGenerator(newUser);

    return createToken;
  };
}