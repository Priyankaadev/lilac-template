'use client'

import Image from 'next/image'
import Accordion2 from './Accordion2'
import { motion } from 'framer-motion'
import { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className='flex flex-col md:flex-row'>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto"
      >
        <Image
          src='/faq.jpg'
          width={150}
          height={270}
          alt='flowers'
          className="w-[150px] md:w-[150px] h-[250px] lg:w-[250px] lg:h-[350px] object-cover rounded-t-full mt-5 mb-5"
        />
      </motion.div>

      
      <motion.div
        className='p-5 md:w-1/2 md:py-10 md:flex md:flex-col md:justify-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-semibold mb-4 md:text-2xl pl-6 md:mb-2 xl:text-4xl'
        >
          FAQs
        </motion.h1>

        <Accordion2
          index={0}
          isOpen={openIndex === 0}
          onToggle={handleToggle}
          ques='Do you offer therapy for anxiety and stress?'
          ans='Yes. I work with adults who feel overwhelmed by anxiety, stress, overthinking...'
        />

        <Accordion2
          index={1}
          isOpen={openIndex === 1}
          onToggle={handleToggle}
          ques='Do you work with clients experiencing trauma?'
          ans='Absolutely. I work with adults who have experienced single-incident trauma...'
        />

        <Accordion2
          index={2}
          isOpen={openIndex === 2}
          onToggle={handleToggle}
          ques='Do you offer in-person and telehealth sessions?'
          ans='I offer both in-person therapy and secure telehealth sessions...'
        />

      </motion.div>
    </section>
  )
}

export default FAQSection
