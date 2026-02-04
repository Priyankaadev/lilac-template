import Image from "next/image"
import { HiArrowLongRight } from "react-icons/hi2"

const MessageSection = ({src, head, p1,p2, button, alt}) => {
  return (
    <section className="mt-6 md:flex-row-reverse md:flex message-section ">
      
       <div className="relative w-full h-72 md:h-100"> 
        <Image src={src} className="object-cover" fill alt={alt}/>
        </div>
       
        <div className="flex  flex-col gap-2 md:justify-center md:flex ">
        <h1 className="font-semibold text-2xl px-6 mt-8">{head}</h1>
        <p className="mt-3 text-lg px-6">{p1}</p>
        <p className="mb-2 text-lg px-6">{p2}</p>
        <button className="flex border-t w-full uppercase gap-2 p-2 mt-15 justify-center">
         {button} <HiArrowLongRight size={25}/> 
        </button>
        </div>

    </section>
  )
}

export default MessageSection
