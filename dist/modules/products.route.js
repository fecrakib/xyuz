"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
// product router
const productRouter = express_1.default.Router();
productRouter.post('/', products_controller_1.createProductHandler);
productRouter.get('/:productId', products_controller_1.GetSingleProductById);
// update for route
productRouter.post('/:productId', products_controller_1.updateProductInformation);
// for delete
productRouter.delete('/:productId', products_controller_1.deletedProduct);
productRouter.get('/', products_controller_1.GetAllProducts);
const searchRouter = express_1.default.Router();
searchRouter.get('/', products_controller_1.searchProducts); // Added search route
// order router
const router = express_1.default.Router();
router.post('/', products_controller_1.createOrderHandler);
router.get('/', products_controller_1.getAllOrders);
const OrderGetByEmail = express_1.default.Router();
OrderGetByEmail.get('/', products_controller_1.getOrdersByEmail);
exports.ProductRoutes = {
    router,
    productRouter,
    OrderGetByEmail,
    searchRouter,
};
