import React, { useState } from "react";
import type { FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import type { UserType } from "../../assets/assets";
import { userTypes } from "../../assets/assets";
import HeaderBanner from "../HeaderBanner";

const WtmuLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedUserType, setSelectedUserType] = useState<UserType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (userType: UserType) => {
    setSelectedUserType(userType);
    setIsOpen(false);
    // You can also pass the selected value to a parent component here
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Add your login logic here
      // Example: await authService.login(email, password);
      console.log("Login attempt with:", { email, password });

      // Redirect or handle successful login here
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error (show message to user, etc.)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header>
        <HeaderBanner
          backgroundImage="/head.png"
          logoImage="/LogoTitle.png"
          title="World Tamil Music University"
          height="h-48" // Custom height (12rem)
          logoSize="w-32 h-32" // Larger logo
          titleSize="text-4xl" // Larger text
        />
      </header>
      <section>
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="w-full max-w-sm p-6 m-4 border border-green-700 hover:border-yellow-400 shadow-xl shadow-primary/15 rounded-lg bg-white">
            {/* <div className="flex flex-col items-center justify-center">
              <div className="w-full py-4 text-center">
                <img src="/LogoTitle.png" className="w-15 h-15" alt="" />

                <h1 className="text-3xl font-bold">
                  <span className="text-green-700"> </span>Login
                </h1>
                <p className="font-light text-gray-500">
                  Please Enter your credentials to login{" "}
                  <span className="text-green-700">ght</span>
                </p>
              </div>
            </div> */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full py-4 flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <img
                    src="/LogoTitle.png"
                    className="w-15 h-15 mx-auto"
                    alt="Company Logo"
                  />
                </div>
                <h1 className="text-3xl font-bold">
                  <span className="text-green-700"></span>Login
                </h1>
                <p className="font-light text-gray-500">
                  Please Enter your credentials to login{" "}
                  <span className="text-green-700">
                    <b>WTMU</b>
                  </span>
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-6 w-full text-gray-600">
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-1 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  required
                  placeholder="Your Email Id"
                  className="border-b-2 border-yellow-300 p-2 outline-none focus:border-green-600 transition-colors"
                  autoComplete="username"
                />
              </div>
              <div className="relative flex flex-col mb-8">
                <label htmlFor="password" className="mb-1 font-medium">
                  Password
                </label>

                <div className="relative">
                  {/* New wrapper div */}
                  <input
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Your Password"
                    className="border-b-2 border-yellow-300 p-2 pr-10 outline-none focus:border-green-600 transition-colors w-full"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-full flex items-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="relative w-full max-w-xs">
                <label htmlFor="password" className="mb-1 font-medium">
                  User Type
                </label>
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-700"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedUserType?.name || "Select user type"}
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul className="py-1 overflow-auto text-base max-h-96">
                      {userTypes.map((userType) => (
                        <li
                          key={userType.id}
                          className="px-4 py-3 cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSelect(userType)}
                        >
                          <div className="font-medium">{userType.name}</div>
                          {userType.description && (
                            <div className="text-sm text-gray-500 mt-1">
                              {" "}
                              {/* Added mt-1 for spacing */}
                              {userType.description}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* <div className="flex flex-col mb-8">
                <label htmlFor="password" className="mb-1 font-medium">
                  Password
                </label>
                <input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  required
                  placeholder="Your Password"
                  className="border-b-2 border-yellow-300 p-2 outline-none focus:border-green-600 transition-colors"
                  autoComplete="current-password"
                />
              </div> */}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 mt-4 font-medium bg-green-700 text-yellow-400 rounded cursor-pointer hover:bg-green-600 transition-all ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default WtmuLogin;
