import React, { useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings, MdLogout, MdSettings } from "react-icons/md";
import { ImProfile } from "react-icons/im";

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const logout = () => {
    // Add any logout logic here (clear tokens, etc.)
    navigate("/");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none"
        aria-label="User profile"
      >
        <img
          src={assets.facebook_icon}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="hidden sm:inline text-sm font-medium">User Name</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {/* User info section */}
          <div className="px-4 py-2 border-b border-gray-100 text-green-700 hover:bg-yellow-100 hover:text-green-500">
            <div className="flex items-center gap-3">
              <MdAdminPanelSettings className="text-lg" />
              <div>
                <p className="text-sm font-medium">Signed in as Admin</p>
                <p className="text-sm truncate">user@example.com</p>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="px-4 py-2 border-b border-gray-100 hover:bg-yellow-100">
            <a
              href="#"
              className="flex items-center gap-3 text-sm text-green-700 hover:text-green-500"
            >
              <ImProfile className="text-lg" />
              <span>Profile</span>
            </a>
          </div>

          {/* Add more menu items with the same structure */}
          <div className="px-4 py-2 border-b border-gray-100 hover:bg-yellow-100">
            <a
              href="#"
              className="flex items-center gap-3 text-sm text-green-700 hover:text-green-500"
            >
              <MdSettings className="text-lg" />
              <span>Settings</span>
            </a>
          </div>

          <div className="border-t border-gray-100"></div>

          {/* Logout button */}
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-green-700 hover:bg-yellow-100 hover:text-green-500"
            aria-label="Logout"
          >
            <MdLogout className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
