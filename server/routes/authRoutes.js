const { Router } = require("express");
const { loginPost, signupPost } = require("../controllers/authController");
const router = Router();

router.post("/login", loginPost).post("/signup", signupPost);

module.exports = router;
