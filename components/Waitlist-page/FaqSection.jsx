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
    id='faq-section' className='duration-300 transition-all m-auto w-[90%] pt-[180px] md:pt-[100px] lg:pt-[160px] md:w-[70%]'>
      <motion.h4
      variants={fadeIn("right")}
      className='text-text-color py-3 md:py-12 md:mt-6 lg:py-8 font-bold text-2xl md:text-3xl'>Frequently asked questions</motion.h4>
   <motion.div className='pb-8'>
    {faqs.map((faq) => (
     <SingleFAQ faq={faq} />
    ))}

   </motion.div>
    </motion.section>
  )
}

export default FaqSection