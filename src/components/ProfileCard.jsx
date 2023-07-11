import React from "react";
import Button from "./Button";

const ProfileCard = () => {

  return (
    <>
      <div className="w-full border-[2px] border-black px-4 py-6 sticky top-[80px] rounded-md">
        <div className="text-center">
          <img
            src=""
            alt="person"
            className="mx-auto w-[80px] h-[80px] rounded-full object-cover border-[2px] border-black"
          />
          <h2 className="text-md font-semibold pt-2">{}</h2>
          <p className="text-xs pt-2 mt-[-8px] text-[#7D8186]">{}</p>
        </div>
        <div className="pt-8 space-y-2">
            <Button type="button" variant="secondary" width="full" text="Lihat Profile"/>
            <Button type="button" variant="secondary" width="full" text="Logout"/>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
