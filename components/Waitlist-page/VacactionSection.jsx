import React from 'react'
import VacationImage from "../../public/images/vacations.png"
import Image from 'next/image'
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
const VacationSection = () => {
  return (
    <motion.section 
    initial='hidden'
    whileInView={'show'}
     variants={container}
    className=" ">
    <div className="m-auto w-[90%] gap-4 flex flex-col md:flex-row justify-between md:w-[70%] py-8">
    <motion.div
    variants={fadeIn("left")}
    >
       <Image
           width={550}
           height={550}
           src={VacationImage}
           alt=""
           priority
           className="hover:scale-105 duration-300 cursor-pointer"

       />
     </motion.div>
    <div className="flex justify-center flex-col space-y-4">
       <motion.h4
       variants={fadeIn("down")}
       className="font-bold max-w-md leading-18 text-3xl  md:text-5xl text-center md:text-start">Access Vacation Options in One Click</motion.h4>
       <motion.p
       variants={fadeIn("up")}
       className="max-w-lg text-[#2B2945] text-justify leading-18">With our wide range of budget-friendly vacation deals, you will be exploring the world without breaking the bank. No stress. Just maximum enjoyment!</motion.p>
     </div>

    
    </div>
   </motion.section>
  )
}

export default VacationSection