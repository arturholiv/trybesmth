import { Response, Request, NextFunction } from 'express';
import orderModel from '../models/orders.model';

const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await orderModel();
    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
};

export default getAllOrders;