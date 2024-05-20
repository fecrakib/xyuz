
import express, { Request, Response } from 'express'
import { MovieRouters } from './modules/movies/movie.route'
const app = express()
app.use(express.json())



app.use("/api/movies",MovieRouters)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})



export default app