'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Section1 = () => {
  return (
    <section className="px-10 py-5 bg-[var(--midBeige-bg)]">

      <motion.h1
        className="text-3xl lg:text-5xl mb-10 font-semibold text-[var(--primary-text)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Let's Connect
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } }
        }}
      >
        <motion.div
          className="flex flex-col gap-4 mt-2 md:w-1/2"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-xl text-[var(--foreground)]">Starting therapy is courageous.</h2>
          <h2 className="text-xl text-[var(--foreground)] text-wrap">
            Get in touch for questions, or to book a free 15-minute consultation.
          </h2>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/contact.jpg"
            width={150}
            height={150}
            alt="Contact"
            className="object rounded-t-full flex mx-auto md:h-[250px] md:w-[180px] lg:w-[250px] lg:h-[350px]"
          />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Section1
