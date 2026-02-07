'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { HiArrowLongRight } from "react-icons/hi2"
import { motion } from "framer-motion"

const WorkSection = () => {
  const router = useRouter()

  return (
    <section className="mt-6 md:flex-row md:flex worksection items-stretch">

      <div className="relative w-full md:w-1/2 min-h-[18rem] md:min-h-[24rem]">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src='/office2.jpeg'
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            fill
            alt="Dr. Maya's office in Santa Monica, CA 90401"
          />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col gap-2 md:justify-center md:flex md:w-1/2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl px-6 mt-8">
          You don’t have to navigate this alone.
        </h1>

        <p className="mt-3 text-lg px-6">
          Life can feel overwhelming, especially when anxiety, burnout, or past experiences weigh heavily.
          If you relate to any of the following, therapy can help:
        </p>

        <ul className="list-disc pl-15 p-2 text-lg mt-6">
          <li>Persistent anxiety, panic, or overthinking</li>
          <li>Trauma from single-incident or long-standing patterns</li>
          <li>Professional burnout, perfectionism, or high internal pressure</li>
          <li>Difficulty managing stress or feeling emotionally regulated</li>
          <li>Impact of past experiences on relationships, confidence, or sense of safety</li>
        </ul>

        <p className="mb-2 text-lg px-6">
          In sessions, I take a warm, collaborative, and grounded approach, integrating evidence-based methods
          like CBT, EMDR, mindfulness, and body-oriented techniques.
        </p>

        <button
          onClick={() => router.push('/contact')}
          className="flex border-t w-full uppercase gap-2 p-2 mt-15 md:mt-8 justify-center hover:text-white hover:bg-[#223614]"
        >
          work with me <HiArrowLongRight size={25}/>
        </button>
      </motion.div>

    </section>
  )
}

export default WorkSection
