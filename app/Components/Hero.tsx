import React from 'react'
import Image from 'next/image';
import herobanner from '@/public/image/hero.png'
const Hero = () => {
  return (
    <div>
    <section className="text-[#185519] body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#185519]">
          Fuel Your Body,
            <br className="hidden lg:inline-block" />Nourish Your Life
          </h1>
          <p className="mb-8 leading-relaxed">
          Discover expert nutrition and dietetics advice tailored to your unique needs. From balanced meal plans to science-backed tips, we help you achieve optimal health and well-being—one bite at a time!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
         <Image
              src={herobanner}
              alt='herobanner'
         />
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero
