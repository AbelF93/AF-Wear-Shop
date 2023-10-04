"use client"

import { CarProps } from "@/types";
import  CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import {caculateCarRent} from "@/utils";
import Image from "next/image";
import { useState } from "react";

interface carCardProps {
    car: CarProps;
}


const CarCard = ({ car }: carCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const cityMpg = city_mpg;
  const kmL = Math.round((cityMpg * 1.6)/4);
  
const carRent = caculateCarRent(city_mpg, year);

const [isOpen, setIsOpen] = useState(false);

    return (
    <article className="car-card group shadow-lg">
        <div className="card-card__content flex">
            <h2 className="car-card__content-title">
                <span className="bg-primary-blue rounded-md text-white p-2 ">{make}:</span>
                <span className="overflow-x-auto"> {model}</span> 
            </h2>
        </div>
            <p className="flex mt-5 text-[30px] font-semibold">
                <span className="self-start text-[14px]">
                    €
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>

            <div className="realtive w-full h-40 my-3 
                 object-contain">
                <Image src="/hero.png" 
                alt="car_model" width={400} height={600} className="
                object-contain"/>
            </div>

            <div className="relative flex w-full mt-3">
                <div className="flex group-hover:invisible w-full 
                justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" width={20} height={20} alt="steering-wheel"/>
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" width={20} height={20} alt="tire"/>
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" width={20} height={20} alt="gas"/>
                        <p className="text-[14px]">
                            {kmL} km/L
                        </p>
                </div>
            </div>

            <div className="car-card__btn-container">
                <CustomButton 
                 title="Show Details"
                 containerStyles="w-full py-[18px] rounded-md 
                 bg-primary-blue"
                 textStyles="text-white text-[14px] font-bold"
                 icon="/right-arrow.svg"
                 handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
          <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </article>
  )
}

export default CarCard