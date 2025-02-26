import React from "react";

const Button = ({ styles, text = "Get Started" }) => (
  <button
    type="button"
    className={`py-4 px-8 font-poppins font-semibold text-[18px] text-white 
      bg-gradient-to-r from-[#78C1E4] to-[#BEBEBE] 
      rounded-xl transition-all duration-300 ease-in-out 
      transform hover:scale-105 hover:shadow-lg 
      active:scale-95 active:shadow-sm
      ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
