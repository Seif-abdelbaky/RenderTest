import express from 'express';
import { dbConnect } from './db/db.connection.js';
import User from './db/models/users.model.js';
import Product from './db/models/products.model.js';
import userRouter from './src/modules/users/users.routes.js'
import productRouter from './src/modules/products/products.routes.js';

const app = express();
const port = 8080;
app.use(express.json());
dbConnect();
app.use('/users',userRouter);
app.use('/products',productRouter);
app.listen(port,()=>{
    console.log(`SERVER STARTED AT ${port}`);
})