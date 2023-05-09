import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
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

const url = "https://xcursions.us21.list-manage.com/subscribe/post?u=ec111fee6499d391c81dd7914&amp;id=a539b502a7&amp;f_id=004286e1f0";
const HeroSection = () => {

  const {
    loading,
    error,
    success,
    message,
    handleSubmit
  } = useMailChimpForm(url);
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

 

  const handleChange = (e) => {
    setEmailValue(e.target.value);
    setEmailEmpty(false);
  };

  // xl:bg-none
  //     lg:bg-hero-1
  //     bg-hero-mobile
  // bg-[url('https://res.cloudinary.com/waleszn/image/upload/v1683438649/hero-mobile_wwzvet.png')]
  return (
    <motion.section
      initial="hidden"
    viewport={{ once: true }}

      whileInView={"show"}
      variants={container}
      className={`
      bg-[url('https://res.cloudinary.com/waleszn/image/upload/v1683438649/hero-mobile_wwzvet.png')]
      md:bg-[url('https://res.cloudinary.com/waleszn/image/upload/v1683437805/hero-new_ykye8l.png')]
      
      duration-300 transition-all     bg-cover bg-center lg:h-[808px]
      bg-no-repeat relative 
      
      min-h-[60vh]`}
    >
      {/* <Carousel /> */}

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
            Join Ope, Andy, and 3184 others on the waitlist
          </h4>
          <div className="">
            <form
            className="flex md:flex-row w-full items-center flex-col gap-3"
            onSubmit={event => {
              event.preventDefault();
              handleSubmit(emailValue);
              if(success){
                openModal()
              }
            }}
            >
              <input
                className="py-3 rounded-md px-2"
                type="text"
                name=""
                id="EMAIL"
                placeholder="Enter email address"
                value={emailValue}
                onChange={handleChange}
              />
            <button
            // type="submit"
              // onClick={openModal}
              className="bg-brand-blue text-white px-7 rounded-md py-3 text-center"
            >
              {loading ? "Loading" : "Join Waitlist"}
            </button>
            </form>
        
          </div>
          {error ? (
            <h3 className="text-red-500">{error}</h3>
          ) : (
            ""
          )}
          {loading && "submitting"}
          {error && <div className="text-white">Failed to join now, please try again later</div>}
      {success && <div className="text-white">{message}</div>}
          
        </div>
      </div>
      <WaitListModal email={emailValue} isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.section>
  );
};

export default HeroSection;
