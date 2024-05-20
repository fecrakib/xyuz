
import express,{Request,Response} from 'express'
import { Movie } from './move.model';
import { MovieControllers } from './move.controler';

const router=express.Router()

router.post('/',MovieControllers.createMovie);

export const MovieRouters=router;