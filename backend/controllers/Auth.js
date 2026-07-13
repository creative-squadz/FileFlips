const prisma = require("../shortcut/prisma_initilization");
const encrypt = require("../utils/usefulFunction/encryption");
const sendResetEmail = require("../utils/sendEmail");
const crypto = require("crypto");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(404).json({ message: "Important fields are missing " });
    }
    const validUser = await prisma.users.findUnique({
      where: { email: email },
    });
    if (!validUser) {
      console.log(`Unknown user:${email} trying to access`);
      return res.status(403).json({
        message: `You are not yet member of ${process.env.SITE_NAME}`,
        redirect: "/signup",
      });
    }

    const checkPassword = await bcrypt.compare(password, validUser.password);
    if (!checkPassword) {
      console.log(`${email} Incorrect Password`);
      return res.status(401).json({ message: "Incorrect Password" });
    }

    const accessToken = jwt.sign(
      { email: validUser.email },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: "1d" }
    );
    const referenceToken = jwt.sign(
      { email: validUser.email },
      process.env.REFERENCE_TOKEN_KEY,
      { expiresIn: "1d" }
    );

    const updateReferenceToken = await prisma.users.update({
      where: { id: validUser.id },
      data: { reference_token: referenceToken },
    });
    if (!updateReferenceToken) {
      console.log("Failed to update token for your session");
      return res
        .status(400)
        .json({ message: "Failed to update token for your session" });
    }

    const encryptedEmail = encrypt(email);
    res.cookie("jwt", referenceToken, {
      sameSite: "None",
      httpOnly: true,
      secure: true,
      maxAge: 5 * 60 * 60 * 1000,
    });
    res.cookie("emenc", encryptedEmail, {
      sameSite: "None",
      httpOnly: true,
      secure: true,
      maxAge: 5 * 60 * 60 * 1000,
    });

    const ExistingPlan = await prisma.paidUser.findUnique({
      where: { email: validUser.email },
    });

    console.log("Successfully Updated token for your session");
    console.log("Successfully Logged In");
    return res.status(200).json({
      message: "Successfully Logged In",
      accessToken: accessToken,
      encryptedEmail: encryptedEmail,
      planDetails: ExistingPlan ? ExistingPlan : false,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const signUp = async (req, res) => {
  const {
    first_name,
    middle_name,
    last_name,
    gender,
    mobile_no,
    email,
    password,
  } = req.body;
  try {
    if (
      !first_name ||
      !last_name ||
      !gender ||
      !mobile_no ||
      !email ||
      !password
    ) {
      return res.status(404).json({ message: "Important fields are missing" });
    }
    const userExist = await prisma.users.findUnique({
      where: { email: email },
    });
    if (userExist) {
      console.log(
        `You are already member of ${process.env.SITE_NAME}, redirecting you to the signin page`
      );
      return res.status(409).json({
        message: `You are already member of ${process.env.SITE_NAME}, redirecting you to the signin page`,
      });
    }
    const initialRefToken = `new member : ${email}`;
    const encrypted_password = await bcrypt.hash(password, 5);
    const newMember = {
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      gender: gender,
      mobile_no: mobile_no,
      email: email,
      password: encrypted_password,
      reference_token: initialRefToken,
    };
    try {
      const createUser = await prisma.users.create({
        data: newMember,
      });
      if (!createUser) {
        console.log("Unable to create new User");
        return res.status(400).json({ message: "Unable to create new User" });
      }
      return res.status(200).json({
        message: `You have been successfully added as a member of ${process.env.SITE_NAME} `,
      });
    } catch (error) {
      console.log(error);
      return res.status(502).json({ message: error.message });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getProfile = async (req, res) => {
  const { encryptedEmail } = req.params;
  try {
    const decrypt = require("../utils/usefulFunction/decryption");
    const email = decrypt(encryptedEmail);
    const user = await prisma.users.findUnique({
      where: { email },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        auth_provider: true,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const signOut = async (req, res) => {};

const googleSignIn = async (req, res) => {
  const { credential } = req.body;
  try {
    if (!credential) {
      return res.status(400).json({ message: "Google credential is required" });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub: googleId, email, given_name, family_name, picture } = payload;

    if (!email) {
      return res.status(400).json({ message: "Unable to get email from Google" });
    }

    let user = await prisma.users.findUnique({
      where: { email: email },
    });

    let isNewUser = false;

    if (!user) {
      isNewUser = true;
      const randomPassword = crypto.randomBytes(32).toString("hex");
      const hashedPassword = await bcrypt.hash(randomPassword, 5);
      const initialRefToken = `google-user : ${email}`;

      user = await prisma.users.create({
        data: {
          first_name: given_name || "Google",
          middle_name: null,
          last_name: family_name || "User",
          gender: "other",
          mobile_no: `g${googleId.slice(0, 9)}`,
          email: email,
          password: hashedPassword,
          reference_token: initialRefToken,
          google_id: googleId,
          auth_provider: "google",
        },
      });

      if (!user) {
        return res.status(500).json({ message: "Failed to create account" });
      }
      console.log(`New Google user created: ${email}`);
    } else if (!user.google_id) {
      await prisma.users.update({
        where: { id: user.id },
        data: { google_id: googleId, auth_provider: "google" },
      });
    }

    const accessToken = jwt.sign(
      { email: user.email },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: "1d" }
    );
    const referenceToken = jwt.sign(
      { email: user.email },
      process.env.REFERENCE_TOKEN_KEY,
      { expiresIn: "1d" }
    );

    await prisma.users.update({
      where: { id: user.id },
      data: { reference_token: referenceToken },
    });

    const encryptedEmail = encrypt(email);
    res.cookie("jwt", referenceToken, {
      sameSite: "None",
      httpOnly: true,
      secure: true,
      maxAge: 5 * 60 * 60 * 1000,
    });
    res.cookie("emenc", encryptedEmail, {
      sameSite: "None",
      httpOnly: true,
      secure: true,
      maxAge: 5 * 60 * 60 * 1000,
    });

    const ExistingPlan = await prisma.paidUser.findUnique({
      where: { email: user.email },
    });

    console.log(`Google sign-in successful: ${email}`);
    return res.status(200).json({
      message: isNewUser
        ? "Account created and signed in via Google"
        : "Successfully signed in via Google",
      accessToken: accessToken,
      encryptedEmail: encryptedEmail,
      planDetails: ExistingPlan ? ExistingPlan : false,
    });
  } catch (error) {
    console.log("Google sign-in error:", error.message);
    if (error.code === "P2002") {
      return res.status(409).json({ message: "An account with this email already exists. Please sign in with your password." });
    }
    return res.status(500).json({ message: "Google sign-in failed. Please try again." });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const user = await prisma.users.findUnique({
      where: { email: email },
    });
    if (!user) {
      return res.status(200).json({
        message: "If an account exists with this email, you will receive a password reset link.",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.users.update({
      where: { id: user.id },
      data: {
        reset_token: resetToken,
        reset_token_expiry: resetTokenExpiry,
      },
    });

    await sendResetEmail(user.email, resetToken);

    console.log(`Password reset email sent to ${user.email}`);
    return res.status(200).json({
      message: "If an account exists with this email, you will receive a password reset link.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    if (!token || !password) {
      return res.status(400).json({ message: "Token and password are required" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    const user = await prisma.users.findUnique({
      where: { reset_token: token },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset token" });
    }

    if (!user.reset_token_expiry || new Date() > user.reset_token_expiry) {
      await prisma.users.update({
        where: { id: user.id },
        data: { reset_token: null, reset_token_expiry: null },
      });
      return res.status(400).json({ message: "Reset token has expired. Please request a new one." });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    await prisma.users.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        reset_token: null,
        reset_token_expiry: null,
      },
    });

    console.log(`Password successfully reset for ${user.email}`);
    return res.status(200).json({ message: "Password has been reset successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
};

module.exports = { signIn, signUp, signOut, forgotPassword, resetPassword, googleSignIn, getProfile };
