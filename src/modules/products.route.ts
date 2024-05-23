
import express from 'express'

import { GetAllProducts, GetSingleProductById, createOrderHandler, createProductHandler, deletedProduct, getAllOrders,  getOrdersByEmail, updateProductInformation } from './products.controller';



const router=express.Router()
// product router
const productRouter=express.Router()
productRouter.post('/',createProductHandler);

productRouter.get('/:productId',GetSingleProductById) 
// update for route
productRouter.post('/:productId',updateProductInformation)
// for delete
productRouter.delete('/:productId',deletedProduct)

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