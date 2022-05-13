import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Product from '../interfaces/products.interface';

const getAll = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [result] = await connection.execute(query);
  return result as Product[];
};

const create = async (name: string, amount: string) => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return {
    id: insertId,
    name,
    amount,
  };
};

// export default getAll;

export = {
  getAll,
  create,
};