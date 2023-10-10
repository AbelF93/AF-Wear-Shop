"use client"

import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'

import React from 'react'
import { CustomButton } from '.'

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {}
    
    return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && ( 
            <CustomButton
                title="Show More"
                btnType='button'
                containerStyles='bg-white hover:bg-primary-blue rounded-md text-blue-600 hover:text-white'
                handleClick={handleNavigation}
            />
        )}
    
    </div>
  )
}

export default ShowMore