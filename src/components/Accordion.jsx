"use client";

import { useState } from "react";

const Accordion = ({ ques, ans }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center px-6">
        <div className="w-full max-w-lg border-y">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between py-4 "
        >
          <span className="text-left">{ques}</span>

     
          <span className="relative w-4 h-4 shrink-0">

            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2" />
        
            <span
              className={`absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2 transition-all duration-300 ${
                open ? "rotate-0 opacity-0" : "rotate-90 opacity-100"
              }`}
            />
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-40" : "max-h-0"
          }`}
        >
          <p className="pb-5 px-5">{ans}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
