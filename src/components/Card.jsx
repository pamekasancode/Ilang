import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="mb-[30px]">
      <div className="border-[2px] border-black px-[20px] py-[30px] min-h-[200px] rounded-md flex justify-center items-center">
        <p className="text-md font-semibold text-black">{props.announcement}</p>
      </div>
      <div className="pt-2 flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <img
            src={props.image}
            alt="person"
            className="w-[45px] h-[45px] object-cover rounded-full border-[2px] border-black"
          />
          <div>
            <Link to="" className="text-sm font-semibold">{props.name}</Link>
            <p className="text-xs text-[#7D8186]">{props.date}</p>
          </div>
        </div>
        <Button type="button" variant="primary" text="Hubungi"/>
      </div>
    </div>
  );
};

export default Card;
