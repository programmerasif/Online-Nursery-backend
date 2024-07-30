
import { IChackout, IIncrementCart } from './chackout.interface';
import { ChackOut } from './checkout.model';

const creatChackoutIntoDB = async (payLoad: IChackout) => {
  // Find the product with the same productID
  const existingProduct = await ChackOut.findOne({
    productID: payLoad.productID,
  });

  if (existingProduct) {
    // If the product exists, update the quantity
    existingProduct.quantity = (
      parseInt(existingProduct.quantity) + parseInt(payLoad.quantity)
    ).toString();
    const result = await existingProduct.save();
    return result;
  } else {
    // If the product doesn't exist, create a new one
    const result = await ChackOut.create(payLoad);
    return result;
  }
};
const quentityUpdateIntoDB = async (payLoad: IIncrementCart) => {
  // Find the product with the same productID
  const cart = await ChackOut.findById(payLoad.id);

  if (cart && payLoad.status == 'increment') {
    // If the product exists, update the quantity
    cart.quantity = (parseInt(cart.quantity) + 1).toString();
    const result = await cart.save();
    return result;
  } else {
    cart!.quantity = (parseInt(cart!.quantity) - 1).toString();
    const result = await cart!.save();
    return result;
  }
};
const getAllChackoutIntoDB = async () => {
  const result = await ChackOut.find();
  return result;
};
const deleteChackoutIntoDB = async (id) => {
  const result = await ChackOut.findOneAndDelete(id);
  return result;
};



export const ChackoutServices = {
  creatChackoutIntoDB,
  getAllChackoutIntoDB,
  deleteChackoutIntoDB,
  quentityUpdateIntoDB,
};
