import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUsers } from '../interfaces/users.interfaces';

export default class UsersModels {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (user: IUsers): Promise<IUsers> => {
    const { username, classe, level, password } = user;

    const query = `INSERT INTO Trybesmith.Users 
      (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;
    
    const [result] = await this.connection
      .execute<ResultSetHeader>(query, [username, classe, Number(level), password]);
    
    const newUser = { id: result.insertId, username, classe, level };

    return newUser;
  };
}