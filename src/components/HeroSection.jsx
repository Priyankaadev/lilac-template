"use client";

import { useRouter } from "next/navigation";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = ({ heading, info, button }) => {
  const router = useRouter();

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="primary-text flex flex-col gap-5 items-center text-center md:pr-[10%] md:w-2/3 mb-5 px-5 md:mt-15"
    >
      <motion.h1
        variants={item}
        className="text-4xl font-semibold mt-4 lg:text-5xl"
      >
        {heading}
      </motion.h1>

      <motion.p
        variants={item}
        className="text-lg md:text-xl"
      >
        {info}
      </motion.p>

      <motion.button
        variants={item}
        onClick={() => router.push("/contact")}
        className="border px-4 py-2 w-fit mb-5 hover:bg-[#223614] hover:text-white"
      >
        <span className="text-center flex flex-row items-center justify-center gap-2">
          {button} <HiArrowLongRight size={25} />
        </span>
      </motion.button>
    </motion.section>
  );
};

export default HeroSection;
