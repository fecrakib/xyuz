
import express from 'express'

import { createOrderHandler, createProductHandler } from './products.controller';

const router=express.Router()

router.post ('/',createOrderHandler)

router.post('/',createProductHandler);





export const ProductRoutes=router;