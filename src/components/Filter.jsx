import React from "react";

const Filter = () => {
  const category = "found";
  return (
    <>
      <div className="flex space-x-2 items-center text-sm">
        <p
          className={`${
            category !== "lost" ? "text-[#7D8186]" : "text-black font-semibold"
          } cursor-pointer`}
        >
          Dicari
        </p>
        <p>|</p>
        <p
          className={`${
            category !== "found" ? "text-[#7D8186]" : "text-black font-semibold"
          } cursor-pointer`}
        >
          Ditemukan
        </p>
      </div>
    </>
  );
};

export default Filter;
