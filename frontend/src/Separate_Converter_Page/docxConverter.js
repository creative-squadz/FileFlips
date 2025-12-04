import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DOCXconverter() {
  const navigate = useNavigate();

  useEffect(() => {
    // redirect only if NOT already on home 
    if (window.location.pathname !== "/") {
      requestAnimationFrame(() => {
        navigate("/");
      });
    }
  }, [navigate]);

  return null;
}

