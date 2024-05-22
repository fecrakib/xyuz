import express, { Request, Response } from 'express';
import { ProductRoutes } from './modules/products.route';

const app = express();
app.use (express.json())

app.use('/api/products',ProductRoutes.productRouter)

app.use('/api/order',ProductRoutes.router);


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});



export default app