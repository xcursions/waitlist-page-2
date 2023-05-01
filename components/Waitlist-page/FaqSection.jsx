import React from 'react'
import { faqs } from '../../utils/data'
import SingleFAQ from './SingleFAQ'
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const container = {
  hidden: {
    
     
  },
  show: {
    transition :{
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}
const FaqSection = () => {
  return (
    <motion.section 
    initial="hidden"
    viewport={{ once: true }}
      whileInView={"show"}
      variants={container}
    id='faq-section' className='mt-[200px] md:mt-[150px] duration-300 transition-all m-auto w-[90%] py-9 md:w-[70%]'>
      <motion.h4
      variants={fadeIn("right")}
      className='text-text-color py-3 font-bold text-2xl md:text-3xl'>Frequently asked questions</motion.h4>
   <motion.div className='py-8'>
    {faqs.map((faq) => (
     <SingleFAQ faq={faq} />
    ))}

   </motion.div>
    </motion.section>
  )
}

export default FaqSection