import React from "react";
import Image from "next/image";
import TravelImage from "../../public/images/travel.png"
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


const container = {
    hidden: {},
    show: {
      transition :{
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }
const BookHotelSection = () => {
  return (
    <motion.section
    initial='hidden'
    whileInView={'show'}
     variants={container}
    
    className="bg-gray-color ">
     <div className="m-auto w-[90%] flex flex-col md:flex-row justify-between md:w-[70%] py-12">
     <div className="flex justify-center flex-col space-y-4">
        <motion.h4 
        variants={fadeIn("down")}
        className="font-bold max-w-md leading-18 text-3xl  md:text-5xl text-center md:text-start">Book hotels across 
        the globe</motion.h4>
        <motion.p variants={fadeIn("left")}  className="max-w-lg text-[#2B2945] text-justify leading-18">Hotel booking hassles are old news here. Find your next stay with Xcursions. From hotels to short lets, to apartments for all your vacations. We've got you covered!</motion.p>
      </div>

      <motion.div
      variants={fadeIn("left")}>
        <Image
            width={550}
            height={550}
            src={TravelImage}
            alt=""
            className="hover:scale-105 duration-300 cursor-pointer"
            priority
        />
      </motion.div>
     </div>
    </motion.section>
  )
}

export default BookHotelSection