import Product from '../model/Products';
import imagesView from './imagesView';

export default{
  render(product: Product){
    return{

      id: product.id,
      
      name: product.title,
      latitude: product.latitude,
      longitude: product.longitude,
      about: product.description,
      instructions: product.condition,
      available: product.available,
      userId : product.user,
      images: imagesView.renderMany(product.images)

    };
  },

  renderMany(products: Product[]){
    return products.map(product => this.render(product));
  }
};