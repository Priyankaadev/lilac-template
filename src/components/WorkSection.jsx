import Image from "next/image"
import { HiArrowLongRight } from "react-icons/hi2"

const WorkSection = () => {
  return (
    <section className="mt-6 md:flex-row md:flex worksection  items-stretch">
      
       <div className="relative w-full md:w-1/2 min-h-[18rem] md:min-h-[24rem] "> 
        <Image src='/womenAlone.webp'
          sizes="(min-width: 768px) 50vw, 100vw"
           className="object-cover " fill alt="girl sitting alone"/>
        </div>
       
        <div className="flex flex-col gap-2 md:justify-center md:flex md:w-1/2 ">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl px-6 mt-8">You don't have to do this all alone.</h1>
        <p className="mt-3 text-lg px-6">If you are facing any of these, there’s hope:</p>
        <ul className="list-disc pl-15 p-2 text-lg mt-6">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>

        </ul>
        <p className="mb-2 text-lg px-6">With empathy and guidance, 
            we'll work together to navigate the challenges life throws your way.</p>
        <button className="flex border-t w-full uppercase gap-2 p-2 mt-15 md:mt-8 justify-center hover:text-white hover:bg-[#223614]">
         work with me <HiArrowLongRight size={25}/> 
        </button>
        </div>

    </section>
  )
}

export default WorkSection
