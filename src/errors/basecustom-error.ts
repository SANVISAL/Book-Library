class BaseCustomError extends Error {
  public statusCode: number;
  public errorCode?: string;

  constructor(message: string, statusCode: number, errorCode?: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;

    // Set the prototype explicitly
    Object.setPrototypeOf(this, BaseCustomError.prototype);
  }
  getErrorInfor() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      errorCode: this.errorCode,
    };
  }
}

export default BaseCustomError;
