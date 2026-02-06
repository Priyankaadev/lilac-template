'use client'
import { useRouter } from "next/navigation";
import { HiArrowLongRight } from "react-icons/hi2";

const HeroSection = ({heading, info, button}) => {
   const router = useRouter();
  return (
    <section className=" primary-text flex flex-col gap-5 items-center text-center md:pr-[10%] md:w-1/2 mb-5 px-5 md:mt-15">
      <h1 className="text-4xl font-semibold mt-4 md:text-5xl">
        {heading}
      </h1>
      <p className=" text-lg md:text-xl ">
        {info}
      </p>
      <button onClick={()=> router.push("/")} className="border px-4 py-2 w-fit mb-5 hover:bg-[#223614] hover:text-white ">
    <span className="text-center flex flex-row items-center justify-center gap-2"> {button} <HiArrowLongRight  size={25}/> </span> 
      </button>

    </section>
  );
};

export default HeroSection;
