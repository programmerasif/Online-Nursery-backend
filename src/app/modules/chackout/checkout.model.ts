import { model, Schema } from 'mongoose';
import { IChackout } from './chackout.interface';


const chackoutSchema = new Schema<IChackout>(
  {
    image: {
      type: String,
      required: true
    },
    productID: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    quantity: {
      type: String,
      required: true
    },
    availableQuantity: {
      type: String,
      required: true
    },
    rating: {
      type: String,
      required: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  },
);

export const ChackOut = model<IChackout>('Chackout', chackoutSchema);
