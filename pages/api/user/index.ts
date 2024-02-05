import connectToDB from "@/utils/db";
import { NextApiRequest , NextApiResponse } from "next";
import usersModel from "@/models/user";
import { hashPassword } from "@/utils/funcs";


export default async (req : NextApiRequest,res : NextApiResponse) => {
    if(req.method == "GET"){
        connectToDB();
        const usersList = await usersModel.find({})
        return res.json(usersList)
    }else if (req.method == "POST"){
        connectToDB() 
        const {username,email,password,mobile} = req.body
        const hashedpass = await hashPassword(password)
        const newUser = await usersModel.create({username,email,password : hashedpass, mobile : Number(mobile)})
        return res.json({message : "user created ", user : newUser})
    }
}