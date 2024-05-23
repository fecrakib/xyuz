"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderByEmail = exports.getAllOrder = exports.creteOrder = exports.deleteProductById = exports.updateProductById = exports.singleProductGetById = exports.getAllProducts = exports.createProduct = void 0;
const products_model_1 = require("./products.model");
//  create product 
const createProduct = (playLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = new products_model_1.Product(playLoad);
    return yield productData.save();
});
exports.createProduct = createProduct;
// get all products
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.Product.find();
});
exports.getAllProducts = getAllProducts;
// get single product by Id
const singleProductGetById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.Product.findById(id);
});
exports.singleProductGetById = singleProductGetById;
// for update Product information
const updateProductById = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield products_model_1.Product.findById(id);
    if (!product) {
        return null;
    }
    Object.assign(product, update);
    return yield product.save();
});
exports.updateProductById = updateProductById;
// delete a product by Id
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.Product.findByIdAndDelete((id));
});
exports.deleteProductById = deleteProductById;
// create order
const creteOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const orderProduct = new products_model_1.Order(orderData);
    return yield orderProduct.save();
});
exports.creteOrder = creteOrder;
// get all order 
const getAllOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.Order.find();
});
exports.getAllOrder = getAllOrder;
// get order email
const getOrderByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.Order.find({ email });
});
exports.getOrderByEmail = getOrderByEmail;
