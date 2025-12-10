import React, { useEffect } => "react";
import { useNavigate } from "react-router-dom";

export default function PDFconverter() {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ सही Home/Dashboard पाथ पर भेजें
    // मान लें कि लॉगिन किए हुए उपयोगकर्ता का Home Page '/dashboard' है
    navigate("/dashboard", { replace: true });
  }, [navigate]);

  return null;
}
