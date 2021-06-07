import {Router} from 'express';
import multer from 'multer';
import ProductsController from './controllers/ProductsController';

import uploadconfig from './config/upload';
import './database/connection';

const routes = Router();
const upload = multer(uploadconfig);

routes.get('/product',ProductsController.index);
routes.get('/product/:id',ProductsController.show);
routes.post('/product',upload.array('images'), ProductsController.create);
routes.get('/productbyUser/:id',ProductsController.listProductByUser);
routes.get('/productbyName/:name',ProductsController.listProductByName);

export default routes;

