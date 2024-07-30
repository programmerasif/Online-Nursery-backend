import { IProduct } from "../product/product.interface";

export type ProductMap = { [key: string]: IProduct };
export interface BuyingDataItem {
  card: string; 
  quantity: string;
}
export type payLoadData = { 
  product:BuyingDataItem[],
  userInfo:{
    name:string,
    phone:string,
    address:string
    payType:string,
    email:string,
  }
 };