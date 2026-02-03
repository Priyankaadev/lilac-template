import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const HeroSection = ({heading, info, button}) => {
  return (
    <section className=" primary-text flex flex-col gap-5 items-center text-center md:pr-[10%] md:w-1/2 mb-5">
      <h1 className="text-4xl font-semibold mt-4 md:text-5xl">
        {heading}
      </h1>
      <p className=" text-lg md:text-xl ">
        {info}
      </p>
      <button className="border border-1px px-4 py-2 w-fit mb-5">
    <span className="text-center flex flex-row items-center justify-center gap-2"> {button} <HiArrowLongRight  size={25}/> </span> 
      </button>

    </section>
  );
};

export default HeroSection;
