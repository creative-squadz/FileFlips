import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DOCXconverter() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page immediately
    navigate("/");
  }, [navigate]);

  return null; // Optional: nothing is rendered since we're redirecting
}
