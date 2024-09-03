const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({ message: "Энэ үйлдлийг хийхийн тулд нэвтэрнэ үү" });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, "JWT_TOKEN_P@SS");
  req.user = user;
  next();
};

module.exports = { auth };
