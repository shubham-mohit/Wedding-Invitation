import React from 'react'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

const Center = () => {
    return (
        <div className='flex items-center h-full gap-40'>
            <LeftText />
            <ImageContainer />
        </div>
    )
}

export default Center
