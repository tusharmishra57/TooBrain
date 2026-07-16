import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import 'dotenv/config';
import {z} from "zod";
import bcrypt from "bcrypt";
import {userModel} from "./db.js"
import type {Request, Response} from "express";
const app = express();
app.use(express.json());


app.post("/api/v1/signup", async (req: Request, res: Response) => {
    const {username, password} = req.body;

    const requireBody = z.object({
        username: z.string().min(3).max(10),
        password: z.string().min(8).max(20).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[^A-Za-z0-9]/)
    })

    const parsedBodyWithSucess = requireBody.safeParse(req.body);
    if(!parsedBodyWithSucess.success)
    {
        res.json({
            message: "not correct credentials",
            error: parsedBodyWithSucess.error
        })
    }


    try{
        const hashedPassword = await bcrypt.hash(password, 5)

        await userModel.create({
        username: username, 
        password: hashedPassword
    })
        res.status(200).json({
            msg: "Signed up "
        })
    }
    catch(e: any)
    {
        if(e.code == 411)
        {
            res.status(411).json({
                msg: "Error in inputs"
            });
            return;
        }
        if(e.code == 403 || e.code === 11000)
        {
            res.status(403).json({
                msg: "user alredy exist"
            });
            return;
        }

        res.status(500).json({
            msg: "Server error"
        })
    }
    
     
})

app.post("/api/v1/signin", (req: Request, res: Response) => {
    
})

app.post("/api/v1/content", (req: Request, res: Response) => {
    
})

app.get("/api/v1/content", (req: Request, res: Response) => {
    
})

app.delete("/api/v1/delete", (req, res) => {
    
})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/shareLink", (req, res) =>{

})


mongoose.connect(process.env.MONGO_URL as string)