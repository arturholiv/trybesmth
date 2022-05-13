import { Request, Response, NextFunction } from 'express';
import productModel from '../models/prouducts.model';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await productModel.getAll();
    res.status(200).json(result);
  } catch (e) {
    return next(e);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  try {
    const result = await productModel.create(name, amount);
    res.status(201).json(result);
  } catch (e) {
    return next(e);
  }
};

export = {
  getAll,
  create,
};