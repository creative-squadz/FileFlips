import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DOCXconverter() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Accept only PDF or DOCX
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Please select a PDF or DOCX file");
      return;
    }

    setFile(selectedFile);

    // Optional: redirect to home or another page after selection
    navigate("/", { replace: true }); 
  };

  return (
    <section className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="mb-4">Choose a PDF or DOCX file</h1>
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileChange}
      />
      {file && <p className="mt-2">Selected file: {file.name}</p>}
    </section>
  );
}
