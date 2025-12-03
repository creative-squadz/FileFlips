import { FiUpload } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Process from "./assets/Site_Details/Secondary/process";
import Nav from "./assets/Site_Details/Primary/nav";
import siteInfo from "./assets/Site_Details/Primary/siteInfo";
import FAQ from "./assets/Site_Details/Secondary/faq";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Home({
  tempUses,
  limitExceeded,
  params,
  tempUser,
  fingerprint,
  setLimitExceeded,
  setTempUser,
}) {
  const category = Nav().filter((item) => item.name === "Converters")[0]
    .submenu;
  const [faq, setFAQ] = useState(FAQ());
  const [file, setFile] = useState([]);
  const [avilableFormat, setAvailableFormats] = useState({ from: [], to: [] });
  const [inputFormat, setInputFormat] = useState("pdf");
  const [outputFormat, setOutputFormat] = useState("docx");
  const [downloadUrl, setDownloadUrl] = useState("");
  const messageRef = useRef(null);
  const navigate = useNavigate();
  const [showDrop, setShowDrop] = useState(false);

   // URL Upload Popup State
 const [showUrlBox, setShowUrlBox] = useState(false);
 const [urlInput, setUrlInput] = useState("");

 const GOOGLE_CLIENT_ID = "782728745677-cg4erqt1clgfkh6676gohnu42jnri7o8.apps.googleusercontent.com";

const GOOGLE_API_KEY = "AQ.Ab8RN6Lkj7ExcMxz3LpWEPP-aNI630OEAw_o1-_3UbhesRlOLQ";
const SCOPE = "https://www.googleapis.com/auth/drive.readonly";
//
const [gapiLoaded, setGapiLoaded] = useState(false);
const [pickerLoaded, setPickerLoaded] = useState(false);

useEffect(() => {
  window.gapi.load("client:auth2", () => {
    window.gapi.client
      .init({
        apiKey: GOOGLE_API_KEY,
        clientId: GOOGLE_CLIENT_ID,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        ],
        scope: SCOPE,
      })
      .then(() => setGapiLoaded(true));
  });

  window.gapi.load("picker", () => {
    setPickerLoaded(true);
  });
}, []);

  

  
  const fromTo = (index) => {
    const temp = new Set(
      JSON.parse(tempUser.formatAllowed)
        .map((item) => item.split("->"))
        .map((inthere) => inthere[index])
    );
    return [...temp];
  };
  useEffect(() => {
    setAvailableFormats({
      from: fromTo(0),
      to: fromTo(1),
    });
  }, []);

  const handleFileChange = (e) => {
    setFile([]);
    setFile((prev) => [...prev, e.target.files[0]]);
    setDownloadUrl("");
  };
  // ✅ FIXED — URL UPLOAD FUNCTION (now outside handleSubmit)
const handleURLUpload = async () => {
  try {
    messageRef.current.style.color = "blue";
    messageRef.current.textContent = "Fetching file from URL...";
    const response = await fetch(urlInput);
    if (!response.ok) throw new Error("Unable to fetch file");
    const blob = await response.blob();
    const fileName = urlInput.split("/").pop() || `download.${inputFormat}`;
    const fileFromUrl = new File([blob], fileName, { type: blob.type });
    setFile([fileFromUrl]);
    setShowUrlBox(false);
    setDownloadUrl("");
    messageRef.current.style.color = "green";
    messageRef.current.textContent = "File fetched successfully!";
  } catch (err) {
    messageRef.current.style.color = "red";
    messageRef.current.textContent = "Failed to fetch file from URL!";
  }
};

  //google drive picker function

  const openGoogleDrivePicker = () => {
  if (!gapiLoaded || !pickerLoaded) {
    alert("Google API loading...");
    return;
  }

  const auth = window.gapi.auth2.getAuthInstance();

  auth.signIn().then(() => {
    const token = auth.currentUser.get().getAuthResponse().access_token;

    const view = new window.google.picker.DocsView()
      .setIncludeFolders(false)
      .setMimeTypes("*/*");

    const picker = new window.google.picker.PickerBuilder()
      .setAppId(GOOGLE_CLIENT_ID)
      .setOAuthToken(token)
      .addView(view)
      .setCallback(pickerCallback)
      .build();

    picker.setVisible(true);
  });
};

