'use client'

import Accordion from '@/components/Accordion'
import { motion } from 'framer-motion'

const ProfessionCard = () => {
  return (
    <section className="flex flex-col py-10 items-center profession">

      <motion.h1
        className="text-xl md:text-3xl text-center lg:text-4xl font-semibold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Professional Background
      </motion.h1>

      <motion.div
        className="mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <Accordion
            ques="Licensure"
            ans="I am a licensed clinical psychologist (PsyD) practicing in Santa Monica, California."
          />
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <Accordion
            ques="Therapy Approach & Methods"
            ans="I use evidence-based therapy techniques including cognitive-behavioral therapy (CBT), EMDR, mindfulness practices, and body-oriented methods to support clients in managing anxiety, trauma, and professional burnout."
          />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default ProfessionCard
