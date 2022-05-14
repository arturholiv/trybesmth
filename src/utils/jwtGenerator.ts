import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = 'segredo' as Secret;

const generate = (payload: object) => {
  const options: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '20 min',
  };

  const token = jwt.sign(payload, secret, options);
  return token;
};

export default generate;