import React from "react"

const Button = (props) => {
    const variants = {
        primary: "px-4 py-3 font-semibold text-sm bg-black text-white rounded-md",
        secondary: "px-4 py-3 font-semibold border-[2px] border-black text-sm bg-transparent text-black rounded-md"
    }
  return <button onClick={props.onClick} className={`${variants[props.variant]} ${props.width === "full" && "w-full"}`}>
    {props.text}  
  </button>
}

export default Button