import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function XLSXconverter() {
  const navigate = useNavigate();
  const { email } = useParams();

  useEffect(() => {
    navigate(`/${email}/home`, { replace: true, state: { input: "xlsx", output: "pdf" } });
  }, [navigate, email]);

  return null;
}
