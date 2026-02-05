import Image from "next/image";
import HeroCard from "./HeroCard";
import { HiArrowLongRight } from "react-icons/hi2";

const About = () => {
  return (
    <section className="relative w-full flex flex-col items-center  md:flex md:flex-row-reverse profession pt-10 pb-10">
      
      <div className="relative inline-block md:flex md:items-center md:justify-center md:w-1/2">  

        <Image src='/girlwithflower.webp' width={150} height={300} className=" md:w-[200px] rounded-t-full mt-5 mb-5"/>

        <div className="absolute bottom-2 -right-8 md:right-10 md:bottom-5 h-20 w-20 md:w-30 md:h-30 lg:right-25 xl:right-45">
          <Image
            src="/whiteflower.webp"
            alt="Overlapping image"
            fill
            className="rounded-full object-cover "
          />
        </div>

      </div>

      <div className="flex flex-col gap-5 md:gap-2 p-5 md:w-1/2 md:p-15 ">
        <h1 className="text-2xl font-semibold text-start md:text-xl" >Hi, I'm Lilac</h1>
        <p className="text-lg ">I'm committed to providing a safe and supportive environment where we can explore your thoughts,
           feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p>
               <button className="border px-4   py-2 lg:mt-2  inline-flex items-center  mb-5 hover:bg-[#223614] hover:text-white mx-auto blick ">
             <span className="text-center flex flex-row items-center justify-center gap-2 uppercase ">Let's Chat <HiArrowLongRight  size={25}/> </span> 
               </button>
      </div>

    </section>
  );
};

export default About;
