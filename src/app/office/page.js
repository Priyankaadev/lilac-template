'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const page = () => {
  return (
    <section className="px-5 md:px-20 py-20 bg-[#F4F7F8] text-[#2C3E44]">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl  flex flex-col md:flex-row gap-10 "
      >
       
        <motion.div
          variants={item}
          className="relative w-full  md:w-1/2 h-80 md:h-[420px]"
        >
          
          <Image
            src="/office2.jpeg" 
            fill
            alt="Therapy office"
            className="object-cover rounded-3xl"
          />
        </motion.div>

       
        <motion.div
          variants={container}
          className="md:w-1/2 flex flex-col gap-4 text-lg"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold"
          >
       Therapy Office in Santa Monica
          </motion.h2>

          <motion.p variants={item}>
             Dr. Maya Reynolds, PsyD is a licensed clinical psychologist offering in-person
  therapy in Santa Monica, California. Her office is intentionally designed to
  provide a calm, private, and grounding environment where clients can feel safe,
  supported, and at ease from the moment they arrive.
          </motion.p>

          <motion.p variants={item}>
           Many clients seek therapy here for anxiety, panic, trauma, chronic stress, and
  professional burnout.
          </motion.p>

          <motion.p variants={item}>
            Sessions take place in a quiet, thoughtfully arranged room with natural light,
  comfortable seating, and a simple, uncluttered design. 
          </motion.p>

          
          <motion.div
            variants={item}
            className="mt-4 p-5 rounded-2xl bg-white shadow-sm flex flex-col gap-2 text-base"
          >
            <p><strong> Office Address::</strong> 123th Street 45 W, Santa Monica, CA 90401</p>
            <p><strong>Specialties:</strong>  Anxiety, trauma, burnout, stress & perfectionism</p>
            <p><strong> Session Options:</strong> In-person therapy & secure telehealth (California)</p>
          </motion.div>
         
        </motion.div>
      </motion.div>
         <motion.div variants={item} className="w-full h-[350px] mt-20 overflow-hidden rounded-lg">
        <iframe
          title="Office location map"
          src="https://www.google.com/maps?q=123th%20Street%2045%20W%20Santa%20Monica%20CA%2090401&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </motion.div>

    </section>
  );
};

export default page;
