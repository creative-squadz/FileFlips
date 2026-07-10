import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DOCXconverter() {
  const navigate = useNavigate();
  const { email } = useParams();

  useEffect(() => {
    navigate(`/${email}/home`, { replace: true, state: { input: "docx", output: "pdf" } });
  }, [navigate, email]);

  return null;
}
