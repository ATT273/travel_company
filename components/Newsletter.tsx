import React from 'react'

const Newsletter = () => {
    return (
        <div className='newsletter-container flex justify-center items-center gap-6 mb-[150px]'>
            <div className="slogan flex flex-col justify-center grow">
                <div className="big-text">Discover beautiful destination</div>
                <div className="small-text mb-[25px]">Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry.</div>
                <button className='see-more-btn'>See more</button>
            </div>
            <div className="newsletter flex flex-col justify-center grow">
                <div className="small-text">Explore</div>
                <div className="big-text mb-[15px]">Subcribe Newsletter</div>
                <div className="contact-form flex gap-5">
                    <input type="text" name='email' placeholder='Email' className='p-[10px] rounded-[20px]' />
                    <button className="subcribe-btn">Subcribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter