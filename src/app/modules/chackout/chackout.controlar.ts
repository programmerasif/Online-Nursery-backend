import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ChackoutServices } from './chackout.service';

const creatAddToCart = catchAsync(async (req, res) => {
  const result = await ChackoutServices.creatChackoutIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Add to cart successfully',
    data: result,
  });
});
const updateCartQuentity = catchAsync(async (req, res) => {
  const result = await ChackoutServices.quentityUpdateIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart update successfully',
    data: result,
  });
});
const getAllAddToCart = catchAsync(async (req, res) => {
  const result = await ChackoutServices.getAllChackoutIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get All Added cart successfully',
    data: result,
  });
});
const deleteAddToCart = catchAsync(async (req, res) => {
  const {id} = req.params
  const result = await ChackoutServices.deleteChackoutIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete cart successfully',
    data: result,
  });
});

export const chackOutControlars = {
  creatAddToCart,
  getAllAddToCart,
  deleteAddToCart,
  updateCartQuentity,
 
};
