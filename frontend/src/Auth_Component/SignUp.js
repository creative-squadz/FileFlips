import siteInfo from "../assets/Site_Details/Primary/siteInfo";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [userCredentials, setUserCredentials] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    country_code: "+91",
    mobile_no: "",
    email: "",
    password: "",
  });
  const countryCodes = [
  { country: "Afghanistan", code: "+93" },
  { country: "Albania", code: "+355" },
  { country: "Algeria", code: "+213" },
  { country: "Andorra", code: "+376" },
  { country: "Angola", code: "+244" },
  { country: "Antigua and Barbuda", code: "+1-268" },
  { country: "Argentina", code: "+54" },
  { country: "Armenia", code: "+374" },
  { country: "Australia", code: "+61" },
  { country: "Austria", code: "+43" },
  { country: "Azerbaijan", code: "+994" },

  { country: "Bahamas", code: "+1-242" },
  { country: "Bahrain", code: "+973" },
  { country: "Bangladesh", code: "+880" },
  { country: "Barbados", code: "+1-246" },
  { country: "Belarus", code: "+375" },
  { country: "Belgium", code: "+32" },
  { country: "Belize", code: "+501" },
  { country: "Benin", code: "+229" },
  { country: "Bhutan", code: "+975" },
  { country: "Bolivia", code: "+591" },
  { country: "Bosnia and Herzegovina", code: "+387" },
  { country: "Botswana", code: "+267" },
  { country: "Brazil", code: "+55" },
  { country: "Brunei", code: "+673" },
  { country: "Bulgaria", code: "+359" },
  { country: "Burkina Faso", code: "+226" },
  { country: "Burundi", code: "+257" },

  { country: "Cambodia", code: "+855" },
  { country: "Cameroon", code: "+237" },
  { country: "Canada", code: "+1" },
  { country: "Cape Verde", code: "+238" },
  { country: "Central African Republic", code: "+236" },
  { country: "Chad", code: "+235" },
  { country: "Chile", code: "+56" },
  { country: "China", code: "+86" },
  { country: "Colombia", code: "+57" },
  { country: "Comoros", code: "+269" },
  { country: "Congo", code: "+242" },
  { country: "Costa Rica", code: "+506" },
  { country: "Croatia", code: "+385" },
  { country: "Cuba", code: "+53" },
  { country: "Cyprus", code: "+357" },
  { country: "Czech Republic", code: "+420" },

  { country: "Denmark", code: "+45" },
  { country: "Djibouti", code: "+253" },
  { country: "Dominica", code: "+1-767" },
  { country: "Dominican Republic", code: "+1-809" },

  { country: "Ecuador", code: "+593" },
  { country: "Egypt", code: "+20" },
  { country: "El Salvador", code: "+503" },
  { country: "Equatorial Guinea", code: "+240" },
  { country: "Eritrea", code: "+291" },
  { country: "Estonia", code: "+372" },
  { country: "Eswatini", code: "+268" },
  { country: "Ethiopia", code: "+251" },

  { country: "Fiji", code: "+679" },
  { country: "Finland", code: "+358" },
  { country: "France", code: "+33" },

  { country: "Gabon", code: "+241" },
  { country: "Gambia", code: "+220" },
  { country: "Georgia", code: "+995" },
  { country: "Germany", code: "+49" },
  { country: "Ghana", code: "+233" },
  { country: "Greece", code: "+30" },
  { country: "Grenada", code: "+1-473" },
  { country: "Guatemala", code: "+502" },
  { country: "Guinea", code: "+224" },
  { country: "Guyana", code: "+592" },

  { country: "Haiti", code: "+509" },
  { country: "Honduras", code: "+504" },
  { country: "Hong Kong", code: "+852" },
  { country: "Hungary", code: "+36" },

  { country: "Iceland", code: "+354" },
  { country: "India", code: "+91" },
  { country: "Indonesia", code: "+62" },
  { country: "Iran", code: "+98" },
  { country: "Iraq", code: "+964" },
  { country: "Ireland", code: "+353" },
  { country: "Israel", code: "+972" },
  { country: "Italy", code: "+39" },

  { country: "Jamaica", code: "+1-876" },
  { country: "Japan", code: "+81" },
  { country: "Jordan", code: "+962" },

  { country: "Kazakhstan", code: "+7" },
  { country: "Kenya", code: "+254" },
  { country: "Kuwait", code: "+965" },

  { country: "Laos", code: "+856" },
  { country: "Latvia", code: "+371" },
  { country: "Lebanon", code: "+961" },
  { country: "Lesotho", code: "+266" },
  { country: "Liberia", code: "+231" },
  { country: "Libya", code: "+218" },
  { country: "Lithuania", code: "+370" },
  { country: "Luxembourg", code: "+352" },

  { country: "Malaysia", code: "+60" },
  { country: "Maldives", code: "+960" },
  { country: "Mali", code: "+223" },
  { country: "Malta", code: "+356" },
  { country: "Mexico", code: "+52" },
  { country: "Moldova", code: "+373" },
  { country: "Monaco", code: "+377" },
  { country: "Mongolia", code: "+976" },
  { country: "Morocco", code: "+212" },
  { country: "Myanmar", code: "+95" },

  { country: "Nepal", code: "+977" },
  { country: "Netherlands", code: "+31" },
  { country: "New Zealand", code: "+64" },
  { country: "Nigeria", code: "+234" },
  { country: "North Korea", code: "+850" },
  { country: "Norway", code: "+47" },

  { country: "Oman", code: "+968" },

  { country: "Pakistan", code: "+92" },
  { country: "Philippines", code: "+63" },
  { country: "Poland", code: "+48" },
  { country: "Portugal", code: "+351" },

  { country: "Qatar", code: "+974" },

  { country: "Romania", code: "+40" },
  { country: "Russia", code: "+7" },
  { country: "Rwanda", code: "+250" },

  { country: "Saudi Arabia", code: "+966" },
  { country: "Singapore", code: "+65" },
  { country: "South Africa", code: "+27" },
  { country: "South Korea", code: "+82" },
  { country: "Spain", code: "+34" },
  { country: "Sri Lanka", code: "+94" },
  { country: "Sweden", code: "+46" },
  { country: "Switzerland", code: "+41" },

  { country: "Thailand", code: "+66" },
  { country: "Turkey", code: "+90" },

  { country: "UAE", code: "+971" },
  { country: "UK", code: "+44" },
  { country: "USA", code: "+1" },
  { country: "Ukraine", code: "+380" },
  { country: "Uruguay", code: "+598" },

  { country: "Vietnam", code: "+84" },

  { country: "Yemen", code: "+967" },
  { country: "Zambia", code: "+260" },
  { country: "Zimbabwe", code: "+263" },
];


  const [cnfPassword, setCNFPassword] = useState("");
  const errorRef = useRef(null);
  const navigate = useNavigate();

  const checkNames = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;
    if (!name) {
      return "Required Name.";
    }
    if (!nameRegex.test(name)) {
      return "Invalid Name Format (hint:remove space if there any)";
    }
  };
  const checkMobNo = (number) => {
    const mobRegex = /^\d{10}$/;
    if (!number) {
      return "Mobile Number is required.";
    }
    if (!mobRegex.test(number)) {
      return "Invalid Mobile Number.";
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required.";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
  };

  const validatePassword = (password) => {
    const lowercase = /[a-z]/;
    const uppercase = /[A-Z]/;
    const digit = /\d/;
    const specialChar = /[@$!%*?&]/;
    const noSpace = /^\S+$/;
    if (!password) {
      return "Password is required.";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!lowercase.test(password)) {
      return "Password must include at least one lowercase letter.";
    }
    if (!uppercase.test(password)) {
      return "Password must include at least one uppercase letter.";
    }
    if (!digit.test(password)) {
      return "Password must include at least one number.";
    }
    if (!specialChar.test(password)) {
      return "Password must include at least one special character (@$!%*?&).";
    }
    if (!noSpace.test(password)) {
      return "Password must not contain spaces.";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.children[1].classList.remove("hidden");

    const verifyUser = async () => {
      form.children[1].classList.remove("hidden");
      try {
        const url = `${process.env.REACT_APP_BACKEND_HOST}/signup`;
        const response = await fetch(url, {
          headers: { "content-type": "application/json" },
          method: "POST",
          body: JSON.stringify(userCredentials),
        });
        const data = await response.json();
        if (!response.ok) {
          if (response.status === 409) {
            setTimeout(() => {
              navigate("/signin", { replace: true });
            }, 2000);
          }
          errorRef.current.textContent = data.message;
          form.children[1].classList.add("hidden");
          return;
        }
        errorRef.current.style.color = "green";
        errorRef.current.textContent = data.message;
        setTimeout(() => {
          navigate("/signin", { replace: true });
        }, 2000);
      } catch (error) {
        console.log(error.message);
        errorRef.current.textContent = error.message;
        form.children[1].classList.add("hidden");
      }
    };

    setTimeout(() => {
      errorRef.current.textContent = checkNames(userCredentials.first_name)
        ? checkNames(userCredentials.first_name)
        : checkNames(userCredentials.last_name)
        ? checkNames(userCredentials.last_name)
        : checkMobNo(userCredentials.mobile_no)
        ? checkMobNo(userCredentials.mobile_no)
        : validateEmail(userCredentials.email)
        ? validateEmail(userCredentials.email)
        : validatePassword(userCredentials.password)
        ? validatePassword(userCredentials.password)
        : !userCredentials.gender
        ? "Please select your gender"
        : userCredentials.password === cnfPassword
        ? null
        : "Your confirm password doesn't match with original one";
      !checkNames(userCredentials.first_name) &&
        !checkNames(userCredentials.last_name) &&
        !checkMobNo(userCredentials.mobile_no) &&
        !validateEmail(userCredentials.email) &&
        !validatePassword(userCredentials.password) &&
        userCredentials.gender &&
        userCredentials.password === cnfPassword &&
        verifyUser();
      form.children[1].classList.add("hidden");
    }, 1000);
  };
  return (
    <section className="w-screen h-screen box-border flex flex-col xsm:justify-center items-center p-8 overflow-y-scroll">
      <Link to={"/"}>
        <img
          src={siteInfo().logo}
          alt="home"
          title="back to home"
          className="aspect-square w-16 m-4"
        />
      </Link>
      <article className="w-full md:w-[75%] lg:w-[50%] flex flex-col gap-4">
        <h1 className="text-3xl font-times text-center">
          Welcome to {siteInfo().site_name}
        </h1>
        <p className="text-secondary1 tracking-wider text-center">
          Sign Up to your {siteInfo().site_name} account
        </p>
        <form
          action=""
          className="w-full flex flex-col items-center flex-nowrap gap-4"
        >
          {/* name section */}
          <article className="whitespace-nowrap w-full flex flex-col items-center xsm:flex-row xsm:flex-nowrap xsm:justify-between xsm:items-center gap-4">
            <article className="whitespace-nowrap w-full flex flex-col items-center grow">
              <label
                htmlFor="first_name"
                id="first_name_Label"
                className="bg-white ml-4 z-[2] w-fit self-start after:content-['*'] after:text-red-600 after:ml-1"
              >
                First Name
              </label>
              <input
                type="first_name"
                name="first_name"
                id="first_name"
                value={userCredentials.first_name}
                className="border-[1px] border-black rounded-md p-2 -mt-3 w-full"
                placeholder="FristName"
                aria-required
                onChange={(e) =>
                  setUserCredentials((props) => ({
                    ...props,
                    first_name: e.target.value,
                  }))
                }
              />
            </article>
            <article className="whitespace-nowrap w-full flex flex-col items-center grow">
              <label
                htmlFor="middle_name"
                id="middle_name_Label"
                className="bg-white ml-4 z-[2] w-fit self-start"
              >
                Middle Name
              </label>
              <input
                type="middle_name"
                name="middle_name"
                id="middle_name"
                value={userCredentials.middle_name}
                className="border-[1px] border-black rounded-md p-2 -mt-3 w-full"
                aria-required
                onChange={(e) =>
                  setUserCredentials((props) => ({
                    ...props,
                    middle_name: e.target.value,
                  }))
                }
              />
            </article>
            <article className="whitespace-nowrap w-full flex flex-col items-center grow">
              <label
                htmlFor="last_name"
                id="last_name_Label"
                className="bg-white ml-4 z-[2] w-fit self-start after:content-['*'] after:text-red-600 after:ml-1"
              >
                Last Name
              </label>
              <input
                type="last_name"
                name="last_name"
                id="last_name"
                value={userCredentials.last_name}
                className="border-[1px] border-black rounded-md p-2 -mt-3 w-full"
                placeholder="Lastname"
                aria-required
                onChange={(e) =>
                  setUserCredentials((props) => ({
                    ...props,
                    last_name: e.target.value,
                  }))
                }
              />
            </article>
          </article>
          {/* gender & mobile number */}
          <article className="whitespace-nowrap w-full flex flex-col items-center xsm:flex-row xsm:flex-nowrap xsm:justify-between xsm:items-center gap-4">
            <article className="whitespace-nowrap w-full flex flex-col items-center grow">
              <label
                htmlFor="gender"
                id="gender_Label"
                className="bg-white ml-4 z-[2] w-fit self-start after:content-['*'] after:text-red-600 after:ml-1"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                value={userCredentials.gender}
                className="border-[1px] border-black rounded-md p-2 -mt-3 w-full"
                onChange={(e) =>
                  setUserCredentials((props) => ({
                    ...props,
                    gender: e.target.value,
                  }))
                }
                aria-required
              >
                <option value="other">Other</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </article>
            <article className="whitespace-nowrap w-full flex flex-col grow">
  <label
    htmlFor="mobile_no"
    className="bg-white ml-4 z-[2] w-fit after:content-['*'] after:text-red-600"
  >
    Mobile No.
  </label>

  <div className="flex -mt-3 w-full gap-2">
    {/* Country Code Dropdown */}
    <select
      value={userCredentials.country_code}
      className="border border-black rounded-md p-2 bg-white w-[90px]"
      onChange={(e) =>
        setUserCredentials((prev) => ({
          ...prev,
          country_code: e.target.value,
        }))
      }
    >
      {countryCodes.map((item) => (
        <option key={item.code} value={item.code}>
           ({item.code})
        </option>
      ))}
    </select>

    {/* Mobile Number Input */}
    <input
      type="tel"
      name="mobile_no"
      id="mobile_no"
      value={userCredentials.mobile_no}
      className="border border-black rounded-md p-2 w-full"
      placeholder="7564044692"
      onChange={(e) =>
        setUserCredentials((prev) => ({
          ...prev,
          mobile_no: e.target.value,
        }))
      }
    />
  </div>
</article>

          </article>
          {/* email & password section */}
          <article className="whitespace-nowrap w-full flex flex-col items-center xsm:flex-row xsm:flex-nowrap xsm:justify-between xsm:items-center gap-4">
            {/* email */}
            <article className="whitespace-nowrap w-full flex flex-col items-center grow">
              <label
                htmlFor="email"
                id="email_Label"
                className="bg-white ml-4 z-[2] w-fit self-start after:content-['*'] after:text-red-600 after:ml-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={userCredentials.email}
                className="border-[1px] border-black rounded-md p-2 -mt-3 w-full"
                placeholder="abc@gmail.com"
                aria-required
                onChange={(e) =>
                  setUserCredentials((props) => ({
                    ...props,
                    email: e.target.value,
                  }))
                }
              />
            </article>
            {/* password */}
            <article className="whitespace-nowrap w-full flex flex-col items-center grow">
              <label
                htmlFor="password"
                id="password_Label"
                className="bg-white ml-4 z-[2] w-fit self-start after:content-['*'] after:text-red-600 after:ml-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={userCredentials.password}
                className="border-[1px] border-black rounded-md p-2 -mt-3 w-full"
                aria-required
                onChange={(e) =>
                  setUserCredentials((props) => ({
                    ...props,
                    password: e.target.value,
                  }))
                }
              />
            </article>
            {/* cnf password */}
            <article className="whitespace-nowrap w-full flex flex-col items-center grow">
              <label
                htmlFor="cnf_password"
                id="cnf_password_Label"
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
                  onChange={(e) => setCNFPassword(e.target.value)}
                />
                {userCredentials.password === cnfPassword ? (
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
          </article>
        </form>
        <p ref={errorRef} className="text-red-500 font-bold text-center"></p>
        <button
          className="py-2 px-8 rounded-md bg-primary text-white self-center focus:shadow-[0.1rem_0.1rem_1rem_0.5rem_green_inset] w-fit gap-2 flex justify-center items-center"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          <p>Sign Up</p>
          <p className="hidden w-5 aspect-square rounded-full border-4 border-l-violet-500 border-r-green-500 border-b-orange-600 border-t-red-500 animate-[spin_0.3s_linear_infinite]"></p>
        </button>
        <span className="text-center">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-primary font-semibold">
            Sign In
          </Link>
        </span>
      </article>
    </section>
  );
}
