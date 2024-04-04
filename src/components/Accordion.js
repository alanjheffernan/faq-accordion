import React, { useState } from "react";
import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between gap-6 transition-all duration-300"
      >
        <h1 className="text-dark-purple font-semibold hover:text-purple-600">
          {title}
        </h1>
        <img
          src={isOpen ? iconMinus : iconPlus}
          alt="icon-minus"
          className={`transform transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="text-grayish-purple pt-6 text-sm font-normal">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
