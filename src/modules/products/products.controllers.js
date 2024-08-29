import Product from "../../../db/models/products.model.js"
import User from "../../../db/models/users.model.js"

export const getAllProducts = async(req,res)=>{
    const products = await Product.findAll({attributes:['name','price'],include:[
        {model:User ,where:{name:"seif"},required:false,attributes:['name']}
    ],limit:1,offset:1})
    return res.send({products:products});
}