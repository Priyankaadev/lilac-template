"use client";

const Accordion2 = ({ ques, ans, index, isOpen, onToggle }) => {
  return (
    <div className="flex justify-center px-6 font-semibold xl:items-start xl:flex xl:justify-start">
      <div className="w-full max-w-lg border-y">

        <button
          onClick={() => onToggle(index)}
          className="flex w-full items-center gap-3 py-2"
        >
          <span className="relative w-4 h-4 shrink-0">
         
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2" />

           
            <span
              className={`absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2 transition-all duration-300 ${
                isOpen ? "rotate-0 opacity-0" : "rotate-90 opacity-100"
              }`}
            />
          </span>

          <span className="text-left xl:text-xl">{ques}</span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-72" : "max-h-0"
          }`}
        >
          <p className="pb-5 px-5 xl:text-xl">{ans}</p>
        </div>

      </div>
    </div>
  );
};

export default Accordion2;
