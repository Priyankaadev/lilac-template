'use client'

import Image from "next/image";

const HeroCard = ({src,alt}) => {
  return (
    <div className="w-full flex items-center md:w-1/2 justify-center md:justify-start p-4">
    <Image 
    src={src}
    width={250}
    height={200}
    alt= {alt}
    className="rounded-t-full "
    />
      
    </div>
  )
}

export default HeroCard;
