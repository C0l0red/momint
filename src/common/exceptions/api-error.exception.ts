export default class APIError extends Error {
  type: string;
  message: string;
  statusCode: number;
  timestamp: number;
  errors?: string[];
  path?: string;

  constructor(message: string, statusCode = 500, err = null) {
    super();
    this.type = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    this.timestamp = Date.now();

    if (err) {
      const { errors } = err;
      this.errors = errors;
    }
  }
}
