import { useState, useRef, useCallback } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { PDFDocument } from "pdf-lib";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { HiOutlineDocumentRemove } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
import { MdOutlineMerge } from "react-icons/md";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const FREE_MERGE_LIMIT = 3;

function FileCard({ file, index, total, onRemove, onMoveUp, onMoveDown }) {
  const sizeMB = (file.size / 1024 / 1024).toFixed(2);
  return (
    <article className="flex items-center gap-3 bg-white border-2 border-gray-100 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all group">
      <article className="w-12 h-14 sm:w-14 sm:h-16 bg-red-50 border-2 border-red-200 rounded-lg flex items-center justify-center shrink-0">
        <span className="text-red-600 font-bold text-[10px] sm:text-xs leading-tight text-center">
          PDF
        </span>
      </article>
      <article className="flex-1 min-w-0">
        <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">
          {file.name}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{sizeMB} MB</p>
      </article>
      <article className="flex items-center gap-1 shrink-0">
        <button
          disabled={index === 0}
          onClick={() => onMoveUp(index)}
          className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          title="Move up"
        >
          <BiSolidUpArrow className="text-sm text-gray-500" />
        </button>
        <button
          disabled={index === total - 1}
          onClick={() => onMoveDown(index)}
          className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          title="Move down"
        >
          <BiSolidDownArrow className="text-sm text-gray-500" />
        </button>
        <button
          onClick={() => onRemove(index)}
          className="p-1.5 rounded-lg hover:bg-red-50 transition-colors ml-1"
          title="Remove"
        >
          <HiOutlineDocumentRemove className="text-lg text-red-400 group-hover:text-red-500" />
        </button>
      </article>
    </article>
  );
}

