import { Request, Response, NextFunction } from 'express';
import productModel from '../models/prouducts.model';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    // const result = await productModel.getAll();
    const result = await productModel();
    res.status(200).json(result);
  } catch (e) {
    return next(e);
  }
};

export default getAll;

// export = {
//   getAll,
// };