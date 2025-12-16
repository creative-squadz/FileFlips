import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Plans from "../assets/Site_Details/Secondary/plan";
import { MdDelete } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";
import siteInfo from "../assets/Site_Details/Primary/siteInfo";

/* ===============================
   Currency Helpers
================================ */
const INR_TO_USD = 83; // change if needed

const convertToUSD = (inr) => {
  return (Number(inr) / INR_TO_USD).toFixed(2);
};

const formatUSD = (inr) => `$${convertToUSD(inr)}`;

export default function Plan() {
  const navigate = useNavigate();
  const plans = Plans();

  const [choosePlan, setChoosePlan] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [Address, setAddress] = useState([]);

  const [selectedAddress, setSelectedAddress] = useState({
    status: false,
    address: null,
  });

  const errorRef = useRef(null);

  /* ===============================
     Purchase Handler
     ⚠️ Razorpay still uses INR
  ================================ */
  const handlePurchase = async (e) => {
    e.currentTarget?.childNodes[1].classList.remove("hidden");

    try {
      const getKeyUrl = `${process.env.REACT_APP_BACKEND_HOST}/getKey`;
      const KeyResponse = await fetch(getKeyUrl, {
        method: "GET",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      const KeyData = await KeyResponse.json();

      if (!KeyResponse.ok) throw new Error(KeyData.message);

      const planDetailsRes = await fetch(
        `${process.env.REACT_APP_BACKEND_HOST}/get_unique_plan`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id: choosePlan.id }),
          credentials: "include",
        }
      );
      const PlanDetailsData = await planDetailsRes.json();
      if (!planDetailsRes.ok) throw new Error(PlanDetailsData.message);

      const createOrderRes = await fetch(
        `${process.env.REACT_APP_BACKEND_HOST}/createOrder`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            amount: PlanDetailsData.plans.price, // INR
          }),
          credentials: "include",
        }
      );
      const createOrderData = await createOrderRes.json();
      if (!createOrderRes.ok) throw new Error(createOrderData.message);

      const options = {
        key: KeyData.key,
        amount: PlanDetailsData.plans.price * 100, // INR → paise
        currency: "INR",
        name: "FileFlip",
        image: siteInfo().logo,
        order_id: createOrderData.order.id,

        handler: async function (response) {
          const verifyResponse = await fetch(
            `${process.env.REACT_APP_BACKEND_HOST}/verify_payment`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                plan_id: PlanDetailsData.plans.id,
                amount_in_paise_to_refund:
                  PlanDetailsData.plans.price * 100,
              }),
              credentials: "include",
            }
          );

          const verifyData = await verifyResponse.json();
          if (!verifyResponse.ok) throw new Error(verifyData.message);

          window.localStorage.setItem(
            "tempUser",
            JSON.stringify(verifyData.data)
          );

          setTimeout(() => {
            setShowCart(false);
            navigate("templates/template1", {
              state: {
                user: {
                  name: KeyData.user.name,
                  address: {
                    ...selectedAddress.address,
                    mobile_no: KeyData.user.contact,
                  },
                  item_purchased: [
                    {
                      name: PlanDetailsData.plans.name,
                      quantity: 1,
                      price: formatUSD(PlanDetailsData.plans.price),
                    },
                  ],
                  paid: formatUSD(PlanDetailsData.plans.price),
                  currency: "USD",
                },
              },
            });
          }, 1500);
        },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      errorRef.current.textContent = err.message;
      errorRef.current.style.color = "red";
    } finally {
      e.currentTarget?.childNodes[1].classList.add("hidden");
    }
  };

  if (!plans) {
    return (
      <section className="w-screen h-screen flex justify-center items-center">
        <p className="w-28 h-28 rounded-full border-8 animate-spin"></p>
      </section>
    );
  }

  /* ===============================
     UI
  ================================ */
  return (
    <section className="w-screen h-screen overflow-scroll p-4 flex flex-col gap-8">
      <p className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
        <FaArrowAltCircleLeft /> Go back
      </p>

      <h1 className="text-center text-4xl">Choose your Plan</h1>

      {/* MONTHLY */}
      <article className="flex flex-wrap gap-4">
        <h2 className="basis-full text-xl">Monthly Plan</h2>
        {plans.monthly.map((item) => (
          <article
            key={item.id}
            className="border p-4 rounded-lg flex flex-col gap-2 md:w-[30%]"
          >
            <div className="flex justify-between text-xl">
              <strong>{item.name}</strong>
              <strong>{formatUSD(item.price)}</strong>
            </div>

            <p>{item.description}</p>

            <button
              disabled={choosePlan.id}
              className="bg-blue-600 text-white py-2 rounded"
              onClick={() => setChoosePlan(item)}
            >
              Select
            </button>
          </article>
        ))}
      </article>

      {/* CART */}
      {choosePlan.id && (
        <div className="fixed bottom-4 right-4">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded"
            onClick={() => setShowCart(true)}
          >
            Proceed →
          </button>
        </div>
      )}

      {showCart && (
        <article className="fixed top-0 right-0 w-[350px] h-screen bg-white p-4 shadow-lg">
          <ImCross
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setShowCart(false)}
          />

          <h2 className="text-lg">Plan Overview</h2>
          <p>Name: {choosePlan.name}</p>
          <p>Price: {formatUSD(choosePlan.price)}</p>

          <button
            className="mt-6 bg-blue-600 text-white w-full py-2 rounded flex justify-center gap-2"
            onClick={handlePurchase}
          >
            Buy Now
            <span className="hidden w-4 h-4 border-2 rounded-full animate-spin"></span>
          </button>

          <p ref={errorRef} className="mt-2 text-sm"></p>
        </article>
      )}
    </section>
  );
}
