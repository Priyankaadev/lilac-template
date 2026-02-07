"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroCard = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex items-center md:w-1/3 justify-center md:justify-start px-5 mt-10 lg:mt-0"
    >
      <Image
        src={src}
        height={280}
        width={200}
        alt={alt}
        className="rounded-t-full h-70  md:h-[400px] lg:h-[550px] md:w-96 object-cover grayscale-25"
      />
    </motion.div>
  );
};

export default HeroCard;
