import QueryBuilder from '../../builder/QueryBuilder';
import { IProduct, IUpdateProduct } from './product.interface';
import { Product } from './product.model';

const creatProductIntoDB = async (payLoad: IProduct) => {
  const result = await Product.create(payLoad);
  return result;
};
const updatedProductIntoDB = async (id: string, payLoad: IUpdateProduct) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payLoad, {
    new: true,
    runValidators: true,
  });
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const productsearchAbleFild = ['title', 'category', 'price', 'rating'];
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(productsearchAbleFild)
    .sort()
    .filter()
    .paginate()
    .fields();

  const product = await productQuery.modelQuery;
  const paginationInfo = await productQuery.countTotal();

  return {
    product,
    hasMore: paginationInfo?.hasMore,
  };
};
const deleteProductIntoDB = async (id: any) => {
  const result = await Product.findOneAndDelete({ _id: id });
  return result;
};

export const ProductServices = {
  getAllProductFromDB,
  creatProductIntoDB,
  updatedProductIntoDB,
  deleteProductIntoDB,
};
