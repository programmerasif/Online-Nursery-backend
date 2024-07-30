import { Product } from "../product/product.model";
import { payLoadData, ProductMap } from "./paymentInfo.const";
import { Payment } from "./paymentInfo.model";

const savePaymentInfoIntoDB = async (
    payLoad: payLoadData,
  ) => {
    const buyingData = payLoad.product;
    const userInfo = payLoad.userInfo
    
  console.log(userInfo);
  
    // Extract product IDs from the payload
    const productIds = buyingData.map(item => item.card);
  
    // Find all products with the specified IDs
    const products = await Product.find({ _id: { $in: productIds } }).exec();
  
    // Create a map for quick lookup of products by ID
    const productMap: ProductMap = products.reduce((map, product) => {
      map[product._id.toString()] = product;
      return map;
    }, {} as ProductMap);
  
    // Iterate over the buyingData to update quantities
    for (const item of buyingData) {
      const product = productMap[item.card]; // Get the product from the map
  
      if (product) {
        // Convert the current quantity from string to number
        const currentQuantity = parseInt(product.quantity, 10);
  
        // Convert the quantity to decrement from string to number
        const decrementAmount = parseInt(item.quantity, 10);
  
        // Decrement the quantity
        product.quantity = (currentQuantity - decrementAmount).toString();
  
        // Save the updated product
        await product.save();
      }
    }
    const userPayInfo = {
         buyingData,
        ...userInfo
    }
console.log(userPayInfo, 'line 47');

    const result = await Payment.create(userPayInfo)
    return result
  };
  export const paymentServices ={
    savePaymentInfoIntoDB
  }