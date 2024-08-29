import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../db.connection.js";
import Product from "./products.model.js";
const User = sequelizeInstance.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(60),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull:false
    }
},{timestamps:true});
User.belongsToMany(Product,{through:"users_products",onDelete:"cascade",onUpdate:"cascade"});
Product.belongsToMany(User,{through:"users_products",onDelete:"cascade",onUpdate:"cascade"});
export default User;