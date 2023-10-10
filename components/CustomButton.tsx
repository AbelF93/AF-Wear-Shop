"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, icon, isDisable}: CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {icon && (
          <div className="relative w-6 h-6">
            <Image 
              src={icon}
              alt="icon"
              fill
              className="object-contain" 
            />
          </div>
        )}
        </button>
  )
}

export default CustomButton
