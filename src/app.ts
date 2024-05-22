import express, { Request, Response } from 'express';

const app = express();

app.get('/api/products');

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});



export default app