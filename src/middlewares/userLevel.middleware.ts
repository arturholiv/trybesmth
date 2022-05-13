import { Request, Response, NextFunction } from 'express';

const isLevelValid = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (!level) return res.status(400).json({ message: '"level" is required' });
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a string' });
  }
  if (level < 1) {
    return res.status(422).json(
      { message: '"level" length must be greater or equal to 1' },
    );
  }
  next();
};

export default isLevelValid;