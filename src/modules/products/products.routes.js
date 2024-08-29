import { Router } from "express";
import * as productsControllers from "./products.controllers.js";
const productRouter = Router();
productRouter.get('/getAllproducts',productsControllers.getAllProducts);
export default productRouter;