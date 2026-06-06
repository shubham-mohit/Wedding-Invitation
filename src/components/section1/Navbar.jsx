import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex items-center justify-between py-4 px-45' >
                <h4 className='bg-black text-white px-9 py-3 rounded-full uppercase tracking-wider'> Targer Audience</h4>
                <button className='bg-gray-200 hover:bg-gray-300 px-9 py-3 uppercase rounded-full tracking-wider cursor-pointer'>Digital Banking platform</button>
            </div>
        </div>
    )
}

export default Navbar
