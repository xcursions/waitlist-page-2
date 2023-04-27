import React, { useState } from "react";
import Image from "next/image";
import TravelImage from "../../public/images/book-hotel.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WaitListModal from "../modals/NewWaitlist";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
const BookHotelSection = () => {
 const [isOpen, setIsOpen] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);

  const handleChange = (e) => {
    setEmailValue(e.target.value);
    setEmailEmpty(false);
  };
   function openModal() {
    if (emailValue === "") {
      setEmailEmpty(true);
    } else {
      setIsOpen(true);
      setEmailEmpty(false);
    }
  }
  return (
    <motion.section
      initial="visible"
      whileInView={"show"}
      variants={container}
      id="join-waitlist"
      className="bg-gray-color relative pb-12 mb-16"
    >
      <div className="m-auto w-[90%] flex gap-4 flex-col md:flex-row justify-between md:w-[70%] py-12">
        <div className="flex justify-center flex-col space-y-4">
          <motion.h4
            variants={fadeIn("down")}
            className="font-bold max-w-md leading-18 text-3xl  md:text-5xl text-center md:text-start"
          >
            Book hotels across the globe
          </motion.h4>
          <motion.p
            variants={fadeIn("left")}
            className="max-w-lg text-[#2B2945] text-justify leading-18"
          >
            Hotel booking hassles are old news here. Find your next stay with
            Xcursions. From hotels to short lets, to apartments for all your
            vacations. We've got you covered!
          </motion.p>
        </div>

        <motion.div variants={fadeIn("left")}>
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

      <div className="bg-brand-blue p-4  lg:p-12 space-y-4 absolute flex flex-col items-center justify-center   rounded-md left-[10%] right-[10%] lg:left-[20%] lg:right-[20%] ">
        <h3 className="text-white text-center font-bold text-xl md:text-3xl">
          The Most Rewarding Way to Travel!
        </h3>
        <p className="text-white text-center text-sm">
          Join waitlist to gain early access when we launch the webapp
        </p>

         <div className="flex md:flex-row w-full items-center justify-center flex-col gap-3">
          
          <input
            className="py-3 rounded-md px-2"
            type="text"
             placeholder="Enter email address"
                value={emailValue}
                onChange={handleChange}
            
          />
          <button onClick={openModal} className="border-white border-2 text-white px-7 rounded-md py-3 text-center">
            Join Waitlist
          </button>
        </div>
         <WaitListModal email={emailValue} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </motion.section>
  );
};

export default BookHotelSection;
