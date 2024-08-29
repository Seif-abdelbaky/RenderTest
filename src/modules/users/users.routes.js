import { Router } from "express";
import * as usersController from './users.controllers.js'
const userRouter = Router();
userRouter.post('/signUp',usersController.signUp);
userRouter.post('/logIn',usersController.logIn);
userRouter.get('/getUser',usersController.getUser);
export default userRouter;