const pickerCallback = async (data) => {
  if (data.action === window.google.picker.Action.PICKED) {
    const fileId = data.docs[0].id;

    const response = await window.gapi.client.drive.files.get({
      fileId: fileId,
      alt: "media",
    });

    const fileBlob = new Blob([response.body]);
    const fileName = data.docs[0].name;

    const finalFile = new File([fileBlob], fileName);

    setFile([finalFile]);
    setDownloadUrl("");
    messageRef.current.textContent = "Google Drive file added!";
    messageRef.current.style.color = "green";
  }
};



  
  const handleSubmit = async (e) => {
    if (!file || file.length === 0) {
      e.target.style.boxShadow = "0.1rem 0.1rem 2rem 0.5rem red inset";
      messageRef.current.style.color = "red";
      messageRef.current.textContent = "Please Choose file to move forward !";
      return;
    }
    if ((file[0].size / 1024 / 1024).toFixed(2) > tempUser.maxSize) {
      e.target.style.boxShadow = "0.1rem 0.1rem 2rem 0.5rem red inset";
      messageRef.current.style.color = "red";
      messageRef.current.textContent = `Max File Size : ${tempUser.maxSize}MB`;
      return;
    }

    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("inputFormat", inputFormat);
    formData.append("outputFormat", outputFormat);

    try {
      messageRef.current.style.color = "blue";
      messageRef.current.textContent = "Uploading and converting file...";
      setDownloadUrl("");

      const BACKEND = process.env.REACT_APP_BACKEND_HOST.replace(/\/+$/, ""); 
const url = `${BACKEND}/user_entry`;

const response = await fetch(url, {
  headers: { "content-type": "application/json" },
  method: "POST",
  body: JSON.stringify({ fingerprint, tempUser, params }),
  credentials: "include",
});

      const data = await response.json();
      if (!response.ok) {
        messageRef.current.style.color = "red";
        messageRef.current.textContent = `Upload failed : ${data.message}`;
        if (response.status === 421) {
          setLimitExceeded(true);
          setTempUser({
            used: data.lastDBValue.used,
            max: data.lastDBValue.max,
            maxSize: data.lastDBValue.maxSize,
            formatAllowed: data.lastDBValue.formatAllowed,
          });
        }
        if (response.status === 406) {
          setTempUser({
            used: data.lastDBValue.used,
            max: data.lastDBValue.max,
            maxSize: data.lastDBValue.maxSize,
            formatAllowed: data.lastDBValue.formatAllowed,
          });
        }
        if (response.status === 401) {
          setTimeout(() => {
            navigate("/signin");
          }, 2000);
        }
        return;
      }
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_HOST}/api/convert`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        if (response.ok) {
          tempUses();
          messageRef.current.style.color = "#008000";
          messageRef.current.textContent = data.message;
          setDownloadUrl(data.fileUrl || "");
        } else {
          e.target.style.boxShadow = "0.1rem 0.1rem 2rem 0.5rem red inset";
          messageRef.current.style.color = "red";
          messageRef.current.textContent = `Upload failed : ${data.message}`;
        }
      } catch (error) {
        e.target.style.boxShadow = "0.1rem 0.1rem 2rem 0.5rem red inset";
        messageRef.current.style.color = "red";
        messageRef.current.textContent = `Error : ${error.message}`;
        setDownloadUrl("");
      }
    } catch (error) {
      console.log(error);
      e.target.style.boxShadow = "0.1rem 0.1rem 2rem 0.5rem red inset";
      messageRef.current.style.color = "red";
      messageRef.current.textContent = `Error : ${error.message}`;
    }
  };
  return (
    <section className="flex flex-col items-center gap-4 p-4 text-center py-12">
      <h1 className="text-4xl">Online File Converter</h1>
      <p className="text-gray-600 text-xl">Select File to convert</p>
      {/* upload section */}
      <article className="p-8 w-full md:w-[75%] lg:w-1/2 rounded-md bg-secondary1">
        <article className="p-4 rounded-md flex flex-col items-center gap-4 bg-secondary2">
          {limitExceeded ? (
            <article className="p-4 min-h-[20vh] rounded-md flex flex-col items-center justify-center gap-4 bg-secondary2 grow">
              <strong className="text-red-800 text-2xl animate-pulse font-georgia">
                You have excedded your free trial !
              </strong>
              <Link to={params.email ? "plans" : "/signin"}>
                <button className="border-2 border-secondary1 rounded-md py-2 px-4 font-bold focus:shadow-[0.1rem_0.1rem_2rem_0.5rem_green_inset] bg-primary text-white">
                  Choose Plan
                </button>
              </Link>
            </article>
          ) : (
            <article
              className="flex flex-col items-center gap-4"
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
                e.currentTarget.classList.add(
                  "border-4",
                  "border-dashed",
                  "border-green-500"
                );
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                e.stopPropagation();
                e.currentTarget.classList.remove(
                  "border-4",
                  "border-dashed",
                  "border-green-500"
                );
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                e.currentTarget.classList.remove(
                  "border-4",
                  "border-dashed",
                  "border-green-500"
                );

                if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                  const droppedFile = e.dataTransfer.files[0];
                  setFile([]);
                  setFile((prev) => [...prev, droppedFile]);
                  setDownloadUrl("");
                  e.dataTransfer.clearData();
                }
              }}
            >
              <FiUpload className="text-5xl text-primary" />
              <p className="text-white">Drag your files here or upload</p>
              <div className="flex relative w-full text-secondary1 justify-center items-center">
                <p className="p-2 z-[1] bg-secondary2">OR</p>
                <p className="absolute border-t-2 w-1/2 border-black"></p>
              </div>
              <article className="flex flex-wrap gap-4 justify-center items-center shrink">
                

                
 {/* ---------- ---------- */}
 <div className="relative w-full xsm:w-fit">
   <button
     onClick={() => setShowDrop(!showDrop)}
     className="bg-green-400 px-4 py-2 rounded-md flex items-center gap-2 font-bold"
   >
     Choose Files <IoMdArrowDropdown />
   </button>
   {showDrop && (
     <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md p-2 z-10 text-left">
       <p
         onClick={() => {
           setShowDrop(false);
           document.getElementById("chooseFile").click();
         }}
         className="p-2 hover:bg-gray-100 cursor-pointer flex gap-2"
       >
         📁 From my device
       </p>
        <p
      onClick={() => {
       setShowDrop(false);
       setShowUrlBox(true);
      }}
      className="p-2 hover:bg-gray-100 cursor-pointer"
      >
        🔗 From URL
     </p>
       <p
  onClick={() => gapiLoaded && pickerLoaded && openGoogleDrivePicker()}
  className={`p-2 hover:bg-gray-100 cursor-pointer ${
    !gapiLoaded || !pickerLoaded ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  🔄 From Google Drive
</p>


       <p onClick={() => alert("This feature will be integrated in future")} className="p-2 hover:bg-gray-100 cursor-pointer">
         📦 From Dropbox
       </p>
       <p onClick={() => alert("This feature will be integrated in future")} className="p-2 hover:bg-gray-100 cursor-pointer">
         ☁️ From OneDrive
       </p>
     </div>
   )}
 </div>
 {/* Hidden File Input */}
 <input
   id="chooseFile"
   type="file"
   accept={`.${inputFormat}`}
   onChange={handleFileChange}
   className="hidden"
 />
 {file.length > 0 && (
   <p className="text-white font-bold">{file[0].name}</p>
 )}
                
                
                
                
                
                
                
                
                <button
                  onClick={(e) => handleSubmit(e)}
                  className={`${
                    downloadUrl.length >= 2 ? "hidden" : "inline-block"
                  } border-2 border-secondary1 rounded-md py-2 px-4 font-bold focus:shadow-[0.1rem_0.1rem_2rem_0.5rem_green_inset] bg-primary text-white`}
                >
                  Convert
                </button>
              </article>
              <article className="flex gap-2 flex-wrap w-full justify-center items-center">
                <div className="flex flex-nowrap items-center gap-2">
                  <label
                    htmlFor="from"
                    className="whitespace-nowrap text-white font-bold"
                  >
                    From :{" "}
                  </label>
                  <select
                    id="from"
                    name="from"
                    value={inputFormat}
                    onChange={(e) => setInputFormat(e.target.value)}
                    className="bg-secondary1 p-2 rounded-md"
                  >
                    {avilableFormat.from.map((inthere, index) => (
                      <option
                        key={`from/${index}`}
                        value={inthere.trim().toLowerCase()}
                      >
                        {inthere.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-nowrap items-center gap-2">
                  <label
                    htmlFor="from"
                    className="whitespace-nowrap text-white font-bold"
                  >
                    To :{" "}
                  </label>
                  <select
                    id="to"
                    name="to"
                    value={outputFormat}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="bg-secondary1 p-2 rounded-md"
                  >
                    {JSON.parse(tempUser.formatAllowed)
                      .map((item) => item.split("->"))
                      .map((item, index) => {
                        if (
                          item[0].trim().toLowerCase() ===
                          inputFormat.toLowerCase()
                        ) {
                          return (
                            <option
                              key={`to/${index}`}
                              value={item[1].toLowerCase()}
                            >
                              {item[1].toUpperCase()}
                            </option>
                          );
                        }
                      })}
                  </select>
                </div>
              </article>
            </article>
          )}
          {downloadUrl && (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 p-4 rounded-md border-green-500 shadow-[0.1rem_0.1rem_2rem_0.5rem_green_inset] font-bold focus:shadow-[0.1rem_0.1rem_2rem_0.5rem_blue_inset]"
            >
              Download Converted File
            </a>
          )}
          <p
            ref={messageRef}
            className="text-secondary1 animate-pulse duration-200 font-bold"
          >
            {/* {`Up to ${tempUser.maxSize} MB`} */}
          </p>
        </article>
      </article>
      {/* process section */}
      <article className="p-8 w-full rounded-md flex flex-col md:flex-row md:flex-wrap gap-4">
        {Process().map((item, index) => (
          <article
            key={`process/${index}`}
            className="flex p-2 flex-col items-center gap-2 grow"
          >
            <item.icon
              className={`text-primary text-7xl ${
                item.id === 2 ? "animate-spin" : "animate-pulse"
              } animationDuration`}
            />
            <p>Step {index + 1} :</p>
            <p className="text-gray-600">{item.name}</p>
          </article>
        ))}
      </article>
      {/* categories */}
      {category && (
        <article
          id="converters"
          className="p-8 w-full rounded-md flex flex-col gap-4"
        >
          <h3 className="text-2xl font-semibold">File Converter Categories</h3>
          <article className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 w-full gap-4">
            {category.map((item, index) => (
              <Link
                to={params.email ? item.path : "/signin"}
                key={`category/${index}`}
                className="flex flex-col gap-2 items-center border-2 rounded-md shadow-[0.1rem_0.1rem_0.5rem_0.05rem_gray] p-4 grow"
              >
                <item.icon className="text-6xl text-gray-500" />
                <p className="">{item.name}</p>
              </Link>
            ))}
          </article>
        </article>
      )}
      {/* about */}
      <article className="w-full flex flex-col md:w-[80%] lg:w-[70%] gap-4">
        <h3 className="text-2xl font-semibold text-left">About ConvertFiles</h3>
        {siteInfo().about.map((para, index) => (
          <p
            key={`aboutPara/${index}`}
            className="text-left leading-loose text-gray-600"
          >
            {para}
          </p>
        ))}
      </article>
      {/* FAQ */}
      <article className="w-full flex flex-col md:w-[80%] lg:w-[70%] gap-4">
        <h3 className="text-2xl font-semibold text-left">
          Frequently Asked Questions
        </h3>
        {faq.map((item, index) => (
          <article
            key={`faq/${index}`}
            className="p-4 rounded-md flex flex-col gap-1 border-2 shadow-[0.01rem_0.01rem_0.2rem_0.01rem_black] transition-all"
          >
            <div
              className="flex gap-8 justify-between items-center cursor-pointer"
              onClick={() =>
                setFAQ((prev) =>
                  prev.map((inthere) => {
                    if (inthere.id === item.id) {
                      return { ...inthere, status: !inthere.status };
                    } else {
                      return inthere;
                    }
                  })
                )
              }
            >
              <h3 className="text-left">{item.question}</h3>
              <div>
                <IoMdArrowDropdown
                  className={`cursor-pointer text-3xl text-gray-600 hover:text-gray-800 transition-all ${
                    item.status ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <p
              className={`${
                item.status ? "inline" : "hidden"
              } text-left text-gray-600 w-[90%]`}
            >
              {item.answer}
            </p>
          </article>
        ))}
      </article>

          {/* URL Upload Popup (Correct Position) */}
{showUrlBox && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-md w-80 flex flex-col gap-4">
      <h2 className="text-xl font-bold">Upload from URL</h2>
      <input
        type="text"
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}
        placeholder="Enter file URL"
        className="border p-2 rounded-md"
      />
      <div className="flex gap-2 justify-end">
        <button
          className="px-4 py-2 bg-gray-300 rounded-md"
          onClick={() => setShowUrlBox(false)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md"
          onClick={handleURLUpload}
        >
          Fetch File
        </button>
      </div>
    </div>
  </div>
)}
          
    </section>
  );
}                                     
