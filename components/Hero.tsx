import Image from 'next/image'
import React from 'react'
import SearchboxGroup from './SearchboxGroup'

const Hero = () => {
    return (
        <div className="hero-container">
            <SearchboxGroup />
            <Image src={'/images/travel.jpg'} alt='hero-img'
                className='hero-img'
                fill />
            <div className='social-group-container flex justify-between w-[100px]'>
                <h3 className='pt-[4px]'>Follow us!</h3>
                <div className='social-list-container flex justify-between items-center'>
                    <div className='item'>
                        <a href='#'>
                            <Image src={'/images/facebook.png'} width={20} height={20} alt='fb' />
                        </a>
                    </div>
                    <div className='item'>
                        <a href="#">
                            <Image src={'/images/twitter.png'} width={20} height={20} alt='tw' />
                        </a>
                    </div>
                    <div className='item'>
                        <a href="#">
                            <Image src={'/images/instagram.png'} width={20} height={20} alt='ig' />
                        </a>
                    </div>
                    <div className='item'>
                        <a href="#">
                            <Image src={'/images/facebook.png'} width={20} height={20} alt='fb' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero