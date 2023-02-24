import React from 'react'
import hurley from './../assets/brands/hurley.png'
import {BsInstagram,BsTwitter,BsYoutube,BsFacebook} from 'react-icons/bs'
const Footer2 = () => {
    return (
        <div className="bg-gray-100">
            <div className='max-w-5xl mx-auto py-10 flex justify-center items-center flex-col'>
                <img src={hurley} alt="" />
                <div className="flex space-x-6">
                    <BsInstagram size={20}/>
                    <BsYoutube size={20}/>
                    <BsTwitter size={20}/>
                    <BsFacebook size={20}/>

                </div>
                <p className='text-neutral-600 mt-2'>Copyright all right reserved</p>
            </div>
        </div>
    )
}

export default Footer2