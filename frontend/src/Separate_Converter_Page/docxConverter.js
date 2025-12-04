import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DOCXconverter() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home", { state: { input: "pdf", output: "docx" } });
    }, 0); // Thoda delay ensures router ready

    return () => clearTimeout(timeout);
  }, [navigate]);

  return null;
}
