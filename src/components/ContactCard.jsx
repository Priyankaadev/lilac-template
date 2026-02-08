'use client'

import { HiArrowLongRight } from "react-icons/hi2"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const ContactCard = ({ head, desc, btn }) => {
  const router = useRouter()
  return (
    <motion.section
      className="flex flex-col items-center justify-center contact text-white gap-8 p-8 border-b border-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-semibold text-center">{head}</h1>
      <p className="text-center text-xl">{desc}</p>
      <button onClick={()=>router.push('/contact')}
       className="border px-4 py-2 w-fit mb-5 mt-5 hover:bg-white hover:text-[#7E7B46]">
        <span className="text-center flex flex-row items-center justify-center gap-2 uppercase">
          {btn} <HiArrowLongRight size={25} />
        </span>
      </button>
    </motion.section>
  )
}

export default ContactCard
