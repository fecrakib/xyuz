
import express from 'express'

import { GetAllProducts, GetSingleProductById, createOrderHandler, createProductHandler, deletedProduct, getAllOrders,  getOrdersByEmail, searchProducts, updateProductInformation } from './products.controller';




// product router
const productRouter =express.Router()
      productRouter.post('/',createProductHandler);
      
      productRouter.get('/:productId',GetSingleProductById) 
      // update for route
      productRouter.post('/:productId',updateProductInformation)
      // for delete
      productRouter.delete('/:productId',deletedProduct)
      
      productRouter.get('/',GetAllProducts)
      
 const searchRouter = express.Router()

searchRouter.get('/', searchProducts); // Added search route
// order router

const router=express.Router()
router.post ('/',createOrderHandler)

router.get('/',getAllOrders)

const OrderGetByEmail=express.Router()
OrderGetByEmail.get('/', getOrdersByEmail);





export const ProductRoutes={
    router,
    productRouter,
    OrderGetByEmail,
    searchRouter,

}