import { CategoryProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const CategoryCard = ({ imgUrl, location, like }: CategoryProps) => {
    return (
        <div
            className="category-item flex-1 flex flex-col justify-center items-center px-[25px]">
            <Image src={imgUrl} alt='image1'
                width={300}
                height={300}
                objectFit='cover'
                className='item-img flex-1' />
            <div className='item-info flex justify-between items-center flex-1'>
                <span className='flex inline-block h-[50px] leading-[50px]'><Image src={'/images/location.svg'} width={20} height={20} alt='location' />{location}</span>
                <span className='flex inline-block h-[50px] leading-[50px]'><Image src={'/images/heart.svg'} width={20} height={20} alt='heart' />{like}</span>
            </div>
        </div>
    )
}

export default CategoryCard