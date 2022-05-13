import express from 'express';
import productsController from '../controllers/products.controller';

const route = express();

route.get('/', productsController);

export default route;