import React from "react";

const Filter = (props) => {
  return (
    <>
      <div className="flex space-x-2 items-center text-sm">
        <p
          onClick={() => props.onChange("lost")}
          className={`${
            props.category !== "lost"
              ? "text-[#7D8186]"
              : "text-black font-semibold"
          } cursor-pointer`}
        >
          Dicari
        </p>
        <p>|</p>
        <p
          onClick={() => props.onChange("found")}
          className={`${
            props.category !== "found"
              ? "text-[#7D8186]"
              : "text-black font-semibold"
          } cursor-pointer`}
        >
          Ditemukan
        </p>
      </div>
    </>
  );
};

export default Filter;
