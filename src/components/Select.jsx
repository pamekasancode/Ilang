import React from "react";

const Select = (props) => {
  return (
    <>
      <select
        name={props.name}
        onChange={(e) => props.onInput(e)}
        className="w-full border-[2px] border-black px-4 py-2 rounded-md text-sm"
      >
        <option value="1">Dicari</option>
        <option value="2">Ditemukan</option>
      </select>
    </>
  );
};

export default Select;
