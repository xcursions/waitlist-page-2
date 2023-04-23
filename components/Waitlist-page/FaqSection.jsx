import React from 'react'
import { faqs } from '../../utils/data'
import SingleFAQ from './SingleFAQ'

const FaqSection = () => {
  return (
    <section id='faq-section' className='mt-[200px] md:mt-[150px] duration-300 transition-all m-auto w-[90%] py-9 md:w-[70%]'>
      <h4 className='text-text-color font-bold text-2xl md:text-3xl'>Frequently asked questions</h4>
   <div className='py-8'>
    {faqs.map((faq) => (
     <SingleFAQ faq={faq} />
    ))}

   </div>
    </section>
  )
}

export default FaqSection