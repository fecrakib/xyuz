import { Order, Product } from './products.model';
import { TProduct, TProductPurchase } from "./products.interface";


export const creteOrder = async (orderData: TProductPurchase)=>{
    const order =new Order (orderData);
    return await order .save()
}


export const createProduct=async (playLoad:TProduct)=>{
    const productData= new  Product (playLoad);
    return await productData.save()
}