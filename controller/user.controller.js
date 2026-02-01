import RestaurantModel from "../model/Restaurant.model.js"
import userModel from "../model/user.model.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';

export async function register (req,res){
  // send data through postman
//   console.log(req.body, "req.body");
try{
    let {fullName,email,password}=req.body;
    const data = await userModel.findOne({email});
    if(data){
        return res.status(409).json({message:"user already exists"});

    }
    else{
        const newUser = await userModel.create({
            fullName,
            email,
            password: bcrypt.hashSync(password, 10)
        })
        return res.status(201).json({message:newUser})
    }
}

catch(err){
    return res.status(500).json({err:err.message})
}
}

export async function login(req,res){
    try{
       let {email,password} = req.body;
       const data = await userModel.findOne({email});
       if(!data){
        return res.status(409).json({message: "user doesnot exists"})
       }
       else{
        let validPassword = bcrypt.compareSync(password,data.password)
        if(!validPassword){
            return res.status(403).json({message: "wrong credentials"})
        }
        const token = jwt.sign({ id: data.id }, 'SECRETKEY', {expiresIn:"60m"});
        return res.status(200).json({
            user: {
                email: data.email,
                fullName: data.fullName,
                // password: data.password
            },
            accessToken: token
        })
       }
    }
    catch(err){
    return res.status(500).json({err:err.message})
}
}

