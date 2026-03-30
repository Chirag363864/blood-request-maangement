const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // 🔴 Get token from header
    const token = req.header("Authorization");

    // ❌ If no token → don't crash
    if (!token) {
      req.user = null;   // IMPORTANT
      return next();
    }

    // 🔵 Verify token
    const decoded = jwt.verify(token, "secret123");

    // ✅ Attach user safely
    req.user = decoded;

    next();

  } catch (err) {
    console.error("Auth Error:", err);

    // ❌ If token invalid → don't crash app
    req.user = null;

    next();
  }
};