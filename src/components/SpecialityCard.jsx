import Image from "next/image";
import React from "react";

const SpecialityCard = ({ head, desc, img ,alt}) => {
  return (
    <div className="border mt-6 p-5 flex primary-text flex-col gap-6 items-center footer-secondary border-[#223614]">
      <h1 className="text-xl font-semibold text-start w-full">{head}</h1>
      <p className="text-lg">{desc}</p>
      <div className="relative h-56 w-56 mt-auto  ">
        <Image src={img} className="object-cover rounded-full " fill alt={alt} />
      </div>
    </div>
  );
};

export default SpecialityCard;
