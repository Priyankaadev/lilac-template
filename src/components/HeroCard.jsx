'use client'

import Image from "next/image";

const HeroCard = ({src,alt}) => {
  return (
    <div className="w-full flex items-center md:w-1/2 justify-center md:justify-start p-10 mt-10">
    <Image 
    src={src}
    height={160}
    width={160}
    alt= {alt}
    className="rounded-t-full h-60"
    />
      
    </div>
  )
}

export default HeroCard;
