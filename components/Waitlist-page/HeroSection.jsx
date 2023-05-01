import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import image1 from "../../public/images/hero-1.png";
import image2 from "../../public/images/hero-2.png";
import image3 from "../../public/images/hero-3.png";
import WaitListModal from "../modals/NewWaitlist";
import Link from "next/link";
import Carousel from "./Carousel";
import MobileNav from "../modals/MobileNav";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
   const[toggleNav, setToggleNav] = useState(false)
  const [photo, setPhoto] = useState(1);
  function openModal() {
    if (emailValue === "") {
      setEmailEmpty(true);
    } else {
      setIsOpen(true);
      setEmailEmpty(false);
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

  const change = () => {
    if (photo === 5) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setEmailValue(e.target.value);
    setEmailEmpty(false);
  };

 
  return (
    <motion.section
      initial="hidden"
    viewport={{ once: true }}

      whileInView={"show"}
      variants={container}
      className={`
      xl:bg-none
      lg:bg-hero-1
      bg-hero-mobile
      
      duration-300 transition-all     bg-cover bg-center lg:h-[808px]
      bg-no-repeat relative 
      
      min-h-[60vh]`}
    >
      <Carousel />

      <div className="m-auto w-[90%] relative z-50 md:w-[70%]  py-9">
        <nav className="py-2 relative flex justify-between">
          <div>
            <Image
              width={150}
              height={150}
              src={Logo}
              alt="logo"
              className="z-50"
            />
          </div>

          <ul className="text-white hidden justify-center md:flex gap-7 items-center">
          <li className="hover:border-b-2 border-brand-blue">
              <a href="#about-section">About Us</a>
            </li>
            <li className="hover:border-b-2 border-brand-blue">
              <a href="#faq-section">FAQs</a>
              
            </li>

            
          </ul>

          <div className="md:inline-block hidden">
            <button className="bg-brand-blue text-white px-7 rounded-md py-2 text-center">
              <a href="#join-waitlist">Join Waitlist</a>
            </button>
          </div>

          <div onClick={() => setToggleNav(!toggleNav)} className="md:hidden duration-300 cursor-pointer inline-block">
            {toggleNav ? <AiOutlineClose className="text-white text-4xl" /> : <AiOutlineMenu className="text-white text-4xl" />}
          </div>

          {toggleNav && <MobileNav toggleNav={toggleNav} setToggleNav={setToggleNav} />}

        </nav>

        <div className="mt-[180px]">
          <div className="w-full flex flex-col  gap-6">
            <motion.h3
              variants={fadeIn("down")}
              className="font-bold z-10 text-white text-center lg:text-start text-5xl md:text-6xl lg:text-8xl max-w-[900px]"
            >
              Discover A Better Way To Travel
            </motion.h3>
            <motion.p
              variants={fadeIn("left")}
              className="text-white text-xl text-center lg:text-start max-w-[700px]"
            >
              Find your dream holiday destinations, get great hotel deals, and
              save for your next travel, all in one space
            </motion.p>
          </div>
        </div>

        <div className="pt-12 flex flex-col w-full duration-300 transition-all  gap-4">
          <h4 className="text-white text-center md:text-start">
            Join Ope, Andy, and 3189 others on the waitlist
          </h4>
          <div className="flex md:flex-row w-full items-center flex-col gap-3">
            <div>
              <input
                className="py-3 rounded-md px-2"
                type="text"
                name=""
                id=""
                placeholder="Enter email address"
                value={emailValue}
                onChange={handleChange}
              />
            </div>
            <button
              onClick={openModal}
              className="bg-brand-blue text-white px-7 rounded-md py-3 text-center"
            >
              Join Waitlist
            </button>
          </div>
          {emailEmpty ? (
            <h3 className="text-red-500">Please enter a valid email</h3>
          ) : (
            ""
          )}
        </div>
      </div>
      <WaitListModal email={emailValue} isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.section>
  );
};

export default HeroSection;
