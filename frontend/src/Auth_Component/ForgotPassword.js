import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../firebase";   // <-- Yahin aapka Firebase config import hoga

export default function ForgotPassword() {
  const auth = getAuth(app); // <-- Ye line yahin hogi

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent to your email!");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      <br /><br />

      <button onClick={handleForgotPassword}>
        Send Reset Link
      </button>

      <p>{message}</p>
    </div>
  );
}
