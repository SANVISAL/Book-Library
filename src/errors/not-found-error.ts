import { StatusCode } from "../utils/const/status-codes";
import BaseCustomError from "./basecustom-error";


class  NotFound extends BaseCustomError {
    constructor(message: string = "Not Found") {
      super(message, StatusCode.NotFound);
      Object.setPrototypeOf(this, NotFound.prototype);
    }
  }

  export default NotFound;