import { Response, Request, NextFunction } from 'express';
import userModel from '../models/users.model';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, classe, level, password } = req.body;
    const token = await userModel({ username, classe, level, password });
    return res.status(200).json({ token });
  } catch (e) {
    return next(e);
  }
};

export default create;
