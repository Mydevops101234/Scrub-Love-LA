const jwt = require("jsonwebtoken");
const db = require("../config/db");

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, error: "Not authorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { rows } = await db.query("SELECT id, name, email FROM users WHERE id = $1", [decoded.id]);
    if (!rows.length) {
      return res.status(401).json({ success: false, error: "User not found" });
    }
    req.user = rows[0];
    next();
  } catch (err) {
    res.status(401).json({ success: false, error: "Invalid token" });
  }
};

module.exports = { protect };
