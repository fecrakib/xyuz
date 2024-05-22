
import express from 'express'

import { createOrderHandler, createProductHandler } from './products.controller';

const router=express.Router()
const productRouter=express.Router()
productRouter.post('/',createProductHandler);


router.post ('/',createOrderHandler)







export const ProductRoutes={
    router,
    productRouter,
}