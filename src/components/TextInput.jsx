import React from "react";

const TextInput = (props) => {
  return (
    <>
      <input
        onChange={(val) => props.onInput(val)}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        className="w-full border-[2px] border-black bg-transparent rounded-md text-sm px-4 py-2"
      />
    </>
  );
};

export default TextInput;
