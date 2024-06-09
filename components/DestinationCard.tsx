import { DestinationProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const DestinationCard = ({ imgUrl, location, duration, price }: DestinationProps) => {
    return (
        <div
            className="category-item flex-1 flex flex-col justify-center items-center px-[25px]">
            <Image src={imgUrl} alt='image1'
                width={300}
                height={300}
                className='item-img flex-1' />
            <p className='destination-location inline-block h-[50px] leading-[50px]'>{location}</p>
            <div className='destination-info flex justify-between items-center flex-1'>
                <span className='flex inline-block h-[50px] leading-[50px] font-bold text-cyan-950'>{price}</span>
                <span className='flex inline-block h-[50px] leading-[50px]'><Image src={'/images/arrow45.svg'} width={20} height={20} alt='heart' />{duration} days trip</span>
            </div>
        </div>
    )
}

export default DestinationCard