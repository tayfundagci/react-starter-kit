import React from "react";

function Tailwind() {
  return (
    <div className="bg-red-500">
      <h3 className="text-xl font-semibold text-gray-700 underline">
        Tailwind başlık
      </h3>
      <button className="flex items-center px-4 rounded bg-black text-white/50 hover:!bg-pink-600">
        {" "}
        test
      </button>
    </div>
  );
}

export default Tailwind;
