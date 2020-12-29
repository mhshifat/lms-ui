const API_PATH = process.env.REACT_APP_API_PATH || "http://localhost:5000";

export const END_POINTS = {
  AUTH: {
    LOGIN: API_PATH + "/auth/login",
    REGISTER: API_PATH + "/auth/register",
    TOKEN_LOGIN: API_PATH + "/auth/login/token",
  },
  USER: {
    ALL: API_PATH + "/users",
    CREATE: API_PATH + "/users",
    GET: API_PATH + "/users/",
    UPDATE: API_PATH + "/users/",
    DELETE: API_PATH + "/users/",
  },
  BOOK: {
    ALL: API_PATH + "/books",
    CREATE: API_PATH + "/books",
    GET: API_PATH + "/books/",
    UPDATE: API_PATH + "/books/",
    DELETE: API_PATH + "/books/",
  },
  LOAN: {
    ALL: API_PATH + "/loans",
    CREATE: API_PATH + "/loans",
    GET: API_PATH + "/loans/",
    UPDATE: API_PATH + "/loans/",
    DELETE: API_PATH + "/loans/",
  },
};
