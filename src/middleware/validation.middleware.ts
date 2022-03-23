import ValidationError from '../common/exceptions/validation-error.exception';
import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

export default function validate(validations: any[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    try {
      throw new ValidationError(errors);
    } catch (err) {
      next(err);
    }
  };
}
