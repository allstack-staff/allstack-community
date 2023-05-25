import React from "react";

function Eclipse({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="w-full h-full flex items-center justify-center"
      viewBox="0 0 85 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M83.5 39C83.5 59.5919 65.2676 76.5 42.5 76.5C19.7324 76.5 1.5 59.5919 1.5 39C1.5 18.4081 19.7324 1.5 42.5 1.5C65.2676 1.5 83.5 18.4081 83.5 39Z"
        fill="white"
        stroke="#D9D9D9"
        strokeWidth="3"
      />
     
        {children}
     
    </svg>
  );
}

export default Eclipse;
