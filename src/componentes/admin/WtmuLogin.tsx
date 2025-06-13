import React, { useState } from "react";
import type { FormEvent } from "react";

const WtmuLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 m-4 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg bg-white">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-green-700">Admin </span>Login
            </h1>
            <p className="font-light text-gray-500">
              Enter your credentials to access the admin panel
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

          <div className="flex flex-col mb-8">
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
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 font-medium bg-green-700 text-yellow-400 rounded cursor-pointer hover:bg-green-600 transition-all ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WtmuLogin;
