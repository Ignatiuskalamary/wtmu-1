import React from "react";

const WtmuLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="animate-spin rounded-full h-16 w-16 border-4 border-t-white border-gray-700"
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default WtmuLoader;
