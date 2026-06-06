import React from 'react'

const ImageContainer = () => {
  return (
    <div className='w-300 h-150  flex items-center gap-15'>

      <div className='h-150 w-80 rounded-4xl'>
         <img
          src='images/img1.jpg'
          alt='Image 1'
          className='w-full h-full object-cover rounded-4xl'
        />

      </div>

      <div className='h-150 w-80 rounded-4xl'>
         <img
          src='images/img2.jpg'
          alt='Image 2'
          className='w-full h-full object-cover rounded-4xl'
        />

      </div>

      <div className='h-150 w-80 rounded-4xl'>
         <img
          src='images/img3.jpg'
          alt='Image 3'
          className='w-full h-full object-cover rounded-4xl'
        />

      </div>

    </div>
  )
}
export default ImageContainer
