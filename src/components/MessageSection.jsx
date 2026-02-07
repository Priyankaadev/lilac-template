"use client";

import Image from "next/image";
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const MessageSection = ({ src, head, p1, p2, button, alt }) => {
  const router = useRouter();

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-6 md:flex-row-reverse md:flex message-section"
    >
      <motion.div
        variants={item}
        className="relative w-full h-72 md:h-100"
      >
        <Image src={src} className="object-cover" fill alt={alt} />
      </motion.div>

      <div className="flex flex-col gap-2 md:justify-center md:flex">
        <motion.h1
          variants={item}
          className="font-semibold text-2xl px-6 mt-8"
        >
          {head}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-lg px-6"
        >
          {p1}
        </motion.p>

        <motion.p
          variants={item}
          className="mb-2 text-lg px-6"
        >
          {p2}
        </motion.p>

        <motion.button
          variants={item}
          onClick={() => router.push("/contact")}
          className="flex border-t hover:bg-[#405032] hover:text-white w-full uppercase gap-2 p-2 lg:text-xl lg:items-center lg:mt-5  justify-center"
        >
          {button} <HiArrowLongRight size={25} />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default MessageSection;
