import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import Image from "next/image"
import 'react-alice-carousel/lib/alice-carousel.css';
import { heros } from '../../utils/data';
const Carousel = () => {
    const responsive = {
        0: {
          items: 1,
        },
        512: {
          items: 1,
        },
      };

      const items = heros.map((partner) => (
        <div className="flex  w-full h-full items-center  cursor-pointer justify-center">
          <Image width={0}  className='h-full' height={0} src={partner.Hero} alt="partner icon" />
        
          
        </div>
      ));
  return (
    <div className='hidden lg:inline-block absolute top-0 bottom-0 left-0 right-0 w-full h-full  -z-[1000] '>
        <AliceCarousel
        // mouseTracking
        infinite
        autoPlayInterval={5000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        className=""
        autoPlay
      />
    </div>
  )
}

export default Carousel