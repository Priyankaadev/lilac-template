'use client'


import React from 'react'
import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Footer = () => {
  return (
    <footer className='flex flex-col items-center'>
      <motion.section
        className='footer-primary min-w-full p-5 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-5'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className='gap-5 flex flex-col text-center md:text-start md:w-1/3'
          variants={item}
        >
          <h1 className='text-2xl primary-text font-semibold'>Dr. Maya Reynolds, PsyD</h1>
          <address className='text-lg text-wrap'>
            123th Street 45 W<br/>
            Santa Monica, CA 90401
          </address>
          <p className='underline text-lg'>
            <a href="mailto:contact@drmayareynolds.com">contact@drmayareynolds.com</a><br/>
            <a href="tel:+1234567890">(123) 456-7890</a>
          </p>
        </motion.div>

        <motion.div className='flex flex-col text-center gap-5 md:flex-row md:text-start'>
          <motion.div className='flex flex-col gap-4' variants={item} transition={{ delay: 0.2 }}>
            <h2 className='font-semibold text-2xl'>Hours</h2>
            <p className='text-center text-lg md:text-start'>
              Monday - Friday <br />
              9am - 5pm
            </p>
          </motion.div>

          <motion.div className='flex flex-col gap-4' variants={item} transition={{ delay: 0.4 }}>
            <h2 className='font-semibold text-2xl'>Find</h2>
            <ul className='flex flex-col items-center underline text-lg md:items-start'>
              <motion.li variants={item} transition={{ delay: 0.5 }}><a href="/about">About</a></motion.li>
              <motion.li variants={item} transition={{ delay: 0.6 }}><a href="/contact">Contact</a></motion.li>
              <motion.li variants={item} transition={{ delay: 0.7 }}><a href="/blog">Blog</a></motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className='footer-secondary min-w-full gap-4 flex flex-col text-center p-2 pt-5'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.ul className='underline text-lg flex flex-wrap gap-3 justify-center' variants={item}>
          <motion.li variants={item} transition={{ delay: 0.2 }}><a href='/'>Privacy & Cookies Policy</a></motion.li>
          <motion.li variants={item} transition={{ delay: 0.3 }}><a href='/'>Good Faith Estimate</a></motion.li>
          <motion.li variants={item} transition={{ delay: 0.4 }}><a href='/'>Website Terms & Conditions</a></motion.li>
          <motion.li variants={item} transition={{ delay: 0.5 }}><a href='/'>Disclaimer</a></motion.li>
        </motion.ul>
        <motion.p className='text-lg primary-text' variants={item} transition={{ delay: 0.6 }}>
          All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD
        </motion.p>
      </motion.section>
    </footer>
  )
}

export default Footer
