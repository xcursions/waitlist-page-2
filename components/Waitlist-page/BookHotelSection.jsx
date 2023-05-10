import React, { useState } from "react";
import Image from "next/image";
import TravelImage from "../../public/images/book-hotel.png";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WaitListModal from "../modals/NewWaitlist";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const container = {
  hidden: {
  },
  
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
const url = "https://xcursions.us21.list-manage.com/subscribe/post?u=ec111fee6499d391c81dd7914&amp;id=a539b502a7&amp;f_id=004286e1f0";
const BookHotelSection = () => {
 const [isOpen, setIsOpen] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
 const {
    loading,
    error,
    success,
    message,
    handleSubmit
  } = useMailChimpForm(url);

  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
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
      initial="hidden"
      whileInView={"show"}
      variants={container}
      viewport={{ once: true }}
      
      
      className="bg-gray-color  relative pb-12 mb-16"
    >
      <div className="m-auto w-[90%] flex gap-4 flex-col md:flex-row justify-between md:w-[70%] py-12">
        <div className="flex justify-center flex-col space-y-4">
          <motion.h4
          
            variants={fadeIn("down")}
            className="font-bold max-w-md leading-18 text-3xl  md:text-5xl text-center md:text-start"
          >
            Book Hotels Across the Globe
          </motion.h4>
          <motion.p
            variants={fadeIn("left")}
            className="max-w-lg text-[#2B2945] text-center md:text-justify leading-18"
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

      <div  id="join-waitlist" className="bg-brand-blue p-4  lg:p-12  absolute     rounded-md sm:left-[10%] left-4 right-4 sm:right-[10%] lg:left-[20%] lg:right-[20%] ">
        <div className="w-full items-center justify-center flex flex-col space-y-4">
        <h3 className="text-white text-center font-bold text-xl md:text-3xl">
          The Most Rewarding Way to Travel!
        </h3>
        <p className="text-white text-center text-sm">
          Join waitlist to gain early access when we launch the webapp.
        </p>
      <div 
      className="">
         <form 
         
         onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(fields);
          
          if(!loading){
            setIsOpen(true)
          }
        }}
         className="flex md:flex-row  items-center max-w-5xl justify-center flex-col gap-3">
          
          <input
           className="py-3 max-w-lg w-[300px] md:w-[390px] rounded-md px-2"
                type="text"
                name=""
                id="EMAIL"
                placeholder="Enter email address"
                value={fields.EMAIL}
                onChange={handleFieldChange}
          />
          <button 
          // onClick={openModal} 
          className="border-white border-2 text-white px-7 rounded-md py-3 text-center">
            {loading ? "Loading" : "Join Waitlist"}
          </button>
          
        </form>
        {error && <div className="text-white text-sm">{message}</div>}
      </div>
        </div>
        
          
         <WaitListModal email={fields.EMAIL} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </motion.section>

  );
};

export default BookHotelSection;
