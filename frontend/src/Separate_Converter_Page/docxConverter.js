import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DOCXconverter() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Home with pre-selected formats
    navigate("/home", { state: { input: "pdf", output: "docx" } });
  }, []);

  return null; // No UI needed because it redirects immediately
}
