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
exports.getOrdersByEmail = exports.getAllOrders = exports.createOrderHandler = exports.searchProducts = exports.deletedProduct = exports.updateProductInformation = exports.GetSingleProductById = exports.GetAllProducts = exports.createProductHandler = void 0;
const products_service_1 = require("./products.service");
const validateData_1 = require("./validateData");
const products_model_1 = require("./products.model");
// create Product
const createProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = validateData_1.ProductValidationSchema.parse(req.body);
        const result = yield (0, products_service_1.createProduct)(productData);
        res.json(({
            success: true,
            message: "Product  create successfully ",
            data: result,
        }));
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not create product!",
            error: error
        });
    }
});
exports.createProductHandler = createProductHandler;
// get all products
const GetAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, products_service_1.getAllProducts)();
        console.log(result);
        if (result) {
            res.json({
                success: true,
                message: "Product fetched successfully",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not founded ",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not found product!",
            error: error
        });
    }
});
exports.GetAllProducts = GetAllProducts;
// get Product by Id
const GetSingleProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield (0, products_service_1.singleProductGetById)(productId);
        if (result) {
            res.json({
                success: true,
                message: "Product fetched successfully ",
                data: result
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
    }
    catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({
            success: false,
            message: 'Could not fetch product!',
        });
    }
});
exports.GetSingleProductById = GetSingleProductById;
//  update product information
const updateProductInformation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const updateData = validateData_1.UpdateProductSchema.parse(req.body);
        const result = (0, products_service_1.updateProductById)(productId, updateData);
        if (result) {
            res.json({
                success: true,
                message: "Product updated successfully!",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not update product!",
            error: error,
        });
    }
});
exports.updateProductInformation = updateProductInformation;
// delete product by Id
const deletedProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield (0, products_service_1.deleteProductById)(productId);
        if (result) {
            res.json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not delete product!",
            error: error,
        });
    }
});
exports.deletedProduct = deletedProduct;
// search product 
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        if (!searchTerm) {
            return res.status(400).json({
                success: false,
                message: 'Search term is required'
            });
        }
        const regex = new RegExp(searchTerm, 'i'); // 'i' makes it case-insensitive
        const results = yield products_model_1.Product.find({
            $or: [
                { name: regex },
                { description: regex },
                { category: regex },
                { tags: regex }
            ]
        });
        if (results.length === 0) {
            return res.json({
                success: false,
                message: `No products found matching search term '${searchTerm}'`
            });
        }
        res.json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: results
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Could not fetch products!',
        });
    }
});
exports.searchProducts = searchProducts;
// create order
const createOrderHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = validateData_1.orderSchema.parse(req.body);
        const newOrder = yield (0, products_service_1.creteOrder)(orderData);
        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: newOrder
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Order creation failed!',
        });
    }
});
exports.createOrderHandler = createOrderHandler;
// get all order
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, products_service_1.getAllOrder)();
        if (result.length > 0) {
            res.json({
                success: true,
                message: "Order  fetched successfully",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Order  not found",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not found product!",
            error: error
        });
    }
});
exports.getAllOrders = getAllOrders;
// get order by email
const getOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email query parameter is required"
            });
        }
        const orders = yield (0, products_service_1.getOrderByEmail)(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: orders,
        });
    }
    catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({
            success: false,
            message: "Could not fetch orders!",
        });
    }
});
exports.getOrdersByEmail = getOrdersByEmail;
