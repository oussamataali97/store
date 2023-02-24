import React from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
const Subheader = () => {
  return (
    <div className='hidden md:flex max-w-5xl mx-auto justify-between items-center text-[12px] py-1'>
        <ul className='flex space-x-4'>
            <a href="" className='hover:text-red-300'><li>Blog</li></a>
            <a href="" className='hover:text-red-300'><li>Featured Products</li></a>
            <a href="" className='hover:text-red-300'><li>Whitlist</li></a>
        </ul>
        <ul className='flex space-x-4'>
            <a href="" className='hover:text-red-300'><li>Sign up</li></a>
            <a href="" className='hover:text-red-300'><li>My Account</li></a>
            <a href="" className='hover:text-red-300'><li>Order tracking</li></a>
            <a href="" className='hover:text-red-300'><li className='flex items-center'>USD <MdOutlineKeyboardArrowDown/></li></a>
            <a href="" className='hover:text-red-300'><li className='flex items-center'>English <MdOutlineKeyboardArrowDown/></li></a>
        </ul>
    </div>
  )
}

export default Subheader