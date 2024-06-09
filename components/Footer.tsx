import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer flex justify-between items-center'>
            <div className="socials">
                <div className="logo mb-[25px]">
                    <Image src={'/images/logo.jpg'} width={100} height={50} alt='logo' />
                </div>
                <div className="intro mb-[25px]">Very different from others. <br />That's what i learned</div>
                <ul className="socials-list flex justify-start items-center gap-5">
                    <li className="item">
                        <Image src={'/images/facebook.png'} width={40} height={40} alt='fb' className='icon' />
                    </li>
                    <li className="item">
                        <Image src={'/images/twitter.png'} width={40} height={40} alt='tw' className='icon' />
                    </li>
                    <li className="item">
                        <Image src={'/images/instagram.png'} width={40} height={40} alt='ig' className='icon' />
                    </li>
                </ul>
            </div>
            <div className="company-section">
                <div className='title'>Company</div>
                <p className="content">About</p>
                <p className="content">Careers</p>
                <p className="content">Mobile</p>
            </div>
            <div className="contact-section">
                <div className='title'>Contact</div>
                <p className="content">FAQ</p>
                <p className="content">Press</p>
                <p className="content">Affiliate</p>
            </div>
            <div className="more-info-section">
                <div className='title'>More</div>
                <p className="content">Airline fees</p>
                <p className="content">Airline</p>
                <p className="content">LOW fare tips</p>
            </div>
            <div className="getapp-section">
                <div className='title'>Get App</div>
                <p className="content">IOS</p>
                <p className="content">Android</p>
            </div>
        </div>
    )
}

export default Footer