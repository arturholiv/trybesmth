import express from 'express';
import productsController from '../controllers/products.controller';
import productName from '../middlewares/productName.middlewares';
import productAmount from '../middlewares/productAmount.middleware';

const route = express();

route.get('/', productsController.getAll);
route.post('/', productName, productAmount, productsController.create);

export default route;