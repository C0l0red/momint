import APIError from './api-error.exception';

export default class ValidationError extends APIError {
  constructor(error: any = null) {
    const message = 'Invalid input data';
    super(message, 400, error);
  }
}
