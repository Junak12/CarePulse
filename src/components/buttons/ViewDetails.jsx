import React from "react";

const ViewDetails = () => {
  return (
    <button
      className="
          px-4 py-2
          rounded-lg
          bg-[var(--primary)]
          text-white
          font-medium
          shadow-sm
          hover:bg-[var(--primary-hover)]
          hover:shadow-md
          active:scale-95
          transition-all cursor-pointer
          "
    >
      View More
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
};

export default ViewDetails;
