import { useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import siteInfo from "../assets/Site_Details/Primary/siteInfo";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [success, setSuccess] = useState(false);
  const errorRef = useRef(null);

  const validatePassword = (pwd) => {
    if (!pwd) return "Password is required.";
    if (pwd.length < 8) return "Password must be at least 8 characters long.";
    if (!/[a-z]/.test(pwd)) return "Password must include at least one lowercase letter.";
    if (!/[A-Z]/.test(pwd)) return "Password must include at least one uppercase letter.";
    if (!/\d/.test(pwd)) return "Password must include at least one number.";
    if (!/[@$!%*?&]/.test(pwd)) return "Password must include at least one special character (@$!%*?&).";
    if (/\s/.test(pwd)) return "Password must not contain spaces.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.children[1].classList.remove("hidden");

    const resetPassword = async () => {
      const url = `${process.env.REACT_APP_BACKEND_HOST}/reset_password/${token}`;
      try {
        const response = await fetch(url, {
          headers: { "content-type": "application/json" },
          method: "POST",
          body: JSON.stringify({ password }),
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
        setTimeout(() => {
          navigate("/signin", { replace: true });
        }, 3000);
      } catch (error) {
        errorRef.current.textContent = error.message;
        form.children[1].classList.add("hidden");
      }
    };

    setTimeout(() => {
      const err = validatePassword(password);
      errorRef.current.textContent = err;
      if (!err && password === cnfPassword) {
        resetPassword();
      } else if (password !== cnfPassword) {
        errorRef.current.textContent = "Passwords do not match.";
        form.children[1].classList.add("hidden");
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
        <h1 className="text-3xl font-times text-center">Set New Password</h1>
        <p className="text-secondary1 tracking-wider text-center">
          Enter your new password below
        </p>

        {success ? (
          <article className="text-center flex flex-col gap-4">
            <p className="text-green-600 font-bold text-lg">
              Password Reset Successful!
            </p>
            <p className="text-gray-500 text-sm">
              Redirecting you to Sign In in 3 seconds...
            </p>
            <Link to={"/signin"} className="text-primary font-semibold self-center">
              Sign In Now
            </Link>
          </article>
        ) : (
          <form
            action=""
            className="w-full flex flex-col items-center flex-nowrap gap-4"
          >
            {/* new password */}
            <article className="whitespace-nowrap flex flex-col items-center w-full sm:w-3/4">
              <label
                htmlFor="password"
                className="bg-white ml-4 z-[2] w-fit self-start after:content-['*'] after:text-red-600 after:ml-1"
              >
                New Password
              </label>
              <div className="relative w-full flex items-center -mt-3">
                <input
                  type={passwordStatus ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  className="border-[1px] border-black rounded-md p-2 w-full"
                  placeholder="........"
                  aria-required
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordStatus ? (
                  <IoMdEyeOff
                    className="cursor-pointer text-2xl absolute right-2"
                    onMouseLeave={() => setPasswordStatus(false)}
                  />
                ) : (
                  <IoMdEye
                    className="cursor-pointer text-2xl absolute right-2"
                    onMouseEnter={() => setPasswordStatus(true)}
                  />
                )}
              </div>
            </article>

            {/* confirm password */}
            <article className="whitespace-nowrap flex flex-col items-center w-full sm:w-3/4">
              <label
                htmlFor="cnf_password"
                className="bg-white ml-4 z-[2] w-fit self-start after:content-['*'] after:text-red-600 after:ml-1"
              >
                Confirm Password
              </label>
              <div className="relative flex flex-nowrap -mt-3 w-full items-center">
                <input
                  type="text"
                  name="cnf_password"
                  id="cnf_password"
                  value={cnfPassword}
                  className="border-[1px] border-black rounded-md p-2 w-full"
                  aria-required
                  onChange={(e) => setCnfPassword(e.target.value)}
                />
                {password === cnfPassword && cnfPassword ? (
                  <small className="absolute flex items-center right-2 text-white font-extrabold bg-green-400 p-2 w-6 h-6 rounded-full">
                    ✔
                  </small>
                ) : (
                  <small className="absolute flex items-center justify-center right-2 text-white font-extrabold bg-red-400 p-2 w-6 h-6 rounded-full">
                    ✖
                  </small>
                )}
              </div>
            </article>
          </form>
        )}

        <p ref={errorRef} className="text-red-500 font-bold text-center"></p>

        {!success && (
          <button
            className="py-2 px-8 rounded-md bg-primary text-white self-center focus:shadow-[0.1rem_0.1rem_1rem_0.5rem_green_inset] w-fit gap-2 flex justify-center items-center"
            onClick={(e) => handleSubmit(e)}
          >
            <p>Reset Password</p>
            <p className="hidden w-5 aspect-square rounded-full border-4 border-l-violet-500 border-r-green-500 border-b-orange-600 border-t-red-500 animate-[spin_0.3s_linear_infinite]"></p>
          </button>
        )}

        <span className="text-center">
          <Link to={"/signin"} className="text-primary font-semibold">
            Back to Sign In
          </Link>
        </span>
      </article>
    </section>
  );
}
