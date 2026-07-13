const express = require("express");
const router = express.Router();
const Auth = require("../controllers/Auth");
router.route("/signin").post(Auth.signIn);
router.route("/signup").post(Auth.signUp);
router.route("/signout").post(Auth.signOut);
router.route("/forgot_password").post(Auth.forgotPassword);
router.route("/reset_password/:token").post(Auth.resetPassword);

module.exports = router;