import express from 'express';
import { chackOutControlars } from './chackout.controlar';

const router = express.Router()

router.post(
  '/added-to-cart',
  chackOutControlars.creatAddToCart,
)
router.patch(
  '/update-cart-quentity',
  chackOutControlars.updateCartQuentity,
)
router.delete(
  '/delete-cart/:id',
  chackOutControlars.deleteAddToCart,
)
router.get(
  '/',
  chackOutControlars.getAllAddToCart,
)
export const chackoutRoutes = router;
