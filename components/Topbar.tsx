import React from 'react'

const Topbar = () => {
    return (
        <div className='topbar-container'>
            <ul className='topbar-list flex justify-center items-center'>
                <li className='list-item mr-[25px]'>Home</li>
                <li className='list-item mr-[25px]'>About Us</li>
                <li className='list-item mr-[25px]'>Destination</li>
                <li className='list-item mr-[25px]'>Tour</li>
                <li className='list-item mr-[25px]'>Blog</li>
            </ul>
            <button className='booking-btn'>BOOK NOW</button>
        </div>
    )
}

export default Topbar