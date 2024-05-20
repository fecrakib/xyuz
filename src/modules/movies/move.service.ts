import { Movie } from "./move.model";
import { TMovie } from "./movies.interface";


const createMovie= async (payLoad:TMovie)=>{
    const result=await Movie.create (payLoad);
   
    return result;
    
}
export const MovieService={

    createMovie
}