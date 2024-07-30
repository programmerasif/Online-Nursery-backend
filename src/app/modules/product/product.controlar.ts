import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.services";

const getAllProduct = catchAsync(async (req, res) => {
    const result = await ProductServices.getAllProductFromDB(req.query);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get All product successfully',
      data: result,
    });
  });
const creatProduct = catchAsync(async (req, res) => {
 
    const result = await ProductServices.creatProductIntoDB(req.body);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product Added successfully',
      data: result,
    });
  });
const updatedProduct = catchAsync(async (req, res) => {
    const {id} = req.params
    const result = await ProductServices.updatedProductIntoDB(id,req.body);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product Updated successfully',
      data: result,
    });
  });
const deleteProduct = catchAsync(async (req, res) => {
  const {id} = req.params
  console.log(id);
  
    const result = await ProductServices.deleteProductIntoDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product Delete successfully',
      data: result,
    });
  });

  export const productControlars = {
    getAllProduct,
    creatProduct,
    updatedProduct,
    deleteProduct
  } 