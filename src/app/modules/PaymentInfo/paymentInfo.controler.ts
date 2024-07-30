import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { paymentServices } from "./paymentInfo.service";
import catchAsync from "../../utils/catchAsync";

const savePaymentInfo = catchAsync(async (req, res) => {
    const result = await paymentServices.savePaymentInfoIntoDB(req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Save Payment Info successfully',
      data: result,
    });
  });
 export const paymentControler = {
    savePaymentInfo
  }