import React from 'react'

const MobileNav = ({setToggleNav, toggleNav}) => {
  return (
    <div  className='absolute p-9 bg-white rounded-md z-50 md:hidden right-0 top-[80%]'>
         <ul className="text-brand-blue justify-center space-y-5 md:flex gap-7 items-center">
          <li onClick={() => setToggleNav(!toggleNav)} className="hover:border-b-2 border-brand-blue">
              <a href="#about-section">About Us</a>
            </li>
            <li onClick={() => setToggleNav(!toggleNav)} className="hover:border-b-2 border-brand-blue">
              <a href="#faq-section">FAQs</a>
              
            </li>

            
          </ul>
    </div>
  )
}

export default MobileNav