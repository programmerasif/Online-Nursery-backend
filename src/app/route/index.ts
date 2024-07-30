import { Router } from 'express';
import { productRoutes } from '../modules/product/product.route';
import { chackoutRoutes } from '../modules/chackout/chackout.rout';
import { paymentRoutes } from '../modules/PaymentInfo/paymentInfo.routs';

const route = Router();

const moduleRouts = [
  {
    path: '/products',
    route: productRoutes,
  },
  {
    path: '/chack-out',
    route: chackoutRoutes,
  },
  {
    path: '/payment-info',
    route: paymentRoutes,
  },

];
moduleRouts.forEach(routes => route.use(routes.path, routes.route)); //here im using for each to avoid DRY all the route and path will coming ans set here like route.use("/Example",exampleRoutes)

export default route;
