
import express,{Request,Response} from 'express'
import { Movie } from './move.model';

const router=express.Router()

router.post('/',async(req:Request,res:Response)=>{
   const result=await Movie.create(req.body);
   res.json(({
    success:true,
    message:"Movie create successfully ",
    data:result,
   }))


})

export const MovieRouters=router;