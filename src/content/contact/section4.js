'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Section4 = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <motion.section
      className="flex flex-col gap-8 px-2 py-5 bg-[var(--midBeige-bg)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.h1
        className="text-2xl pt-5 md:text-3xl font-semibold mx-auto text-[var(--primary-text)]"
        variants={item}
      >
        Find me on social.
      </motion.h1>

      <motion.div className="flex items-center justify-around" variants={container}>
        <motion.div variants={item}>
          <Image
            src="/office1.jpeg"
            width={150}
            height={150}
            className="md:h-[200px] md:w-[350px] lg:w-[450px] lg:h-[300px] object-cover"
            alt="Office 1"
          />
        </motion.div>

        <motion.div variants={item}>
          <Image
            src="/office2.jpeg"
            width={150}
            height={150}
            className="md:h-[200px] md:w-[350px] lg:w-[450px] lg:h-[300px] object-cover"
            alt="Office 2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Section4
