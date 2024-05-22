import { creteOrder, createProduct} from "./products.service"
import { ProductValidationSchema, orderSchema } from "./validateData"
import { Request, Response } from 'express';


export const createOrderHandler =async (req:Request,res:Response)=>{
 try {
    const orderData = orderSchema .parse (req.body)
    const newOrder = await creteOrder(orderData);


    res.status(201).json({
        success: true,
        message: 'Order created successfully!',
        data: newOrder
    });

 } catch (error) {
  
    res.status(400).json({
        success: false,
        message: 'Order creation failed!',
   
    });
 }
}

export  const createProductHandler=async (req:Request,res:Response)=>{
    try {
     
        const productData=ProductValidationSchema.parse(req.body);
        const result =await  createProduct(productData);
        res.json(({
            success:true,
            message:"Product  create successfully ",
            data:result,
        }))

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not create product!",
            error: error
          });
        
    }



}