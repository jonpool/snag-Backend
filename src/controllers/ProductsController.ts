import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Products from '../model/Products';
import productView from '../views/productView';
import * as Yup from 'yup';


export default{

  async index(request:Request, response:Response)
  {
    const productsRepository = getRepository(Products);
    const product = await productsRepository.find({
      relations : ['images']
    });
    return response.json(productView.renderMany(product));
  },

  async show(request: Request, response: Response){
    
    const {id} = request.params;
    
    const productsRepository = getRepository(Products);
    const product = await productsRepository.findOneOrFail(id, {
      relations : ['images']
    });
    console.log(product);
    return response.json(productView.render(product));
  },
  
  async create(request: Request, response: Response){
    const {
      title,
      latitude,
      longitude,
      description,
      condition,
      available,
      user,
      
  
    } = request.body;
    const productsRepository = getRepository(Products);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image =>{
        return { path: image.filename}
    })

    const data = {
      title,
      latitude,
      longitude,
      description,
      condition,
      available: available === 'true',
      user,
      images

    };

    const schema = Yup.object().shape({
      title:Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      description: Yup.string().required().max(300),
      condition: Yup.string().required().max(300),
      available: Yup.boolean().required(),
      user:Yup.string().required(),
      images: Yup.array(
        Yup.object().shape({
         path: Yup.string().required()
      })
      )
    });
    
    await schema.validate(data,{
      abortEarly: false,
    });

    const product = productsRepository.create(data);
  
    await productsRepository.save(product);
    return response.status(201).json(product);
  },
  async listProductByUser(request: Request, response: Response){
    const {id} = request.params;
    
    const productsRepository = getRepository(Products);
    const product = await productsRepository.find({
                                                    select : ['id','title',],
                                                    relations: ['images'],
                                                    where: {user:id}});
    console.log({product});
    return response.json(productView.renderMany(product));
  },
  async listProductByName(request: Request, response: Response){
    
    const {keyword} = request.params;
    const productsRepository = getRepository(Products);
    const product = await productsRepository.find({
                                                    relations: ['images'],
                                                    where: {title:keyword}});
    console.log({product});
    return response.json(productView.renderMany(product));
  },

}