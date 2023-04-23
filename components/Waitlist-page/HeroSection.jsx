import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import image1 from "../../public/images/hero-1.png"
import image2 from "../../public/images/hero-2.png"
import image3 from "../../public/images/hero-3.png"
import WaitListModal from "../modals/NewWaitlist";
import Link from "next/link";


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
  const [isOpen, setIsOpen] = useState(false)
  const[emailValue, setEmailValue] = useState("")
  const[emailEmpty, setEmailEmpty] = useState(false)
  const[photo, setPhoto] = useState(1)
  function openModal() {
    if(emailValue === ""){
      setEmailEmpty(true)
    }else{
      setIsOpen(true)
      setEmailEmpty(false)

    }
  }
 
  
  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

console.log(photo)
  const change = () => {
    if (photo === 5) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };
  
  const handleChange = (e) =>{
    setEmailValue(e.target.value)
    setEmailEmpty(false)
  }

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return "hero-1";
      case 2:
        return "hero-2";
      case 3:
        return "hero-3";
      case 4:
        return "hero-4";
      default:
        return null;
    }
  };
  return (
    <motion.section
    initial='hidden'
    whileInView={'show'}
     variants={container}
      className={`bg-hero-mobile md:bg-hero-1 duration-300 transition-all   hero-mobile  bg-cover bg-center lg:h-[808px]
      bg-no-repeat relative 
      
      min-h-[60vh]`}
    >
    

      <div className="m-auto w-[90%] md:w-[70%]  py-9">
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
            <li>
            <Link href="#faq-section">
              FAQ
            {/* <a href="#faq-section">Faq</a> */}
            </Link>
            </li>
            
            <li>About Us</li>
            {/* <li>Contact</li> */}
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

        <div className="pt-12 flex flex-col w-full duration-300 transition-all  gap-4">
            <h4 className="text-white text-center md:text-start">Join Ope, Andy, and 3189 others on the waitlist</h4>
            <div className="flex md:flex-row w-full items-center flex-col gap-3">
                <div>
                <input className="py-3 rounded-md px-2" type="text" name="" id="" 
                placeholder="Enter email address"
                value={emailValue}
                onChange={handleChange}
                />
                </div>
                <button onClick={openModal} className="bg-brand-blue text-white px-7 rounded-md py-3 text-center">
              Join Waitlist
            </button>
            
            </div>
            {emailEmpty ? <h3 className="text-red-500">Please enter a valid email</h3> : ""}
        </div>
      </div>

      <WaitListModal email={emailValue} isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.section>
  );
};

export default HeroSection;