export default function PDFmerger() {
  const navigate = useNavigate();
  const { email } = useParams();
  const [files, setFiles] = useState([]);
  const [merging, setMerging] = useState(false);
  const [mergedUrl, setMergedUrl] = useState(null);
  const [mergedFileName, setMergedFileName] = useState("");
  const [error, setError] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const tempUser = JSON.parse(localStorage.getItem("tempUser") || "{}");
  const used = tempUser.used || 0;
  const max = tempUser.max || FREE_MERGE_LIMIT;
  const canUse = used < max;
  const remaining = Math.max(0, max - used);

  const addFiles = useCallback(
    (newFiles) => {
      if (!canUse) {
        setError("Free limit reached. Please upgrade your plan to continue.");
        return;
      }
      const pdfFiles = Array.from(newFiles).filter(
        (f) => f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf")
      );
      if (pdfFiles.length === 0) {
        setError("Only PDF files are supported.");
        return;
      }
      const totalAfter = files.length + pdfFiles.length;
      if (totalAfter > remaining) {
        setError(
          `You can only add ${remaining} more PDF file${remaining !== 1 ? "s" : ""} in this merge.`
        );
        return;
      }
      setError("");
      setMergedUrl(null);
      setFiles((prev) => [...prev, ...pdfFiles]);
    },
    [files.length, remaining, canUse]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);
      addFiles(e.dataTransfer.files);
    },
    [addFiles]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setMergedUrl(null);
    setError("");
  };

  const moveUp = (index) => {
    if (index === 0) return;
    setFiles((prev) => {
      const arr = [...prev];
      [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
      return arr;
    });
  };

  const moveDown = (index) => {
    setFiles((prev) => {
      if (index >= prev.length - 1) return prev;
      const arr = [...prev];
      [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
      return arr;
    });
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Please add at least 2 PDF files to merge.");
      return;
    }
    setMerging(true);
    setError("");
    try {
      const mergedPdf = await PDFDocument.create();
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }
      const mergedBytes = await mergedPdf.save();
      const blob = new Blob([mergedBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const baseName = files[0].name.replace(/\.pdf$/i, "");
      const fileName = `${baseName}_merged.pdf`;
      setMergedUrl(url);
      setMergedFileName(fileName);

      const newUsed = used + 1;
      const updatedUser = { ...tempUser, used: newUsed };
      localStorage.setItem("tempUser", JSON.stringify(updatedUser));
    } catch (err) {
      setError("Failed to merge PDFs. Please ensure all files are valid PDFs.");
    } finally {
      setMerging(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <button
          onClick={() => navigate(email ? `/${email}/home` : "/")}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-6"
        >
          <FaArrowAltCircleLeft className="text-lg" />
          Back to Home
        </button>

        <article className="text-center mb-8 sm:mb-10">
          <article className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-2xl mb-4">
            <MdOutlineMerge className="text-4xl sm:text-5xl text-red-500" />
          </article>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Merge PDF Files
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-500 max-w-md mx-auto">
            Combine multiple PDFs into a single document. Fast, free & secure.
          </p>
        </article>

        {!canUse && (
          <article className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-5 sm:p-6 mb-6 text-center">
            <p className="text-red-700 font-bold text-lg mb-1">Free Limit Reached</p>
            <p className="text-red-500 text-sm mb-4">
              You've used all {max} free conversions. Upgrade to continue merging PDFs.
            </p>
            <Link
              to={email ? `/${email}/app/plans` : "/signin"}
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              Upgrade Plan
            </Link>
          </article>
        )}

        {canUse && (
          <article className="bg-white border-2 border-dashed rounded-2xl p-6 sm:p-8 mb-6 text-center transition-all">
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`rounded-xl p-8 sm:p-12 transition-all cursor-pointer ${
                isDragOver
                  ? "border-4 border-red-400 bg-red-50 scale-[1.02]"
                  : "border-2 border-gray-300 hover:border-red-300 hover:bg-red-50/30"
              }`}
              onClick={() => fileInputRef.current?.click()}
            >
              <FiUpload
                className={`text-5xl sm:text-6xl mx-auto mb-4 transition-colors ${
                  isDragOver ? "text-red-500" : "text-red-400"
                }`}
              />
              <p className="text-gray-700 font-semibold text-base sm:text-lg mb-1">
                Drag & drop PDF files here
              </p>
              <p className="text-gray-400 text-sm mb-4">or click to browse</p>
              <p className="text-xs text-gray-400">
                {remaining} of {max} free merges remaining
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,application/pdf"
                multiple
                onChange={(e) => {
                  addFiles(e.target.files);
                  e.target.value = "";
                }}
                className="hidden"
              />
            </div>
          </article>
        )}

        {files.length > 0 && (
          <article className="mb-6">
            <article className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-800 text-sm sm:text-base">
                Files to Merge ({files.length})
              </h3>
              <button
                onClick={() => {
                  fileInputRef.current?.click();
                }}
                className="text-xs sm:text-sm text-red-500 hover:text-red-600 font-semibold transition-colors"
              >
                + Add More
              </button>
            </article>
            <article className="space-y-2">
              {files.map((file, index) => (
                <FileCard
                  key={`${file.name}-${index}`}
                  file={file}
                  index={index}
                  total={files.length}
                  onRemove={removeFile}
                  onMoveUp={moveUp}
                  onMoveDown={moveDown}
                />
              ))}
            </article>
          </article>
        )}

        {error && (
          <article className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm mb-6 text-center font-medium">
            {error}
          </article>
        )}

        {files.length > 0 && !mergedUrl && (
          <button
            onClick={handleMerge}
            disabled={merging || files.length < 2}
            className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
          >
            {merging ? (
              <>
                <span className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                Merging PDFs...
              </>
            ) : (
              <>
                <MdOutlineMerge className="text-xl" />
                Merge {files.length} PDFs
              </>
            )}
          </button>
        )}

        {mergedUrl && (
          <article className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center">
            <article className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-3">
              <BsCheckLg className="text-2xl text-green-600" />
            </article>
            <p className="text-green-700 font-bold text-lg mb-1">Merge Complete!</p>
            <p className="text-green-600 text-sm mb-4">
              {files.length} PDF files merged successfully.
            </p>
            <a
              href={mergedUrl}
              download={mergedFileName}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm shadow-md hover:shadow-lg"
            >
              Download Merged PDF
            </a>
            <button
              onClick={() => {
                setFiles([]);
                setMergedUrl(null);
                setError("");
              }}
              className="block mx-auto mt-3 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
            >
              Start a New Merge
            </button>
          </article>
        )}

        <article className="mt-10 sm:mt-14 grid grid-cols-3 gap-4 text-center">
          {[
            { label: "100% Secure", desc: "Files never leave your browser" },
            { label: "No Limit*", desc: "Free up to 3 merges" },
            { label: "Instant Merge", desc: "Processed in your browser" },
          ].map((item, i) => (
            <article key={i} className="p-3 sm:p-4">
              <p className="font-bold text-gray-800 text-xs sm:text-sm">{item.label}</p>
              <p className="text-gray-400 text-[10px] sm:text-xs mt-1">{item.desc}</p>
            </article>
          ))}
        </article>
      </div>
    </section>
  );
}
