import Image from 'next/image'
import React from 'react'

const TopDestination = () => {
    return (
        <div className='top-destination-container mb-[70px] mx-[50px]'>
            <h2 className='top-destination-title mb-[50px]'>TOP DESTINATION</h2>
            <div className="country-filter flex justify-center items-center gap-8">
                <div className="country">
                    Italy
                </div>
                <div className="country">
                    England
                </div>
                <div className="country">
                    France
                </div>
                <div className="country">
                    Spain
                </div>
                <div className="country">
                    Bangkok
                </div>
                <div className="country">
                    Greenwich
                </div>
            </div>
            <div className='destination-list top-2-items flex flex-wrap justify-between items-center gap-6'>
                <div className="destination-item grow-[5] gap-5">
                    <Image
                        width={500} height={300}
                        src={'/images/top-des1.jpg'}
                        alt='destination'
                        className='destination-img' />
                </div>
                <div className="destination-item grow-[5] gap-5">
                    <Image
                        src={'/images/top-des2.jpg'}
                        width={500} height={300}
                        alt='destination'
                        className='destination-img' />
                </div>

            </div>
            <div className="destination-list top-3-items flex flex-wrap justify-between items-center gap-5">
                <div className="destination-item grow">
                    <Image
                        src={'/images/top-des3.jpg'}
                        width={500} height={300}
                        alt='destination'
                        className='destination-img' />
                </div>
                <div className="destination-item grow">
                    <Image
                        src={'/images/top-des4.jpg'}
                        width={500} height={300}
                        alt='destination'
                        className='destination-img' />
                </div>
                <div className="destination-item grow">
                    <Image
                        src={'/images/top-des5.jpg'}
                        width={500} height={300}
                        alt='destination'
                        className='destination-img' />
                </div>
            </div>
        </div>
    )
}

export default TopDestination