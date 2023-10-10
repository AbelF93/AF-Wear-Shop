"use client"

import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <section className="hero">
        <div className="flex-1 pt-40 padding-x">
            <h1 className="hero__title">
                Find your <span className='text-cyan-500'>DREAM CAR</span>
                <br />- Simply & Swiftly 
            </h1>
            <p className="hero__subtitle">
                Organise your journey with our effective 
                rent method, booking experience had never
                 been so seemless. 
            </p>
            <CustomButton 
             title="View Cars"
             containerStyles="bg-cyan-500
             hover:bg-cyan-300 text-white hover:text-purple-500
              font-bold hover:font-bolder text-style mt-7 p-4 rounded-md"
              handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
            <Image src="/hero.png" alt="hero"
                fill className="object-contain"/>
                <div className="hero__image-overlay" />
            </div>
        </div>
    </section>
  )
}

export default Hero