import { NextPage } from "next/types";
import React from "react";

const inputStyle = {
  position: "relative",
};

const placeholderStyle = {
  position: "absolute",
  top: 10,
  left: 0,
  padding: "10px",
  transform: "translate(10px, -50%)",
  fontSize: "12px",
  color: "gray",
  userSelect: "none",
};

const Input: NextPage<{
  Placeholder?: string;
  Type?: string;
  Id?: string;
  Required?: boolean;
}> = ({ Placeholder = "", Type = "text", Id = "", Required = false }) => {
  return (
    <div>
      <div style={inputStyle}>
        <input
          type={Type}
          id={Id}
          {...(Required && { required: true })}
          className="border-2 border-gray-600 rounded-lg w-517 h-68"
        />
        <span style={placeholderStyle}>{Placeholder}</span>
      </div>
    </div>
  );
};

export default Input;
