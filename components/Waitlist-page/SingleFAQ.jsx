import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const SingleFAQ = ({faq}) => {
    const [toggleFaq, setToggleFaq] = useState(false)
  return (
    <div onClick={() => setToggleFaq(!toggleFaq)} className=' cursor-pointer relative duration-300 '>
          <div className='flex items-center rounded-md my-3 px-3 py-5 bg-[#E8EDE9] justify-between' >
          <h3 className='text-text-color text-lg font-bold'>{faq.question}</h3>
            {toggleFaq ? <AiOutlineMinus className='text-text-color font-bold text-xl' /> : <AiOutlinePlus className='text-text-color font-bold text-xl' /> }
          </div>
          {
            toggleFaq && (<div className='absolut bg-white'>
                <p className='leading-18 text-justify'>{faq.answer}</p>
                </div>
            )
          }
      </div>
  )
}

export default SingleFAQ