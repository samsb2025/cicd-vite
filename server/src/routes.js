import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from Node.js + MongoDB API!" });
});

export default router;
