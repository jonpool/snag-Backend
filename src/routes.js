"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const ProductsController_1 = __importDefault(require("./controllers/ProductsController"));
const upload_1 = __importDefault(require("./config/upload"));
require("./database/connection");
const routes = express_1.Router();
const upload = multer_1.default(upload_1.default);

routes.get('/product', ProductsController_1.default.index);
routes.get('/product/:id', ProductsController_1.default.show);
routes.post('/product', upload.array('images'), ProductsController_1.default.create);
routes.get('/productbyUser/:id',ProductsController_1.default.listProductByUser);
routes.get('/productbyName/:name',ProductsController_1.default.listProductByName);
exports.default = routes;
