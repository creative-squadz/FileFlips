import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import siteInfo from "../assets/Site_Details/Primary/siteInfo";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const errorRef = useRef(null);

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required.";
    if (!emailRegex.test(email)) return "Invalid email format.";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.children[1].classList.remove("hidden");

    const sendResetLink = async () => {
      const url = `${process.env.REACT_APP_BACKEND_HOST}/forgot_password`;
      try {
        const response = await fetch(url, {
          headers: { "content-type": "application/json" },
          method: "POST",
          body: JSON.stringify({ email }),
        });
        const data = await response.json();
        if (!response.ok) {
          errorRef.current.textContent = data.message;
          form.children[1].classList.add("hidden");
          return;
        }
        errorRef.current.style.color = "green";
        errorRef.current.textContent = data.message;
        setSuccess(true);
        form.children[1].classList.add("hidden");
      } catch (error) {
        errorRef.current.textContent = error.message;
        form.children[1].classList.add("hidden");
      }
    };

    setTimeout(() => {
      const err = validateEmail(email);
      errorRef.current.textContent = err;
      if (!err) {
        sendResetLink();
      } else {
        form.children[1].classList.add("hidden");
      }
    }, 1000);
  };

  return (
    <section className="w-screen h-screen box-border flex flex-col justify-center items-center p-8">
      <Link to={"/"}>
        <img
          src={siteInfo().logo}
          alt="home"
          title="back to home"
          className="aspect-square w-16 m-4"
        />
      </Link>
      <article className="w-full md:w-[75%] lg:w-[50%] flex flex-col gap-4">
        <h1 className="text-3xl font-times text-center">Reset Password</h1>
        <p className="text-secondary1 tracking-wider text-center">
          Enter your email to receive a password reset link
        </p>

        {success ? (
          <article className="text-center flex flex-col gap-4">
            <p className="text-green-600 font-bold text-lg">
              Check your email!
            </p>
            <p className="text-gray-500 text-sm">
              If an account exists with <strong>{email}</strong>, you will receive a password reset link shortly.
            </p>
            <p className="text-gray-400 text-xs">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setEmail("");
                errorRef.current.textContent = "";
                errorRef.current.style.color = "";
              }}
              className="py-2 px-6 rounded-md bg-primary text-white self-center w-fit"
            >
              Send Again
            </button>
            <Link to={"/signin"} className="text-primary font-semibold self-center">
              Back to Sign In
            </Link>
          </article>
        ) : (
          <form
            action=""
            className="w-full flex flex-col items-center flex-nowrap gap-4"
          >
            <article className="whitespace-nowrap flex flex-col items-center w-full sm:w-3/4">
              <label
                htmlFor="email"
                className="bg-white ml-4 z-[2] w-fit self-start after:content-['*'] after:text-red-600 after:ml-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                className="border-[1px] border-black rounded-md p-2 -mt-3 w-full"
                placeholder="you@example.com"
                aria-required
                onChange={(e) => setEmail(e.target.value)}
              />
            </article>
          </form>
        )}

        <p ref={errorRef} className="text-red-500 font-bold text-center"></p>

        {!success && (
          <button
            className="py-2 px-8 rounded-md bg-primary text-white self-center focus:shadow-[0.1rem_0.1rem_1rem_0.5rem_green_inset] w-fit gap-2 flex justify-center items-center"
            onClick={(e) => handleSubmit(e)}
          >
            <p>Send Reset Link</p>
            <p className="hidden w-5 aspect-square rounded-full border-4 border-l-violet-500 border-r-green-500 border-b-orange-600 border-t-red-500 animate-[spin_0.3s_linear_infinite]"></p>
          </button>
        )}

        <span className="text-center">
          Remember your password?{" "}
          <Link to={"/signin"} className="text-primary font-semibold">
            Sign In
          </Link>
        </span>
      </article>
    </section>
  );
}
