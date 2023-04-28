import React from 'react'
import Image from "next/image";
import Logo from "../../public/images/logo-gray.png";
import { AiFillMail } from 'react-icons/ai';
import { LinkedinSVG } from '../../public/images/linkedin';
import { InstagramIcon } from '../../public/images/instagram';
import { TwitterIcon } from '../../public/images/twitter';
const FooterSection = () => {
  return (
    <footer className='bg-gray-color '>
        <div className='m-auto w-[90%] flex md:flex-row flex-col justify-evenly gap-5   md:[80%] lg:[70%] py-8'>
        <div className='flex w-full flex-col gap-4'>
            <Image
              width={150}
              height={150}
              src={Logo}
              alt="logo"
              className="z-50"
            />
            <p className='text-justify text-text-color font-medium'>At Xcursions, we are removing barriers to having a premium travel experience. Our travel processes are timely, and are handled by experts, to give you the experience you truly deserve. Travelling just got easier!</p>
          </div>

          <div className='w-full flex sm:hidden md:hidden lg:flex items-center justify-center'>
            <div className='md:w-[2px] w-full h-[3px]  md:h-full bg-brand-blue'>

            </div>
          </div>
          <div className='flex w-full flex-col space-y-3'>
                <h5 className='font-bold'>Contact Info</h5>
                <div className="icons flex gap-2">
                    <LinkedinSVG />
                    <TwitterIcon />
                    <InstagramIcon />

                </div>
                <div className="mails flex lg:flex-row flex-col items-start lg:items-center gap-2">
                <div className='flex gap-2  items-center'>
                    <AiFillMail />
                    <p>admin@xcursions.ng</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiFillMail />
                    <p>xcursionsng@gmail.com</p>
                </div>
                </div>
                <div>
                    <p>+234 816 827 7417</p>
                </div>

          </div>
        </div>
        <div className='flex items-center justify-center text-black py-3'>
            <p>Copyright&#169;2023 | All rights reserved.</p>
        </div>
    </footer>
  )
}

export default FooterSection