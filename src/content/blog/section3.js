'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Section3 = () => {
  const [message, setMessage] = useState(false);

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="bg-[var(--olive-bg)] text-[var(--foreground)] w-full min-h-96 p-8 flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={item}
    >
      {message ? (
        <motion.p
          className="border border-[#7FA3A0] max-w-md w-full p-8 flex flex-col items-center justify-center gap-3"
          variants={item}
        >
          Thank you!
        </motion.p>
      ) : (
        <motion.div
          className="border border-[#7FA3A0] max-w-md w-full p-8 flex flex-col items-center justify-center gap-3"
          variants={item}
        >
          <h1 className="font-bold text-xl text-[#F5F7F6]">Subscribe</h1>

          <p className="text-center text-[#DCE6E4]">
            Sign up with your email address to receive news and updates.
          </p>

          <div className="flex flex-col gap-2 w-full md:flex md:flex-row md:justify-center">
            <input
              placeholder="Email Address"
              type="email"
              className="border p-2 border-[#7FA3A0] bg-[#F5F7F6] text-[#2C3E44] placeholder:text-[#6B7F85] focus:outline-none focus:ring-2 focus:ring-[#7FA3A0]"
            />
            <button
              onClick={() => setMessage(true)}
              className="border border-[#7FA3A0] text-[#F5F7F6] hover:bg-[#2C3E44] transition-colors p-2"
            >
              SIGN UP
            </button>
          </div>

          <p className="text-sm text-white">We respect your privacy.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Section3;
