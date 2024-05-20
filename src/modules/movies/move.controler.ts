import { Response,Request } from "express";
import { MovieService } from "./move.service";


const createMovie= async (req:Request,res:Response)=>{
    const movieData=req.body;
    const result= await MovieService.createMovie(movieData);
    
    res.json(({
        success:true,
        message:"Movie create successfully ",
        data:result,
       }))
    
}

export const MovieControllers={
     createMovie,
}