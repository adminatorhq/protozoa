/* eslint-disable max-classes-per-file */
export class NotFoundError extends Error {
  constructor(message = "Resource Not Found") {
    super(message);
    this.name = "NotFoundError";
  }
}

export class ApiRequestError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = "API Request Error";
  }
}
