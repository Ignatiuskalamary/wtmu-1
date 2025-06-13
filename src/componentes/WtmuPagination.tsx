// Pagination.tsx
import React from "react";
import { motion } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  if (totalPages <= 1) return null;

  const maxVisiblePages = 5; // Number of page buttons to show
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Adjust if we're at the start or end
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {/* First and Previous buttons */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        aria-label="First page"
      >
        «
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        aria-label="Previous page"
      >
        ‹
      </button>

      {/* Page numbers */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`p-2 px-3 rounded hover:bg-gray-100`}
          >
            1
          </button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pages.map((page) => (
        <motion.button
          key={page}
          onClick={() => onPageChange(page)}
          className={`p-2 px-3 rounded ${
            currentPage === page
              ? "bg-green-700 text-yellow-400"
              : "hover:bg-gray-100"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </motion.button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`p-2 px-3 rounded hover:bg-gray-100`}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next and Last buttons */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        aria-label="Next page"
      >
        ›
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        aria-label="Last page"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
