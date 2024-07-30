import express from 'express';
import { paymentControler } from './paymentInfo.controler';


const router = express.Router()


router.post(
  '/payment',
  paymentControler.savePaymentInfo
)

export const paymentRoutes = router;
