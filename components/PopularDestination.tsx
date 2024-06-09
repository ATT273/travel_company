import React from 'react'
import DestinationCard from './DestinationCard'
import Image from 'next/image'

const PopularDestination = () => {
    return (
        <div className='popular-destination mb-[150px] mx-[50px]'>
            <h2 className='destination-title ml-[25px]'>POPULAR DESTIONATION</h2>
            <p className='mb-[150px] w-[50%] ml-[25px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className='destination-list flex justify-between items-center mb-[50px]'>
                <DestinationCard
                    imgUrl='/images/des1.jpg'
                    location='Banff National Park, Canada'
                    price='$299'
                    duration='7' />
                <DestinationCard
                    imgUrl='/images/des2.jpg'
                    location='Serengeti National Park, Tazmania'
                    price='$290'
                    duration='10' />
                <DestinationCard
                    imgUrl='/images/des3.jpg'
                    location='Bora Bora, French Polynesia'
                    price='$250'
                    duration='5' />
                <DestinationCard
                    imgUrl='/images/des1.jpg'
                    location='Bora Bora Island'
                    price='$399'
                    duration='12' />
            </div>
        </div>
    )
}

export default PopularDestination