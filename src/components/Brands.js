import React from 'react'
import { asus,dng,hurley,oppo,samsung,zara} from '../assets/brands/brands'
const Brands = () => {
  return (
    <div className='brands max-w-5xl mx-auto space-x-3 md:space-x-0 flex justify-center md:justify-between mt-5 items-center px-3 flex-wrap md:flex-nowrap'>
        <img src={asus} alt="" />
        <img src={dng} alt="" />
        <img src={hurley} alt="" />
        <img src={oppo} alt="" />
        <img src={samsung} alt="" />
        <img src={zara} alt="" />
    </div>
  )
}

export default Brands