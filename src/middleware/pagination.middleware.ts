import { NextFunction, Request, Response } from 'express';

export default function paginationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const pageSize: number = parseInt(req.query['page-size'] as string) || 10;
  const page: number = parseInt(req.query.page as string) || 1;

  const limit = pageSize;
  const skip: number = page > 1 ? (page - 1) * pageSize : 0;

  req.query.limit = limit.toString();
  req.query.skip = skip.toString();

  next();
}
