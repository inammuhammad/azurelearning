import {Request, Response, NextFunction} from 'express';
import {AppError, InternalError} from '../utils';

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (error instanceof AppError) {
    AppError.handle(error, res);
    return;
  }
  AppError.handle(new InternalError(error.message), res);
  return;
};
