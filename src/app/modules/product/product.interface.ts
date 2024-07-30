export interface IProduct extends Document {
  [x: string]: any;
  id?: string;
  image: string;
  title: string;
  price: string;
  category: string;
  description: string;
  quantity: string;
  rating: string;
  isDeleted: boolean;
}
export interface IUpdateProduct {
  image?: string;
  title?: string;
  price?: string;
  category?: string;
  description?: string;
  quantity?: string;
  rating?: string;
  isDeleted?: boolean;
}
