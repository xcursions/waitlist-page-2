import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
const HeroSection = () => {
  return (
    <section
      className="bg-hero  bg-cover bg-center lg:h-[808px]
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
            <h3 className="font-bold text-white text-center lg:text-start text-5xl md:text-6xl lg:text-8xl max-w-[900px]">
              Discover A Better Way To Travel
            </h3>
            <p className="text-white text-xl text-center lg:text-start max-w-[700px]">Find your dream holiday destinations, get great hotel deals, and save for your next travel, all in one space</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
