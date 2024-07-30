import { model, Schema } from "mongoose";
import { UserInfo } from "./PaymentInfo.interface";

const chackoutSchema = new Schema<UserInfo>(
    {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      payType: {
        type: String,
        required: true
      },
      isDeleted: {
        type: Boolean,
        default: false
      },
      buyingData:[{
        card: { type: String, required: true },
        quantity: { type: String, required: true }
      }]
    },
    {
      timestamps: true,
    },
  );
  
  export const Payment = model<UserInfo>('Payment', chackoutSchema);
  