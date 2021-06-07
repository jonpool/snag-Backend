import express, { response } from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';
import errorHandler from './error/handler';


import './database/connection';

import routes from './routes';

const app = express();

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..','uploads')));
app.use(errorHandler);

app.listen(3333);