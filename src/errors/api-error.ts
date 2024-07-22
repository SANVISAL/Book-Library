import { StatusCode } from "../utils/const/status-codes";
import BaseCustomError from "./basecustom-error";

class ApiError extends BaseCustomError {
  public errorCode: string;

  constructor(
    message: string,
    statusCode: number = StatusCode.InternalServerError,
    errorCode: string = "UNKNOWN_ERROR"
  ) {
    super(message, statusCode);
    this.errorCode = errorCode;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
  
  getStatusCode(): number {
    return this.statusCode;
  }
}

export default ApiError;
