import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Plans from "../assets/Site_Details/Secondary/plan";
import { MdDelete } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import siteInfo from "../assets/Site_Details/Primary/siteInfo";

const categories = [
  { key: "trial", label: "Trial", popular: false },
  { key: "monthly", label: "Monthly", popular: true },
  { key: "yearly", label: "Yearly", popular: false },
  { key: "unlimited", label: "Unlimited", popular: false },
];

function PlanCard({ item, choosePlan, setChoosePlan, popular }) {
  const features = [
    item.maxConversions === 0
      ? "Unlimited Conversions"
      : `${item.maxConversions} Conversions`,
    item.maxFileSizeMB === 0
      ? "Unlimited File Size"
      : `Up to ${item.maxFileSizeMB}MB per file`,
    item.batchLimit === 0
      ? "Unlimited Batch"
      : `Batch: ${item.batchLimit}`,
    item.support,
  ];

  let formats = [];
  let advantages = [];
  try { formats = JSON.parse(item.formats || "[]"); } catch (e) { formats = []; }
  try { advantages = JSON.parse(item.advantages || "[]"); } catch (e) { advantages = []; }

  const selected = choosePlan.id === item.id;

  return (
    <article
      className={`relative flex flex-col rounded-2xl border transition-all duration-300 p-6 ${
        selected
          ? "border-blue-500 shadow-[0_0_0_2px_#3b82f6,_0_8px_30px_rgba(59,130,246,0.15)]"
          : popular
          ? "border-blue-200 shadow-[0_4px_20px_rgba(59,130,246,0.08)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]"
          : "border-gray-200 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      } hover:-translate-y-1`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
        </div>
        <div className="text-right shrink-0 ml-4">
          {+item.price > 0 ? (
            <div>
              <span className="text-3xl font-extrabold text-gray-900">₹{item.price}</span>
            </div>
          ) : (
            <span className="text-3xl font-extrabold text-green-600">Free</span>
          )}
        </div>
      </div>

      <div className="flex-1 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">What you get</p>
        <ul className="space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <BsCheckLg className="text-green-500 mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {formats.length > 0 && (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 pt-2">Formats</p>
            <div className="flex flex-wrap gap-1.5">
              {formats.map((f, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{f}</span>
              ))}
            </div>
          </>
        )}

        {advantages.length > 0 && (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 pt-2">Advantages</p>
            <ul className="space-y-1.5">
              {advantages.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-blue-500 mt-0.5 shrink-0">&#9656;</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-100">
        <button
          disabled={choosePlan.id && !selected}
          onClick={() => setChoosePlan(item)}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            selected
              ? "bg-blue-600 text-white shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
              : choosePlan.id
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100"
          }`}
        >
          {selected ? "Selected" : "Select Plan"}
        </button>
        {selected && (
          <button
            onClick={() => setChoosePlan({})}
            className="p-2.5 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
            title="Remove selection"
          >
            <MdDelete className="text-xl" />
          </button>
        )}
      </div>
    </article>
  );
}

export default function Plan() {
  const navigate = useNavigate();
  const plans = Plans();
  const [choosePlan, setChoosePlan] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [Address] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({
    status: false,
    address: null,
  });
  const errorRef = useRef(null);

  const handlePurchase = async (e) => {
    e.currentTarget?.childNodes[1]?.classList.remove("hidden");
    try {
      const getKeyUrl = `${process.env.REACT_APP_BACKEND_HOST}/getKey`;
      const KeyResponse = await fetch(getKeyUrl, {
        method: "GET",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      const KeyData = await KeyResponse.json();
      if (!KeyResponse.ok) {
        e.currentTarget?.childNodes[1]?.classList.add("hidden");
        errorRef.current.style.color = "red";
        errorRef.current.textContent = KeyData.message;
        return;
      }
      errorRef.current.style.color = "green";
      errorRef.current.textContent = KeyData.message;

      const getPlanDetailsUrl = `${process.env.REACT_APP_BACKEND_HOST}/get_unique_plan`;
      const PlanDetailsResponse = await fetch(getPlanDetailsUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: choosePlan.id }),
        credentials: "include",
      });
      const PlanDetailsData = await PlanDetailsResponse.json();
      if (!PlanDetailsResponse.ok) {
        e.currentTarget?.childNodes[1]?.classList.add("hidden");
        errorRef.current.textContent = PlanDetailsData.message;
        return;
      }
      errorRef.current.style.color = "green";
      errorRef.current.textContent = PlanDetailsData.message;

      const createOrderUrl = `${process.env.REACT_APP_BACKEND_HOST}/createOrder`;
      const createOrderResponse = await fetch(createOrderUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ amount: PlanDetailsData.plans.price }),
        credentials: "include",
      });
      const createOrderData = await createOrderResponse.json();
      if (!createOrderResponse.ok) {
        e.currentTarget?.childNodes[1]?.classList.add("hidden");
        errorRef.current.textContent = createOrderData.message;
        return;
      }
      errorRef.current.style.color = "green";
      errorRef.current.textContent = createOrderData.message;

      const options = {
        key: KeyData.key,
        amount: parseInt(PlanDetailsData.plans.price) * 100,
        currency: "INR",
        name: "FileFlip",
        description: "Test Transaction",
        image: siteInfo().logo,
        order_id: createOrderData.order.id,
        handler: async function (response) {
          try {
            const verifyResponse = await fetch(
              `${process.env.REACT_APP_BACKEND_HOST}/verify_payment`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ...response,
                  plan_id: PlanDetailsData.plans.id,
                  amount_in_paise_to_refund:
                    parseInt(PlanDetailsData.plans.price) * 100,
                }),
                credentials: "include",
              }
            );
            const verifyData = await verifyResponse.json();
            if (!verifyResponse.ok) {
              e.currentTarget?.childNodes[1]?.classList.add("hidden");
              errorRef.current.style.color = "red";
              errorRef.current.textContent = verifyData.message;
              setShowCart(false);
              alert(verifyData.message);
              return;
            }
            e.currentTarget?.childNodes[1]?.classList.add("hidden");
            window.localStorage.setItem(
              "tempUser",
              JSON.stringify(verifyData.data)
            );
            errorRef.current.style.color = "green";
            errorRef.current.textContent = verifyData.message;
            setChoosePlan({});
            setTimeout(() => {
              setShowCart(false);
              navigate("templates/template1", {
                state: {
                  user: {
                    name: KeyData.user.name,
                    company_name: "",
                    address: {
                      ...selectedAddress.address,
                      mobile_no: KeyData.user.contact,
                    },
                    item_purchased: [
                      {
                        id: 1,
                        name: PlanDetailsData.plans.name,
                        description: `${PlanDetailsData.plans.name} : ${PlanDetailsData.plans.description}`,
                        quantity: 1,
                        price: PlanDetailsData.plans.price,
                      },
                    ],
                    paid: PlanDetailsData.plans.price,
                    invoice: response.razorpay_payment_id.slice(4),
                    expires: PlanDetailsData.plans.name
                      .toLowerCase().includes("month") ? 30
                      : PlanDetailsData.plans.name.toLowerCase().includes("year") ? 365
                      : PlanDetailsData.plans.name.toLowerCase().includes("unlimited") ? 365 * 10
                      : 0,
                  },
                },
              });
            }, 2000);
          } catch (error) {
            e.currentTarget?.childNodes[1]?.classList.add("hidden");
            errorRef.current.style.color = "red";
            errorRef.current.textContent = error.message;
            setShowCart(false);
            alert(error.message);
          }
        },
        modal: {
          ondismiss: function () {
            errorRef.current.style.color = "red";
            errorRef.current.textContent =
              "recent payment was canceled. Please try again to complete your purchase.";
            setShowCart(false);
          },
        },
        notes: { address: "Razorpay Corporate Office" },
        prefill: {
          name: KeyData.user.name,
          email: KeyData.user.email,
          contact: KeyData.user.contact[0],
        },
        theme: { color: "#3399cc" },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      e.currentTarget?.childNodes[1]?.classList.add("hidden");
      errorRef.current.textContent = error.message;
    }
  };

  if (!plans) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <p className="w-14 h-14 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-8"
        >
          <FaArrowAltCircleLeft className="text-lg" />
          Back
        </button>

        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Choose your <span className="text-blue-600">Plan</span>
          </h1>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            Pick the perfect plan for your file conversion needs
          </p>
        </div>

        {categories.map(({ key, label, popular }) => {
          const items = plans[key];
          if (!items || items.length === 0) return null;
          return (
            <section key={key} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-gray-800">{label}</h2>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <PlanCard
                    key={`${key}/${index}`}
                    item={item}
                    choosePlan={choosePlan}
                    setChoosePlan={(p) => { setChoosePlan(p); setShowCart(false); }}
                    popular={popular && index === 0}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {choosePlan.id && (
          <div className="fixed bottom-6 right-6 z-40 animate-[fromLeft_0.3s_ease]">
            <button
              onClick={() => setShowCart(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200 font-semibold text-sm flex items-center gap-3"
            >
              Proceed to Checkout
              <span className="animate-[fromLeft_1s_infinite_ease]">{">>>"}</span>
            </button>
          </div>
        )}

        {showCart && (
          <article className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <article className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative">
              <button
                onClick={() => setShowCart(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ImCross className="text-lg text-gray-500" />
              </button>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">Checkout</h2>
              <p className="text-sm text-gray-500 mb-6">Complete your purchase</p>

              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Plan Summary</h3>
                <div className="space-y-1.5 text-sm">
                  <p className="flex justify-between"><span className="text-gray-500">Plan</span><span className="font-medium">{choosePlan.name}</span></p>
                  <p className="flex justify-between"><span className="text-gray-500">Price</span><span className="font-medium">₹{choosePlan.price}</span></p>
                  <p className="flex justify-between"><span className="text-gray-500">Conversions</span><span className="font-medium">{choosePlan.maxConversions === 0 ? "Unlimited" : choosePlan.maxConversions}</span></p>
                  <p className="flex justify-between"><span className="text-gray-500">File Size</span><span className="font-medium">{choosePlan.maxFileSizeMB === 0 ? "Unlimited" : `${choosePlan.maxFileSizeMB}MB`}</span></p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Billing Address</h3>
                {Address.length > 0 ? (
                  <div className="space-y-2">
                    {Address.map((item, index) => (
                      <label
                        key={`address/${index}`}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                          selectedAddress.address === item
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="address"
                          checked={selectedAddress.address === item}
                          onChange={() => setSelectedAddress({ status: false, address: item })}
                          className="mt-1"
                        />
                        <span className="text-sm text-gray-700">
                          {item.street}, {item.city}, {item.state} - {item.pin}
                        </span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 text-center py-3">No saved address found</p>
                )}

                <button
                  onClick={() => {
                    if (document.querySelectorAll('input[type="radio"]')[0]) {
                      document.querySelectorAll('input[type="radio"]')[0].checked = false;
                    }
                    setSelectedAddress({ status: true, address: { street: "", city: "", state: "", pin: "" } });
                  }}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mt-3 transition-colors"
                >
                  <IoMdAdd className="text-lg" />
                  Add new address
                </button>

                {selectedAddress.status && (
                  <div className="mt-4 space-y-3">
                    <input
                      placeholder="Street / Building No."
                      value={selectedAddress.address?.street || ""}
                      onChange={(e) => setSelectedAddress(p => ({ ...p, address: { ...p.address, street: e.target.value } }))}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        placeholder="City / District"
                        value={selectedAddress.address?.city || ""}
                        onChange={(e) => setSelectedAddress(p => ({ ...p, address: { ...p.address, city: e.target.value } }))}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        placeholder="State"
                        value={selectedAddress.address?.state || ""}
                        onChange={(e) => setSelectedAddress(p => ({ ...p, address: { ...p.address, state: e.target.value } }))}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <input
                      placeholder="PIN Code"
                      type="number"
                      value={selectedAddress.address?.pin || ""}
                      onChange={(e) => setSelectedAddress(p => ({ ...p, address: { ...p.address, pin: e.target.value } }))}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              <button
                disabled={
                  !(
                    selectedAddress.address?.street &&
                    selectedAddress.address?.city &&
                    selectedAddress.address?.state &&
                    selectedAddress.address?.pin
                  )
                }
                onClick={(e) => handlePurchase(e)}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Pay ₹{choosePlan.price}</span>
                <span className="hidden w-5 h-5 rounded-full border-4 border-l-violet-500 border-r-green-500 border-b-orange-600 border-t-red-500 animate-[spin_0.3s_linear_infinite]"></span>
              </button>
              <p ref={errorRef} className="text-red-500 text-sm text-center mt-3"></p>
            </article>
          </article>
        )}
      </div>
    </section>
  );
}