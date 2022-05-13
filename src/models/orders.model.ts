import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Order from '../interfaces/orders.interface';
// import getAll from './prouducts.model';

const getAllOrders = async (): Promise<Order[]> => {
  const queryO = 'SELECT * FROM Trybesmith.Orders;';
  const queryP = 'SELECT * FROM Trybesmith.Products;';
  const [orders] = await connection.execute<RowDataPacket[]>(queryO);
  const [products] = await connection.execute<RowDataPacket[]>(queryP);
  const response = orders.map((order) => ({ 
    ...order,
    productsIds: products.filter((product) =>
      product.orderId === order.id).map((product) => product.id) }));

  return response as Order[];
};

export default getAllOrders;