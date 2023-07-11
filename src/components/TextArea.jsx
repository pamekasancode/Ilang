import React from "react";

const TextArea = (props) => {
  return (
    <>
      <textarea
        onChange={(val) => props.onInput(val)}
        name={props.name}
        placeholder={props.placeholder}
        className="w-full border-[2px] py-2 px-4 text-sm border-black rounded-md resize-none h-[200px]"
      ></textarea>
    </>
  );
};

export default TextArea;
