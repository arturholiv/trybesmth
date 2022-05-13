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

const getProductByOrder = async (orderId: number): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.Products WHERE orderId=?;';
  const [result] = await connection.execute(query, [orderId]);
  return result as Product[];
};

// export default getAll;

export = {
  getAll,
  create,
  getProductByOrder,
};