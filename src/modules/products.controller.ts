import { date } from "zod";
import { creteOrder, createProduct, getAllOrder, getOrderByEmail,  getAllProducts, singleProductGetById, updateProductById, deleteProductById} from "./products.service"
import { ProductValidationSchema, UpdateProductSchema, orderSchema } from "./validateData"
import { Request, Response } from 'express';



// create Product

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
// get all products

export const GetAllProducts = async (req:Request, res:Response) =>{
    try {
        const result = await  getAllProducts ();
        console.log(result)
        if(result){
            res.json({
                success: true,
                message: "Product fetched successfully",
                data: result,
            });
        }else {
            res.status(404).json({
                success: false,
                message: "Product not founded ",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not found product!",
            error: error
          });
    }
}


// get Product by Id

export const GetSingleProductById= async (req:Request,res:Response)=>{
    try {
        const productId =req.params.productId;
        const result = await singleProductGetById(productId);
        if(result ){
            res.json({
                success:true,
                message:"Product fetched successfully ",
                data:result
            }) 
        }else{
            res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({
            success: false,
            message: 'Could not fetch product!',
           
        });
    }
}

//  update product information

export const updateProductInformation = async (req:Request,res:Response)=>{
  try {
    const productId = req.params.productId;
    const updateData = UpdateProductSchema.parse(req.body);
    const result = updateProductById(productId,updateData);
    if (result) {
        res.json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    } else {
        res.status(404).json({
            success: false,
            message: "Product not found",
        });
    }
  } catch (error) {
    res.status(500).json({
        success: false,
        message: "Could not update product!",
        error: error,
    });
  }
}

// delete product by Id

export const deletedProduct = async (req:Request,res:Response)=>{
    try {
            const productId = req.params.productId;
            const result = await deleteProductById (productId)
            if (result) {
                res.json({
                    success: true,
                    message: "Product deleted successfully!",
                    data: null,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "Product not found",
                });
            }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not delete product!",
            error: error,
        });
    }
}

// create order

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


// get all order
 
export const getAllOrders= async (req:Request,res:Response)=>{
    try {
        const result = await getAllOrder ()
        if (result.length >0) {
            res.json({
                success: true,
                message: "Order  fetched successfully",
                data: result,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Order  not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not found product!",
            error: error
          });
    }
}

// get order by email
export const getOrdersByEmail = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email query parameter is required"
            });
        }

        const orders = await getOrderByEmail(email);

        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: orders,
        });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({
            success: false,
            message: "Could not fetch orders!",
        });
    }
};