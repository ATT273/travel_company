import Image from 'next/image'
import React from 'react'
import StoryCard from './StoryCard'

const Stories = () => {
    return (
        <div className='story-container flex flex-1 justify-between items-center px-[100px] mb-[150px]'>
            <Image src={'/images/story_pic.png'} width={700} height={700} alt='story' className='gap-5' />
            <div className='info-container pl-[100px] py-[30px]'>
                <h2 className='section-title mb-7'>OUR STORIES HAVE <br />ADVENTURES</h2>
                <div className="card-list flex flex-wrap gap-9">
                    <StoryCard
                        number={'25+'}
                        title={'Years of experince'}
                        imgUrl={'/images/lightning.svg'} />
                    <StoryCard
                        number={'10,000+'}
                        title={'Customers'}
                        imgUrl={'/images/group.svg'} />
                    <StoryCard
                        number={'22+'}
                        title={'Awards winning'}
                        imgUrl={'/images/award.svg'} />
                    <StoryCard
                        number={'15K'}
                        title={'Success journey'}
                        imgUrl={'/images/checkboxes.svg'} />
                </div>

            </div>
        </div>
    )
}

export default Stories