import { Request, Response, NextFunction } from "express";
import BaseCustomError from "../errors/basecustom-error";
import { StatusCode } from "../utils/const/status-codes";
const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  console.log(err);
  // logger.error(`Auth Service - errorHandler():  ${err}`);
  if (err instanceof BaseCustomError) {
    const { statusCode, message, errorCode } = err.getErrorInfor();
    return res.status(statusCode).json({ errors: [{ message, errorCode }] });
  }
  return res
    .status(StatusCode.InternalServerError)
    .json({ errors: [{ message: "Anunexpected error occurred" }] });
};

export default errorHandler;
