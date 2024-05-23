import { Order, Product } from './products.model';
import { TProduct, TProductPurchase } from "./products.interface";



//  create product 

export const createProduct=async (playLoad:TProduct)=>{
    const productData= new  Product (playLoad);
    return await productData.save()
}
// get all products

export const getAllProducts = async () =>{
    return await Product.find();
}

// get single product by Id

export const singleProductGetById = async (id:string) =>{
    return await Product.findById(id);
}


// create order

export const creteOrder = async (orderData: TProductPurchase)=>{
    const orderProduct =new Order (orderData);
    return await orderProduct .save()
}

// get all order 
export const getAllOrder = async ()=>{
    return await Order.find();
   
}

// get order email
export const getOrderByEmail = async (email: string) => {
    try {
        return await Order.find({ email });
    } catch (error) {
        throw error;
    }
};