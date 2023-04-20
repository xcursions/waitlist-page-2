import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
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
const HeroSection = () => {
  return (
    <motion.section
    initial='hidden'
    whileInView={'show'}
     variants={container}
      className="bg-hero-mobile md:bg-hero  bg-cover bg-center lg:h-[808px]
    bg-no-repeat relative 
    
    min-h-[60vh]"
    >
      <div className="m-auto w-[90%] md:w-[80%] py-4">
        <nav className="py-4 flex justify-between">
          <div>
            <Image
              width={150}
              height={150}
              src={Logo}
              alt="logo"
              className="z-50"
            />
          </div>

          <ul className="text-white hidden md:flex gap-7 items-center">
            <li>FAQ</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="md:inline-block hidden">
            <button className="bg-brand-blue text-white px-7 rounded-md py-2 text-center">
              Join Waitlist
            </button>
          </div>

          <div className="md:hidden inline-block">
            <AiOutlineMenu className="text-white text-4xl" />
          </div>
        </nav>

        <div className="mt-[200px]">
          <div className="w-full flex flex-col  gap-6">
            <motion.h3 variants={fadeIn("down")} className="font-bold text-white text-center lg:text-start text-5xl md:text-6xl lg:text-8xl max-w-[900px]">
              Discover A Better Way To Travel
            </motion.h3>
            <motion.p variants={fadeIn("left")} className="text-white text-xl text-center lg:text-start max-w-[700px]">Find your dream holiday destinations, get great hotel deals, and save for your next travel, all in one space</motion.p>
          </div>
        </div>

        <div className="pt-12 flex flex-col  gap-4">
            <h4 className="text-white text-center md:text-start">Join Ope, Andy, and 3189 others on the waitlist</h4>
            <div className="flex md:flex-row items-center flex-col gap-3">
                <input className="py-3 rounded-md px-2" type="text" name="" id="" 
                placeholder="Enter email address"
                />
                <button className="bg-brand-blue text-white px-7 rounded-md py-3 text-center">
              Join Waitlist
            </button>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
