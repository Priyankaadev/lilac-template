'use client'

import { motion } from 'framer-motion'

const Section3 = () => {
  const fadeUp = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  return (
    <motion.section
      className="flex flex-col gap-5 p-5 items-start font-semibold lg:text-2xl text-lg bg-[var(--olive-bg)] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <motion.h2 variants={item}>My Office</motion.h2>
      <motion.p variants={item}>
        123th Street 45 W,<br /> Santa Monica, CA 90401
      </motion.p>

      <motion.h2 variants={item}>Hours</motion.h2>
      <motion.p variants={item}>
        Monday-Friday<br />10am - 6pm
      </motion.p>

      <motion.div variants={item} className="w-full h-[350px] overflow-hidden rounded-lg">
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
    </motion.section>
  )
}

export default Section3
