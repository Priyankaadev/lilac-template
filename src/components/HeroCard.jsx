'use client'

import Image from "next/image";

const HeroCard = ({src,alt}) => {
  return (
    <div className="w-full flex items-center md:w-1/2 justify-center md:justify-start p-10 mt-10">
    <Image 
    src={src}
    width={200}
    height={200}
    alt= {alt}
    className="rounded-t-full "
    />
      
    </div>
  )
}

export default HeroCard;
