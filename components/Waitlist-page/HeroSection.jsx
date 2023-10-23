import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WaitListModal from "../modals/NewWaitlist";
import MobileNav from "../modals/MobileNav";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const HeroSection = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [toggleNav, setToggleNav] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const postData = async () => {
    try {
      const response = await fetch(
        "https://backend.xcursions.ng/api/v1/referral/mail/mailchimp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: searchParams?.get("ref_id")
            ? JSON.stringify({
                email: emailValue,
                refId: searchParams?.get("ref_id"),
              })
            : JSON.stringify({ email: emailValue }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data?.id);
        setIsOpen(true);
      } else {
        const data = await response.json();
        setResponseMessage(data?.data?.id);
        setIsOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network or other errors here
    }
  };

  const handleChange = (e) => {
    setEmailValue(e.target.value);
  };
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

          <div
            onClick={() => setToggleNav(!toggleNav)}
            className="md:hidden duration-300 cursor-pointer inline-block"
          >
            {toggleNav ? (
              <AiOutlineClose className="text-white text-4xl" />
            ) : (
              <AiOutlineMenu className="text-white text-4xl" />
            )}
          </div>

          {toggleNav && (
            <MobileNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
          )}
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
              className="text-white text-md text-center lg:text-start max-w-[700px]"
            >
              Find your dream holiday destinations, get great hotel deals, and
              save for your next travel, all in one space.
            </motion.p>
          </div>
        </div>

        <div className="pt-12 flex flex-col  duration-300 transition-all  gap-4">
          <h4 className="text-white text-center md:text-start">
            Join over 3500+ people on the waitlist
          </h4>
          <div className="max-w-3xl">
            <form
              className="flex md:flex-row items-center flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                postData();
              }}
            >
              <input
                className="w-full py-3 rounded-md px-2"
                type="text"
                name=""
                id="EMAIL"
                placeholder="Enter email address"
                value={emailValue}
                onChange={handleChange}
              />
              <button
                // type="submit"
                className="bg-brand-blue  md:w-2/5 text-white px-7 rounded-md py-3 text-center"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
      <WaitListModal
        email={emailValue}
        refId={responseMessage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </motion.section>
  );
};

export default HeroSection;
