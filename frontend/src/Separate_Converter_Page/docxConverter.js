import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DOCXconverter() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");   // ← NO replace, NO logout, SAFE redirect
  }, [navigate]);

  return null;
}
