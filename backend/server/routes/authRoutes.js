const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateUserProfile,
} = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/profile", verifyToken, updateUserProfile); // 🔐 Protected

module.exports = router;
