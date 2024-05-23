
import express from 'express'

import { GetAllProducts, GetSingleProductById, createOrderHandler, createProductHandler, getAllOrders,  getOrdersByEmail } from './products.controller';



const router=express.Router()
// product router
const productRouter=express.Router()
productRouter.post('/',createProductHandler);

// productRouter.get('/',GetSingleProductById) 

productRouter.get('/',GetAllProducts)

// order router
router.post ('/',createOrderHandler)

router.get('/',getAllOrders)

const OrderGetByEmail=express.Router()
OrderGetByEmail.get('/', getOrdersByEmail);





export const ProductRoutes={
    router,
    productRouter,
    OrderGetByEmail,

}