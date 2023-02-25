import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
const Newsletter = () => {
    return (
        <div className="containe bg-black w-full text-white py-10 px-2">
            <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-5 md:px-0'>
                <div className="left text-center md:text-left">
                    <p className='text-[25px] font-bold'>Join Our Newsletter</p>
                    <p className='mt-2 text-gray-400'>Get email update about our latest shop and <span className='text-red-400'>special offers</span></p>
                </div>
                <div className="right relative mt-5 md:mt-0">
                <input type="text" className='text-gray-700 p-2 md:w-96  rounded-l-md px-3 md:px-9' placeholder='Your email adresse ...' />
                 <AiOutlineMail size={20} className='text-gray-700 hidden md:block  absolute top-[10px] left-[5px] md:left-[10px]'/>
                 <button className='bg-red-400 hover:bg-red-700 rounded-r-md px-5 text-white p-2'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter