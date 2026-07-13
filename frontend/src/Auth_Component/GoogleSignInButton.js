import { useEffect, useRef } from "react";

const GOOGLE_CLIENT_ID = "424951431362-c4nms6l2pas56hkrgf04r9ucii6vvdmo.apps.googleusercontent.com";

export default function GoogleSignInButton({ onSuccess, onError, text = "signin_with" }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const initializeGoogle = () => {
      if (!window.google || !window.google.accounts) {
        setTimeout(initializeGoogle, 100);
        return;
      }

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: (response) => {
          if (response.credential) {
            onSuccess(response);
          } else {
            onError();
          }
        },
        auto_select: false,
        cancel_on_tap_outside: true,
      });

      if (buttonRef.current) {
        window.google.accounts.id.renderButton(buttonRef.current, {
          type: "standard",
          theme: "outline",
          size: "large",
          width: 280,
          text: text,
          shape: "rectangular",
        });
      }
    };

    initializeGoogle();
  }, [onSuccess, onError, text]);

  return <div ref={buttonRef} />;
}
