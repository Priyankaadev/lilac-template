"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SpecialityCard = ({ head, desc, img, alt, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="border mt-6 p-5 flex primary-text flex-col gap-6 items-center footer-secondary border-[#223614]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.1 }}
        viewport={{ once: true }}
        className="text-xl font-semibold text-start w-full"
      >
        {head}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        viewport={{ once: true }}
        className="text-lg"
      >
        {desc}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        viewport={{ once: true }}
        className="relative h-56 w-56 mt-auto"
      >
        <Image src={img} className="object-cover rounded-full" fill alt={alt} />
      </motion.div>
    </motion.div>
  );
};

export default SpecialityCard;
