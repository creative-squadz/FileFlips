import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PDFconverter() {
  const navigate = useNavigate();

  useEffect(() => {
    // बिना किसी शर्त के /dashboard पर नेविगेट करें
    navigate("/dashboard", { replace: true });
  }, [navigate]);

  return null;
}
