'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Section1 = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <motion.div
      className="flex flex-col md:flex md:flex-row justify-center md:items-center md:gap-1 bg-[var(--midBeige-bg)] p-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.div variants={item}>
        <Image
          src="/blog.jpg"
          alt="girl with diary"
          width={100}
          height={200}
          className="object-cover rounded-t-full h-[250px] mb-4 w-[180px] md:h-[350px] md:w-[280px] lg:h-[400px] lg:w-[300px] md:w-1/3 mx-auto"
        />
      </motion.div>

      <motion.div className="text-center md:text-start md:w-2/3 lg:px-3" variants={item}>
        <h1 className="text-4xl mb-10 font-bold text-[var(--primary-text)]">
          The Therapy Blog
        </h1>
        <p className="text-xl text-[var(--foreground)]">
          Welcome to my space where I share insights on mental health, anxiety, trauma, burnout, and navigating the challenges of modern life.
        </p>
        <p className="font-semibold mt-2 text-lg text-[var(--primary-text)]">
          Glad you're here.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Section1
