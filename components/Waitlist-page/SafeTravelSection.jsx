import React, { useEffect, useState } from "react";
import Image from "next/image";
import TravelImage from "../../public/images/travel.png"
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
const SafeTravelSection = () => {
   
  return (
    <motion.section
    id="about-section"
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: true }}
     variants={container}
    
    className="bg-gray-color ">
     <div className="m-auto w-[90%] flex flex-col md:flex-row justify-between md:w-[70%] gap-6 py-12">
     <div className="flex justify-center flex-col space-y-4">
        <motion.h4 
        variants={fadeIn("down")}
        className="font-bold max-w-sm leading-18 text-3xl  md:text-5xl text-center md:text-start">Save & Travel On The Go</motion.h4>
        <motion.p variants={fadeIn("left")}  className="max-w-lg text-[#2B2945] text-justify leading-18">Automate your savings & reach your travel goals faster with our &apos;pay small small&apos; plan. No Charges. No Penalties. Absolutely Free.</motion.p>
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
  );
};

export default SafeTravelSection;
