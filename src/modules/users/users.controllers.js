import User from "../../../db/models/users.model.js";
import axios from "axios";
import bcrypt from "bcrypt"

export const signUp = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!email || !password || !name)
    {
        res.send({message:"Failed",error:"You must provide an email"})
        return;
    }
    // const doesEmailExist = await User.findOne({where:{email:email}});
    let doesEmailExist;
    try {
        doesEmailExist= await axios.get(`https://app-22561d9f-42ee-46a9-9a7a-8e35f7b0373a.cleverapps.io/=${email}`);
        console.log(doesEmailExist);
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
    if(doesEmailExist.data.user)
    {
        res.send({message:"This Email Already Exists",user:doesEmailExist.data.user});
        return;
    }
    const hash = bcrypt.hashSync(password,1);
    try {
        const x = await User.create({name:name,email:email,password:hash});
        res.send({message:"Success",object:x});
    } catch (error) {
        res.send({message:"Failed To Insert",error:error});
    }
    return;
}

export const logIn =async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password)
    {
        return res.send({message:"Failed", error:"Incomplete Information"});
    }
    const user =await User.findOne({where:{email:email}});
    if(!user)
        return res.send({message:"Failed"})
    if(bcrypt.compareSync(password, user.password))
    {
        return res.send({message:"LogIn Succeeded",enteredPass:password,hashedPass:user.password})
    }
    return res.send({message:"logIn Failed",user:user})
}

export const getUser = async(req,res)=>{
    const {email} = req.query;
    try {
        if(!email)
            return res.send({message:"Empty Input Fields"});
        const user =await User.findOne({where:{email:email},attributes:['name']});
        if(!user)
            return res.send({message:"No User"});
        return res.send({user:user});
    } catch (error) {
        return res.send({error:error});
    }
}