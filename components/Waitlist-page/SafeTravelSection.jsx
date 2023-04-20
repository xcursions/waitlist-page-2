import React from "react";
import Image from "next/image";
import TravelImage from "../../public/images/travel.png"
const SafeTravelSection = () => {
  return (
    <section className="bg-gray-color ">
     <div className="m-auto w-[90%] flex flex-col md:flex-row justify-between md:w-[80%] py-8">
     <div className="flex justify-center flex-col space-y-4">
        <h4 className="font-bold max-w-sm leading-18 text-3xl  md:text-5xl text-center md:text-start">Save & Travel On The Go</h4>
        <p  className="max-w-lg text-[#2B2945] text-justify leading-18">Automate your savings & reach your travel goals faster with our ‘pay small small’ plan. No Charges. No Penalties. Absolutely Free.</p>
      </div>

      <div>
        <Image
            width={550}
            height={550}
            objectFit="cover"
            src={TravelImage}
            alt=""
        />
      </div>
     </div>
    </section>
  );
};

export default SafeTravelSection;
