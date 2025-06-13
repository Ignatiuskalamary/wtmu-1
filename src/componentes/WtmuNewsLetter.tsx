import React from "react";
import type { FormEvent } from "react";
const WtmuNewsLetter: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32 px-4">
      <h1 className="md:text-4xl text-2xl font-semibold text-gray-800">
        Never Miss a Course!
      </h1>
      <p className="md:text-lg text-gray-500/70 pb-8 max-w-lg">
        Join with us to get the latest course, new tech, and exclusive offers.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex border border-yellow-100 bg-yellow-50 text-green-300 items-center justify-center rounded-md max-w-2xl w-full md:h-14 h-12 shadow-md"
      >
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-4 text-gray-700 placeholder-gray-400"
          type="email"
          placeholder="Enter your email"
          required
          aria-label="Email address for newsletter subscription"
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-yellow-400 bg-green-700 hover:bg-green-600 transition-all duration-300 cursor-pointer rounded-md rounded-l-none font-medium"
          aria-label="Subscribe to newsletter"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default WtmuNewsLetter;
