const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM products WHERE active = true ORDER BY created_at DESC"
    );
    res.json({ success: true, data: rows });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM products WHERE id = $1 AND active = true",
      [req.params.id]
    );
    if (!rows.length) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
