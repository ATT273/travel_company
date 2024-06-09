import React from 'react'
import Searchbox from './Searchbox'
import Calendarbox from './Calendarbox'
import Image from 'next/image'

const SearchboxGroup = () => {
    return (
        <div className='searchbox-group-container flex justify-around items-center'>
            <Image src={'/images/globe.svg'} width={50} height={50} alt='globe' />
            <Searchbox />
            <div className='separate-line'></div>
            <Calendarbox />
        </div>
    )
}

export default SearchboxGroup