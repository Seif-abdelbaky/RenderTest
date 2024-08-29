import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../db.connection.js";

const Product = sequelizeInstance.define(
    'Product',
    {
        id:
        {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:
        {
            type:DataTypes.STRING,
            allowNull:false
        },
        price:
        {
            type:DataTypes.FLOAT,
            allowNull:false
        }
    }
);
//console.log(Product===sequelizeInstance.models.Product);

export default Product