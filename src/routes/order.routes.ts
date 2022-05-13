import express from 'express';
import getAllOrders from '../controllers/orders.controller';

const route = express();

route.get('/', getAllOrders);

export default route;