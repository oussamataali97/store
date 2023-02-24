import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Search = () => {



  return (
    <div className='bg-stone-500 hidden md:block'>
        <div className="max-w-5xl mx-auto flex justify-between items-center ">
            <div className=" flex-[0_2_auto] text-white w-1/4 bg-red-400 mt-5 px-9 p-3 rounded-t-md   ">
                <p className='font-[500]  '>All departements</p>
                <p className=' text-[10px] '>20218 Total Products</p>
            </div>
            <div className=" flex-[0_2_auto] flex items-center relative ">

                 <input type="text" className='text-gray-700 p-2 w-96 rounded-l-md px-9' placeholder='search here ...' />
                 <AiOutlineSearch size={20} className='text-gray-700   absolute top-[10px] left-[10px]'/>
                 <button className='bg-red-400 hover:bg-red-700 rounded-r-md px-5 text-white p-2'>Search</button>
            </div>

        </div>
    </div>
  )
}

export default Search