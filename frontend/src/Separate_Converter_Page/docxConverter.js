import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";



export default function PDFconverter() {

  const navigate = useNavigate();



  useEffect(() => {

    // Client-side navigation to home page

    navigate("/", { replace: true });

  }, [navigate]);



  return null; // nothing rendered

}
