import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Remove token or login email
    localStorage.removeItem("email");
    localStorage.removeItem("token");

    // 2. Redirect to sign in
    navigate("/signin");
  }, [navigate]);

  return <div>Signing out...</div>;
}
