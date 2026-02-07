"use client";

import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const About = () => {
  const router = useRouter();

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full flex flex-col items-center md:flex md:flex-row-reverse profession pt-10 pb-10"
    >
      <motion.div
        variants={item}
        className="relative inline-block md:flex md:items-center md:justify-center md:w-1/2"
      >
        <Image
          src="/Dr. Maya Reynolds.png"
          width={150}
          height={300}
          className="md:w-[200px] rounded-t-full mt-5 mb-5"
          alt="Dr. Maya Reynolds profile"
        />
      </motion.div>

      <div className="flex flex-col gap-5 md:gap-2 p-5 md:w-1/2 md:p-15">
        <motion.h1
          variants={item}
          className="text-2xl font-semibold text-start md:text-xl"
        >
          Hi, I'm Dr. Maya Reynolds, PsyD
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg"
        >
          I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults
          who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
        </motion.p>

        <motion.button
          variants={item}
          onClick={() => router.push("/about")}
          className="border px-4 py-2 lg:mt-2 inline-flex items-center mb-5 hover:bg-[#223614] hover:text-white mx-auto blick"
        >
          <span className="text-center flex flex-row items-center justify-center gap-2 uppercase">
            Learn More <HiArrowLongRight size={25} />
          </span>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default About;
