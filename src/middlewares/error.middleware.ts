import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

export default (err: ErrorRequestHandler, req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  return res.status(500).json('internal error');
};