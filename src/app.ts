import express from 'express';
import { ProductRoutes } from './modules/products.route';

const app = express();

app.use(express.json());

// Mount product routes
app.use('/api/products', ProductRoutes.productRouter);

// Mount search route
app.use('/api/search', ProductRoutes.searchRouter);

// Mount order routes
app.use('/api/orders', ProductRoutes.router);
app.use('/api/orders', ProductRoutes.OrderGetByEmail);


export default app