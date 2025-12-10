import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// ✅ सुनिश्चित करें कि यह पाथ सही हो और useAuth मौजूद हो
import { useAuth } from './AuthContext'; 

export default function PDFconverter() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // ✅ useAuth से स्थिति प्राप्त करें

  useEffect(() => {
    if (isLoggedIn) {
      // लॉगिन होने पर डैशबोर्ड पर भेजें
      navigate("/dashboard", { replace: true });
    } else {
      // लॉगिन नहीं होने पर लॉगिन पेज पर भेजें
      navigate("/login", { replace: true });
    }
  }, [navigate, isLoggedIn]); // isLoggedIn को dependencies में जोड़ें

  return null;
}
