import connection from './connection';
import Product from '../products.interface';

const getAll = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [result] = await connection.execute(query);
  return result as Product[];
};

export default getAll;

// export = {
//   getAll,
// };