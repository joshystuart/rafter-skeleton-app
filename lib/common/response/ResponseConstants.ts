/**
 * HTTP STATUS CODES
 */
const STATUS = {
  SUCCESS: {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
  },
  REDIRECTION: {
    MOVED_PERMANENTLY: 301,
    MOVED_TEMPORARILY: 302,
  },
  CLIENT_ERROR: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    PAGE_NOT_FOUND: 404,
    CONFLICT: 409,
  },
  SERVER_ERROR: {
    INTERNAL_SERVER_ERROR: 500,
  },
};

export { STATUS };
