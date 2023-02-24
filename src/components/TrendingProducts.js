import React from 'react'
import appareil4 from './../assets/products/apparel4.jpg'
import electronic1 from './../assets/products/electronic3.jpg'
import home1 from './../assets/products/home1.jpg'
import shoe1 from './../assets/products/shoe1-1.jpg'
import shoe2 from './../assets/products/shoe2.jpg'
import apparel2 from './../assets/products/apparel2.jpg'
import electronic2 from './../assets/products/electronic4.jpg'
import home2 from './../assets/products/home2.jpg'

import { AiFillStar } from 'react-icons/ai'
const TrendingProducts = () => {
    return (
        <div className='max-w-5xl mx-auto mt-8'>
            <p className='titles font-bold text 3xl'>Trending Products</p>
            <hr className='py-2' />
            <div className="grid grid-cols-1 md:grid-cols-6  md:px-0 ">
                <div className="col-span-2 my-3 md:my-0 mx-12 md:mx-0 border-black border-2 py-6 px-6 flex flex-col justify-center items-center">
                    <p className='uppercase font-bold'>offer ends in </p>
                    <div className="timer flex  gap-1 items-center text-[15px] mt-2  ">
                        <p className='bg-stone-200 p-2'>01</p>:
                        <p className='bg-stone-200 p-2'>15</p>:
                        <p className='bg-stone-200 p-2'>27</p>:
                        <p className='bg-stone-200 p-2'>60</p>
                    </div>
                    <img src={appareil4} alt="" className='w-72 h-80 mt-5 object-cover' />
                    <div className="stars flex items-center self-start mt-3">
                        <AiFillStar color='orange' />
                        <AiFillStar color='orange' />
                        <AiFillStar color='orange' />
                        <AiFillStar color='orange' />
                        <AiFillStar color='orange' />
                        <p className='text-[10px] text-gray-500 font-light'>(2,500)</p>

                    </div>
                    <p className='font-bold mt-3 self-start'>Happy Salled Women Winter Boho Floral</p>
                    <p className='text-red-400 font-bold self-start mt-3'>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>
                    <div className="flex justify-between self-start w-full text-[10px] mt-4">
                        <p>stock <span className='font-bold'> :107</span></p>
                        <p>sold  <span className='font-bold'>:2002</span></p>

                    </div>
                    <div className="w-full mt-1 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <div class="bg-blue-600 h-1.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                </div>

            {/* producs */}

                <div className="col-span-4 md:px-2 mx-6 md:mx-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="card flex items-start gap-2  ">
                        <img src={home1} alt="" className='w-36 h-36 object-cover' />
                        <div className="infos flex flex-col h-36 justify-between">
                            <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                            <div className="stars flex items-center self-start ">
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                            </div>
                            <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>
                        <div className="end">
                        <p className='text-[10px] text-gray-500 font-light'>sold  <span className='font-bold'>:2002</span></p>
                            <p className='text-[10px] text-gray-500 font-light'>free shipping</p>
                        </div>


                        </div>
                    </div>
                    <div className="card flex items-start gap-2  ">
                        <img src={shoe2} alt="" className='w-36 h-36 object-cover' />
                        <div className="infos flex flex-col h-36 justify-between">
                            <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                            <div className="stars flex items-center self-start ">
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                            </div>
                            <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>
                        <div className="end">
                        <p className='text-[10px] text-gray-500 font-light'>sold  <span className='font-bold'>:2002</span></p>
                            <p className='text-[10px] text-gray-500 font-light'>free shipping</p>
                        </div>


                        </div>
                    </div>
                    <div className="card flex items-start gap-2  ">
                        <img src={home2} alt="" className='w-36 h-36 object-cover' />
                        <div className="infos flex flex-col h-36 justify-between">
                            <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                            <div className="stars flex items-center self-start ">
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                            </div>
                            <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>
                        <div className="end">
                        <p className='text-[10px] text-gray-500 font-light'>sold  <span className='font-bold'>:2002</span></p>
                            <p className='text-[10px] text-gray-500 font-light'>free shipping</p>
                        </div>


                        </div>
                    </div>
                    <div className="card flex items-start gap-2  ">
                        <img src={apparel2} alt="" className='w-36 h-36 object-cover' />
                        <div className="infos flex flex-col h-36 justify-between">
                            <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                            <div className="stars flex items-center self-start ">
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                            </div>
                            <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>
                        <div className="end">
                        <p className='text-[10px] text-gray-500 font-light'>sold  <span className='font-bold'>:2002</span></p>
                            <p className='text-[10px] text-gray-500 font-light'>free shipping</p>
                        </div>


                        </div>
                    </div>
                    <div className="card flex items-start gap-2  ">
                        <img src={electronic1} alt="" className='w-36 h-36 object-cover' />
                        <div className="infos flex flex-col h-36 justify-between">
                            <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                            <div className="stars flex items-center self-start ">
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                            </div>
                            <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>
                        <div className="end">
                        <p className='text-[10px] text-gray-500 font-light'>sold  <span className='font-bold'>:2002</span></p>
                            <p className='text-[10px] text-gray-500 font-light'>free shipping</p>
                        </div>


                        </div>
                    </div>
                    <div className="card flex items-start gap-2  ">
                        <img src={shoe1} alt="" className='w-36 h-36 object-cover' />
                        <div className="infos flex flex-col h-36 justify-between">
                            <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                            <div className="stars flex items-center self-start ">
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                            </div>
                            <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>
                        <div className="end">
                        <p className='text-[10px] text-gray-500 font-light'>sold  <span className='font-bold'>:2002</span></p>
                            <p className='text-[10px] text-gray-500 font-light'>free shipping</p>
                        </div>


                        </div>
                    </div>
                    <div className="card flex items-start gap-2  ">
                        <img src={electronic2} alt="" className='w-36 h-36 object-cover' />
                        <div className="infos flex flex-col h-36 justify-between">
                            <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                            <div className="stars flex items-center self-start ">
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                            </div>
                            <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>
                        <div className="end">
                        <p className='text-[10px] text-gray-500 font-light'>sold  <span className='font-bold'>:2002</span></p>
                            <p className='text-[10px] text-gray-500 font-light'>free shipping</p>
                        </div>


                        </div>
                    </div>
                           <div className="card flex items-start gap-2  ">
                        <img src={appareil4} alt="" className='w-36 h-36 object-cover' />
                        <div className="infos flex flex-col h-36 justify-between">
                            <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                            <div className="stars flex items-center self-start ">
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                                <AiFillStar color='orange' size={15} />
                            </div>
                            <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>
                        <div className="end">
                        <p className='text-[10px] text-gray-500 font-light'>sold  <span className='font-bold'>:2002</span></p>
                            <p className='text-[10px] text-gray-500 font-light'>free shipping</p>
                        </div>


                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default TrendingProducts