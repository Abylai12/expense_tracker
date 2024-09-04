const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // Check if the Authorization header is present
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Энэ үйлдлийг хийхийн тулд нэвтэрнэ үү" });
  }

  // Extract the token from the Authorization header
  const token = req.headers.authorization.split(" ")[1];

  try {
    // Verify the token using the secret key
    const user = jwt.verify(token, "JWT_TOKEN_PASS1234");

    // Attach the decoded user object to the request object
    req.user = user;

    // Call the next middleware or route handler
    next();
  } catch (err) {
    // Handle errors that occur during token verification
    return res
      .status(401)
      .json({ message: "Token is invalid or expired", error: err.message });
  }
};

module.exports = { auth };
