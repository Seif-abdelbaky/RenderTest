import { Sequelize } from "sequelize";
export const sequelizeInstance = new Sequelize('b1o7athpqr2skjbakmre','uqibjnbqugg5hcv5','RrSAx3pKArM0OnA7s9mU',{
    host: 'b1o7athpqr2skjbakmre-mysql.services.clever-cloud.com',
    dialect:  'mysql'
});

const testConnection= async ()=>
{
    try {
    await sequelizeInstance.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) 
    {
    console.error('Unable to connect to the database:', error);
    }
}
export const dbConnect = async()=>{
    try {
        await sequelizeInstance.sync({alter:true});
        console.log('Connection has been established successfully.');
        } catch (error) 
        {
        console.error('Unable to connect to the database:', error);
        }
}
