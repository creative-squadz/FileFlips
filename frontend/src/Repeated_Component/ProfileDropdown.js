import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function ProfileDropdown({ size }) {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const params = useParams();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_HOST}/auth/profile/${params.email}`
        );
        const data = await res.json();
        if (res.ok) setProfile(data.user);
      } catch (err) {
        console.error("Profile fetch failed", err);
      }
    };
    if (params.email) fetchProfile();
  }, [params.email]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!profile) return null;

  const initials = (
    (profile.first_name?.[0] || "") + (profile.last_name?.[0] || "")
  ).toUpperCase();

  const isGoogleUser = profile.auth_provider === "google";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold uppercase cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all"
        title="Profile"
      >
        {initials}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50 animate-[visibleIn_0.2s_ease] overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 px-5 py-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold uppercase backdrop-blur-sm">
              {initials}
            </div>
            <div className="text-white min-w-0">
              <p className="font-semibold text-sm truncate">
                {profile.first_name} {profile.last_name}
              </p>
              <p className="text-xs text-white/80 truncate">{profile.email}</p>
            </div>
          </div>

          <div className="py-2">
            <Link
              to={`/${params.email}/forgot-password`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <RiLockPasswordLine className="text-lg text-gray-400" />
              Reset Password
            </Link>

            <button
              onClick={() => {
                setOpen(false);
                localStorage.removeItem("accessToken");
                window.location.href = "/signin";
              }}
              className="flex items-center gap-3 px-5 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
            >
              <FiLogOut className="text-lg" />
              Sign Out
            </button>
          </div>

          <div className="border-t border-gray-100 px-5 py-2">
            <p className="text-[10px] text-gray-400 text-center">
              {isGoogleUser ? "Google Account" : "Email Account"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
