"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    // Enum values for HTTP status codes
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    HttpStatus[HttpStatus["VALIDATION_ERROR"] = 400] = "VALIDATION_ERROR";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["SERVER_ERROR"] = 500] = "SERVER_ERROR";
    HttpStatus[HttpStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatus[HttpStatus["DUPLICATE_KEY_ERROR"] = 11000] = "DUPLICATE_KEY_ERROR";
})(HttpStatus || (exports.HttpStatus = HttpStatus = {}));
/**
 * Object containing HTTP status codes as constants.
 */
exports.constants = {
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
