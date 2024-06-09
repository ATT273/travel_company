import Image from 'next/image'
import React from 'react'

const Feedbacks = () => {
    return (
        <div className='feedbacks-container flex flex-1 justify-between mb-[150px]'>
            <div className="title-container">
                <div className="small-title">Dont take our words</div>
                <div className="big-title">Listen from our <br /> Happy clients</div>
                <div className="group-btn flex justify-start items-center gap-5">
                    <div className="btn-prev">
                        <Image
                            src={'/images/left-arrow.svg'} width={40} height={40} alt='quote' className='arrow-btn' />
                    </div>
                    <div className="btn-next">
                        <Image
                            src={'/images/right-arrow.svg'} width={40} height={40} alt='quote' className='arrow-btn active' />
                    </div>
                </div>
            </div>
            <div className="client-feedback">
                <div className="feedback mb-[25px]">
                    <div className="quote-icon flex justify-center items-center">
                        <Image
                            src={'/images/solid-quote.svg'} width={50} height={50} alt='quote' />
                    </div>
                    <p className='content'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="author flex justify-start items-center">
                    <div className="client-picture mr-[15px]">
                        <Image
                            src={'/images/client.jpg'}
                            width={120} height={120}
                            alt='client'
                            className='avatar' />
                    </div>
                    <div className="info">
                        <div className="name">Kim Hana</div>
                        <div className="job">Company Owner</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedbacks