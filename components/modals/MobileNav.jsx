import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const container = {
    hidden: {},
    show: {
      transition :{
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }
const MobileNav = ({setToggleNav, toggleNav}) => {
  return (
    <motion.div  
    initial='hidden'
    viewport={{ once: true }}
    whileInView={'show'}
     variants={container}
    
     
    className='absolute p-9 bg-white rounded-md z-50 md:hidden right-0 top-[80%]'>
         <ul
        variants={fadeIn("down")}
         className="text-brand-blue justify-center space-y-5 md:flex gap-7 items-center">
          <li 
          variants={fadeIn("down")}
          onClick={() => setToggleNav(!toggleNav)} className="hover:border-b-2 border-brand-blue">
              <a href="#about-section">About Us</a>
            </li>
            <li onClick={() => setToggleNav(!toggleNav)} className="hover:border-b-2 border-brand-blue">
              <a href="#faq-section">FAQs</a>
              
            </li>

            
          </ul>
    </motion.div>
  )
}

export default MobileNav