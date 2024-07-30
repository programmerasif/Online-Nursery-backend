import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate the request body using the provided schema
      await schema.parseAsync({
        body: req.body,
      });

      // If validation is successful, proceed to the next middleware or route handler
      next();
    } catch (error) {
      // Log the detailed validation error
      console.error('ZOD Validation error:');
      
      // If validation fails, respond with a 400 status and the error message
      res.status(400).json({
        status: 'fail',
        message: 'ZOD Validation error'
      });
    }
  });
};

export default validateRequest;