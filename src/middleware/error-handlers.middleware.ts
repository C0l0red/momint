import { NextFunction, Request, Response } from 'express';
import APIError from '../common/exceptions/api-error.exception';



export const errorLogger = (
  err: APIError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error('\x1b[31m', err); // adding some color to our logs
  next(err); // calling next middleware
};

export const errorResponder = async (
  err: APIError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.header('Content-Type', 'application/json');

  err.path = req.url;
  res.status(err.statusCode || 500).send(JSON.stringify(err, null, 4)); // pretty print
};

export const invalidPathHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const notFoundError = {
    error: 'Not Found',
    message: 'Path not found',
  };
  res.status(404).json(notFoundError);
};
