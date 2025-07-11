module.exports = {
  PAGINATION: {
    PER_PAGE: 10,
    PAGE: 1,
  },
  BACKEND_API: process.env.REACT_APP_BACKEND_URL,
  SOCKET_URL: process.env.REACT_APP_SOCKET_URL,
  SECRET_KEY_TOKEN: process.env.REACT_APP_SECRET_KEY_TOKEN,
  TOKEN_EXPIRES_IN: process.env.REACT_APP_TOKEN_EXPIRES_IN,
};
