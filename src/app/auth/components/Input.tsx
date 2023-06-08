import { NextPage } from "next/types";
import React from "react";

const placeholderStyle = {
  transform: "translate(10px, -50%)",
  color: "gray",
};

const Input: NextPage<{
  Placeholder?: string;
  Type?: string;
  Id?: string;
  Required?: boolean;
}> = ({ Placeholder = "", Type = "text", Id = "", Required = false }) => {
  return (
    <div>
      <div className="md:relative">
        <input
          type={Type}
          id={Id}
          {...(Required && { required: true })}
          className="border-2 border-gray-600 rounded-lg md:w-517 md:h-68"
        />
        <span style={placeholderStyle} className="md:absolute md:top-[10px] md:left-0 md:p-[10px] md:select-none md:text-xs">{Placeholder}</span>
      </div>
    </div>
  );
};

export default Input;
