import { StatusCode } from "../utils/const/status-codes";
import BaseCustomError from "./basecustom-error";

class DuplicatError extends BaseCustomError {
  constructor(message: string = "Duplicate entry") {
    super(message, StatusCode.Conflict);
    Object.setPrototypeOf(this, DuplicatError.prototype);
  }
}

export default DuplicatError;