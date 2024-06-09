import Image from 'next/image'
import React from 'react'
import { StoryCardProps } from '@/types'

const StoryCard = ({ number, title, imgUrl }: StoryCardProps) => {
  return (
    <div className="card flex items-center">
      <div className='card-icon mr-[30px]'>
        <Image src={imgUrl} width={50} height={50} alt='lightning' />
      </div>
      <div className='info-container'>
        <p className="number">{number}</p>
        <p className="title">{title}</p>
      </div>
    </div>
  )
}

export default StoryCard