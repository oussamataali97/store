import React, { useState } from 'react'
import logo from './../assets/brands/hurley.png'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
import  {HiMenuAlt1} from 'react-icons/hi'
const Header = () => {
  const [toggle,setToogle]=useState(false)
  const handleClick =()=>{
    setToogle(!toggle)
  }
  return (
    <>
    <div className='flex ease-linear duration-300 z-[50] max-w-5xl mx-auto font-[500] px-3 md:px-0 justify-between items-center text-[15px] relative'>

      <ul className='flex items-center md:hidden'>
      <p onClick={handleClick} className='hover:text-red-300'><HiMenuAlt1 size={30}/></p>

      <a href="" className='hover:text-red-300'><li><img src={logo} alt="" /></li></a>

      </ul>

    <ul className='hidden md:flex space-x-4 items-center'>
    <a href="" className='hover:text-red-300 hidden md:block'><li><img src={logo} alt="" /></li></a>

    <a href="" className='hover:text-red-300'><li>Home</li></a>
        <a href="" className='hover:text-red-300'><li>Shop</li></a>
        <a href="" className='hover:text-red-300'><li className='flex items-center'>Women <MdOutlineKeyboardArrowDown/></li></a>
        <a href="" className='hover:text-red-300'><li>Men</li></a>
        <a href="" className='hover:text-red-300'><li className='relative'>Sports <span className='bg-red-400 text-white absolute top-[-10px] right-[-25px] px-1 text-[10px] '>NEW</span></li></a>


    </ul>
    <ul className='flex space-x-4 items-center'>
       <a href="" className='hover:text-red-300'> <li className='relative'><AiOutlineHeart size={25}/><span className='bg-black text-white rounded-full absolute flex justify-center items-center  top-[-5px] text-[13px] w-4 h-4 right-[-5px]'>0</span></li></a>
       <a href="" className='hover:text-red-300'> <li className='relative'><AiOutlineShoppingCart size={25}/><span className='bg-black text-white rounded-full absolute flex justify-center items-center  top-[-5px] text-[13px] w-4 h-4 right-[-5px] '>0</span></li></a>
        <li className='flex flex-col'><span className='text-[10px]'>Total</span> $0,00</li>
    </ul>
</div>

  <ul className={ toggle ? ' flex flex-col md:hidden absolute z-[20] h-screen left-[0px] w-72 bg-white  ease-in-out duration-500 ': 'flex flex-col md:hidden space-y-4 items-center w-full ease-linear duration-300 absolute  -left-[90rem]'}>
    <a href="" className='hover:text-red-300 hidden md:block'><li><img src={logo} alt="" /></li></a>

    <a href="" className='hover:text-red-300 border-b-[1px] py-3 px-2 '><li>Home</li></a>
        <a href="" className='hover:text-red-300 border-b-[1px] py-3 px-2 '><li>Shop</li></a>
        <a href="" className='hover:text-red-300 border-b-[1px] py-3 px-2 '><li className='flex items-center'>Women</li></a>
        <a href="" className='hover:text-red-300 border-b-[1px] py-3 px-2 '><li>Men</li></a>
        <a href="" className='hover:text-red-300 border-b-[1px] py-3 px-2 '><li className='relative'>Sports <span className='bg-red-400 text-white absolute top-[-6px] px-1 text-[10px] '>NEW</span></li></a>


    </ul>


</>
  )
}

export default Header