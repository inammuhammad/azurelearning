import express from 'express';
import { asyncWrapper } from '../../middlewares/async-wrapper';
import { UserController } from './user.controller';

export const UserRouter = express.Router();

UserRouter.get('/list', asyncWrapper(UserController.List));

UserRouter.post('/', asyncWrapper(UserController.Create));