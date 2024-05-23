"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_route_1 = require("./modules/products.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Mount product routes
app.use('/api/products', products_route_1.ProductRoutes.productRouter);
// Mount search route
app.use('/api/search', products_route_1.ProductRoutes.searchRouter);
// Mount order routes
app.use('/api/orders', products_route_1.ProductRoutes.router);
app.use('/api/orders', products_route_1.ProductRoutes.OrderGetByEmail);
exports.default = app;
