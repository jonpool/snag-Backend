import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './images';



@Entity('products')
export default class Products{
  @PrimaryGeneratedColumn('increment')
  id:number;
  @Column()
  title: string;
  @Column()
  latitude:number;
  @Column()
  longitude: number
  @Column()
  description: string;
  @Column()
  condition: string;
  @Column()
  available : boolean;
  @Column()
  user:string;

  @OneToMany(()=> Image, image => image.product,{
    cascade:['insert', 'update'] 
  })
  @JoinColumn({ name:'product_id'})
  images: Image[];
}