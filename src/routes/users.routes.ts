import express from 'express';
import usersController from '../controllers/users.controllers';
import userName from '../middlewares/userName.middleware';
import userClass from '../middlewares/userClasse.middleware';
import userLevel from '../middlewares/userLevel.middleware';
import userPassword from '../middlewares/userPassword.middleware';

const route = express();

route.post('/', userName, userClass, userLevel, userPassword, usersController);

export default route;