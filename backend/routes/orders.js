const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { protect } = require("../middleware/auth");

router.get("/", protect, async (req, res, next) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC",
      [req.user.id]
    );
    res.json({ success: true, data: rows });
  } catch (err) {
    next(err);
  }
});

router.post("/", protect, async (req, res, next) => {
  try {
    const { items, total, shipping_address } = req.body;
    const { rows } = await db.query(
      "INSERT INTO orders (user_id, items, total, shipping_address, status) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [req.user.id, JSON.stringify(items), total, shipping_address, "pending"]
    );
    res.status(201).json({ success: true, data: rows[0] });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
