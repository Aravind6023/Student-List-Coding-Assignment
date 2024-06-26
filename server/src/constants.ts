export enum HttpStatus {
  // Enum values for HTTP status codes
  OK = 200,
  CREATED = 201,
  VALIDATION_ERROR = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  DUPLICATE_KEY_ERROR = 11000,
}


/**
 * Object containing HTTP status codes as constants.
 */
export const constants = {
  OK: HttpStatus.OK,
  CREATED: HttpStatus.CREATED,
  VALIDATION_ERROR: HttpStatus.VALIDATION_ERROR,
  UNAUTHORIZED: HttpStatus.UNAUTHORIZED,
  FORBIDDEN: HttpStatus.FORBIDDEN,
  NOT_FOUND: HttpStatus.NOT_FOUND,
  SERVER_ERROR: HttpStatus.SERVER_ERROR,
  BAD_GATEWAY: HttpStatus.BAD_GATEWAY,
  SERVICE_UNAVAILABLE: HttpStatus.SERVICE_UNAVAILABLE,
  DUPLICATE_KEY_ERROR: HttpStatus.DUPLICATE_KEY_ERROR,
};
