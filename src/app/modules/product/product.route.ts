import express from 'express';
import { productControlars } from './product.controlar';
import valideteRequest from '../../middlewars/valideteRequest';
import { productValidationSchema } from './product.validation';
const router = express.Router();

router.get('/', productControlars.getAllProduct);
router.post(
  '/creat-product',
  valideteRequest(productValidationSchema),
  productControlars.creatProduct,
);

router.delete('/:id', productControlars.deleteProduct);
router.patch('/update-product/:id', productControlars.updatedProduct);
export const productRoutes = router;
