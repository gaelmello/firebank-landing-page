import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-semibold text-[18px] text-white bg-purple-gradient rounded-[10px] outline-none ${styles} shadow-button animate__animated animate__infinite animate__pulse`}>
    Get Started
  </button>
);

export default Button;