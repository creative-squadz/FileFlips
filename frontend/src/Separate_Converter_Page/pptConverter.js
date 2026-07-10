import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PPTconverter() {
  const navigate = useNavigate();
  const { email } = useParams();

  useEffect(() => {
    navigate(`/${email}/home`, { replace: true, state: { input: "pdf", output: "docx" } });
  }, [navigate, email]);

  return null;
}
