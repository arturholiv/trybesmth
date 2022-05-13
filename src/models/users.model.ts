import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../interfaces/users.interfaces';
import jwtGenerator from '../utils/jwtGenerator';

const create = async ({ username, classe, level, password }: User) => {
  const query = `INSERT INTO Trybesmith.Users(username,
    classe, level, password) VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await
  connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
  if (insertId) {
    const token = jwtGenerator({ username, password });
    return token;
  }
};

export default create;