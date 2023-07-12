import React from "react";

const UserProfile = (props) => {
  return (
    <>
      <div className="w-full border-[2px] border-black px-4 py-6 sticky top-[80px] rounded-md mb-2">
        <div className="text-center">
          <img
            src={props.image}
            alt="person"
            className="mx-auto w-[80px] h-[80px] rounded-full object-cover border-[2px] border-black"
          />
          <h2 className="text-md font-semibold pt-2">{props.name}</h2>
          <p className="text-xs pt-2 mt-[-8px] text-[#7D8186]">{props.bio}</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
