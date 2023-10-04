"use client"

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <section className="hero">
        <div className="flex-1 pt-40 padding-x">
            <h1 className="hero__title">
                Find your DREAM CAR
                <br />|| Simply & Swiftly 
            </h1>
            <p className="hero__subtitlte">
                Organise your journey with our effective 
                rent method, booking experience had never
                 been so seemless. 
            </p>
            <CustomButton 
             title="For More Info..."
             containerStyles="bg-purple-500
             hover:bg-purple-700 hover:text-white
              font-bold text-style mt-7 p-4 rounded-md"
              handleClick={handleScroll}
            />
        </div>
    </section>
  )
}

export default Hero