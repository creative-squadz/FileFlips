import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Example: replace this with your actual auth check
const checkAuth = () => {
  // Return true if user is logged in, false otherwise
  // For example, check localStorage, cookie, or auth context
  return !!localStorage.getItem("userToken");
};

export default function DOCXconverter() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = checkAuth();
    setIsAuthenticated(auth);

    if (auth) {
      // Safe client-side redirect
      navigate("/", { replace: true });
    }
    // If not authenticated, do nothing (or show message)
  }, [navigate]);

  return null; // no UI rendered
}
