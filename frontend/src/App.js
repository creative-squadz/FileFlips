// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Repeated_Component/Header";
import Home from "./Home";
import DOCXconverter from "./DOCXconverter";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Root "/" pe DOCXconverter chalega jo /home redirect karega */}
        <Route path="/" element={<DOCXconverter />} />

        {/* /home URL ke liye Home component render hoga */}
        <Route path="/home" element={<HomeWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper function to pass props to Home
function HomeWrapper() {
  const [resolution, setResolution] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [fingerprint, setFingerprint] = useState(null);

  const [tempUser, setTempUser] = useState(() => {
    const saved = window.localStorage.getItem("tempUser");
    return saved
      ? JSON.parse(saved)
      : {
          used: 0,
          max: 3,
          maxSize: 2,
          formatAllowed:
            '["PDF -> DOCX","DOCX -> PDF","PDF -> XLSX","XLSX -> PDF"]',
        };
  });

  const [limitExceeded, setLimitExceeded] = useState(() => {
    const saved = window.localStorage.getItem("tempUser");
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.used === parsed.max;
    }
    return false;
  });

  const tempUses = () => {
    if (tempUser.used < tempUser.max) {
      setTempUser((props) => ({ ...props, used: props.used + 1 }));
    }
  };

  useEffect(() => {
    if (tempUser.used === tempUser.max) setLimitExceeded(true);
    window.localStorage.setItem("tempUser", JSON.stringify(tempUser));
  }, [tempUser]);

  useEffect(() => {
    FingerprintJS.load().then((fp) => {
      fp.get().then((result) => {
        setFingerprint(result.visitorId);
      });
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header size={resolution} />
      <Home
        tempUses={tempUses}
        limitExceeded={limitExceeded}
        params={{}} // aap apne params yahan pass kar sakte ho
        tempUser={tempUser}
        fingerprint={fingerprint}
        setLimitExceeded={setLimitExceeded}
        setTempUser={setTempUser}
      />
    </>
  );
}

export default App;
