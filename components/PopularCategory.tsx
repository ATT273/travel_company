import Image from 'next/image'
import React from 'react'
import CategoryCard from './CategoryCard'

const PopularCategory = () => {
    return (
        <div className='popular-container mb-[150px]'>
            <h2 className='popular-title'>POPULAR CATEGORY</h2>
            <p className='mb-[150px] w-[50%] m-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div className='category-list flex justify-between items-center mb-[50px]'>
                <CategoryCard
                    imgUrl='/images/pop1.jpg'
                    location='Bora Bora Island'
                    like='4.8k' />
                <CategoryCard
                    imgUrl='/images/pop2.jpg'
                    location='Bora Bora Island'
                    like='5.8k' />
                <CategoryCard
                    imgUrl='/images/pop3.jpg'
                    location='Bora Bora Island'
                    like='6.2k' />
                <CategoryCard
                    imgUrl='/images/pop4.jpg'
                    location='Bora Bora Island'
                    like='8.8k' />
            </div>
            <div className='btn-container'>
                <button className='viewmore-btn flex items-center justify-center'>
                    View more
                    <span className='ml-[15px]'><Image src={'/images/arrow_right.svg'} width={20} height={20} alt='arrow' /></span>
                </button>
            </div>
        </div>
    )
}

export default PopularCategory