import React from 'react'
import appareil4 from './../assets/products/apparel4.jpg'
import electronic1 from './../assets/products/electronic1.jpg'
import home1 from './../assets/products/home1.jpg'
import shoe1 from './../assets/products/shoe1-1.jpg'
import shoe2 from './../assets/products/shoe2.jpg'
import apparel2 from './../assets/products/apparel2.jpg'
import electronic2 from './../assets/products/electronic3.jpg'
import home2 from './../assets/products/home2.jpg'
import { AiFillStar } from 'react-icons/ai'
import banner1 from './../assets/banner/banner1.jpg'
import banner2 from './../assets/banner/banner2.jpg'
import procat1 from './../assets/banner/procat1.jpg'
import procat2 from './../assets/banner/procat2.jpg'
import procat3 from './../assets/banner/procat3.jpg'
import {BsArrowRightShort} from 'react-icons/bs'




const FeaturedProducts = () => {
    return (
        <div className='max-w-5xl mx-auto mt-8 my-5'>
            <p className='titles font-bold text 3xl'>Featured Products</p>
            <hr className='py-2' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 px-5 md:px-3 lg:px-0">
                <div className="card flex flex-col shadow-lg   ">
                    <img src={shoe1} alt="" className='w-full h-[300px] object-cover ' />
                    <div className="infos flex flex-col h-36 justify-around px-3">
                        <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                        <div className="stars flex items-center self-start ">
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                        </div>
                        <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>


                    </div>
                </div>
                <div className="card flex flex-col shadow-lg   ">
                    <img src={apparel2} alt="" className='w-full h-[300px] object-cover ' />
                    <div className="infos flex flex-col h-36 justify-around px-3">
                        <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                        <div className="stars flex items-center self-start ">
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                        </div>
                        <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>


                    </div>
                </div>
                <div className="card flex flex-col shadow-lg   ">
                    <img src={home2} alt="" className='w-full h-[300px] object-cover ' />
                    <div className="infos flex flex-col h-36 justify-around px-3">
                        <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                        <div className="stars flex items-center self-start ">
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                        </div>
                        <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>


                    </div>
                </div>
                <div className="card flex flex-col shadow-lg   ">
                    <img src={electronic1} alt="" className='w-full h-[300px] object-cover ' />
                    <div className="infos flex flex-col h-36 justify-around px-3">
                        <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                        <div className="stars flex items-center self-start ">
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                        </div>
                        <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>


                    </div>
                </div>
                <div className="card flex flex-col shadow-lg   ">
                    <img src={shoe2} alt="" className='w-full h-[300px] object-cover ' />
                    <div className="infos flex flex-col h-36 justify-around px-3">
                        <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                        <div className="stars flex items-center self-start ">
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                        </div>
                        <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>


                    </div>
                </div>
                <div className="card flex flex-col shadow-lg   ">
                    <img src={electronic2} alt="" className='w-full h-[300px] object-cover ' />
                    <div className="infos flex flex-col h-36 justify-around px-3">
                        <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                        <div className="stars flex items-center self-start ">
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                        </div>
                        <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>


                    </div>
                </div>
                <div className="card flex flex-col shadow-lg   ">
                    <img src={appareil4} alt="" className='w-full h-[300px] object-cover   ' />
                    <div className="infos flex flex-col h-36 justify-around px-3">
                        <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                        <div className="stars flex items-center self-start ">
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                        </div>
                        <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>


                    </div>
                </div>
                <div className="card flex flex-col shadow-lg   ">
                    <img src={home1} alt="" className='w-full h-[300px] object-cover ' />
                    <div className="infos flex flex-col h-36 justify-around px-3">
                        <p className='font-semibold text-[14px]  '>Happy Salled Women Winter Boho Floral</p>
                        <div className="stars flex items-center self-start ">
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                            <AiFillStar color='orange' size={15} />
                        </div>
                        <p className='text-red-400 font-bold self-start '>$129 <span className='line-through font-normal text-[12px] text-black '>$140</span> </p>


                    </div>
                </div>
            </div>

            {/* banners */}

            <div className="lg:grid grid-cols-2 gap-8 mt-10 hidden ">
                <div className="flex  justify-between max-h-[200px] shadow-md">
                    <div className=" flex flex-col items-start justify-between px-6 py-5 w-full">
                        <p className='font-bold'>Brutal Sale!</p>
                        <div className="subtex ">
                            <p className='text-gray-500 '>Get the deal in here</p>
                            <p className=' font-bold'>Livinng Room Chair</p>
                        </div>

                        <button className='bg-red-500 text-sm text-white px-4 py-2 rounded-full '>Shop Now</button>
                    </div>
                    <img src={banner1} alt="" className=' flex-1  ' />
                </div>
                <div className="flex  bg-gray-200 justify-between max-h-[200px] shadow-md">
                    <div className=" flex flex-col items-start justify-between px-6 py-5 w-full">
                        <p className='font-bold'>Brutal Sale!</p>
                        <div className="subtex ">
                            <p className='text-gray-500 '>Discount Everyday</p>
                            <p className=' font-bold'>Office Suit</p>
                        </div>

                        <button className='bg-red-500 text-sm text-white px-4 py-2 rounded-full '>Shop Now</button>
                    </div>
                    <img src={banner2} alt="" className=' flex-1  ' />
                </div>
            </div>


            {/* Sect3 */}

            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5 px-5 md:px-0">
                <div className="box1 flex p-5 border">
                    <img src={procat1} alt="pic" className='h-64 md:max-w-[100px] object-cover mr-5' />
                    <ul className='flex flex-col justify-between text-neutral-500'>
                        <li className='font-bold text-black'>Beauty</li>
                        <li>MakeUp</li>
                        <li>Skkin Care</li>
                        <li>Hair care</li>
                        <li>Fragance</li>
                        <li>Foot & Handcore</li>
                        <li className='mt-4 flex items-center space-x-4 text-black font-bold'>View All <BsArrowRightShort size={20}/></li>
                    </ul>

                </div>
                <div className="box1 flex p-5 border">
                    <img src={procat2} alt="pic" className='h-64 md:max-w-[100px] object-cover mr-5' />
                    <ul className='flex flex-col justify-between text-neutral-500'>
                     <a href="" className='hover:underline'>  <li className='font-bold text-black'>Gadjets</li></a>
                       <a href="" className='hover:underline'><li>Camera</li></a>
                       <a href="" className='hover:underline'><li>Laptops</li></a>
                       <a href="" className='hover:underline'><li>Mouse</li></a>
                       <a href="" className='hover:underline'><li>Accessoires</li></a>
                       <a href="" className='hover:underline'><li>Headphones</li></a>
                       <a href="" className='hover:underline'><li className='mt-4 flex items-center space-x-4 text-black font-bold'>View All <BsArrowRightShort size={20}/></li></a>
                    </ul>

                </div>
                <div className="box1 flex p-5 border">
                    <img src={procat3} alt="pic" className='h-64 md:max-w-[100px] object-cover mr-5' />
                    <ul className='flex flex-col justify-between text-neutral-500'>
                        <a href="" className='hover:underline'><li className='font-bold text-black'>Home Decor</li></a>
                        <a href="" className='hover:underline'><li>Kitchen</li></a>
                        <a href="" className='hover:underline'><li>Living Room</li></a>
                        <a href="" className='hover:underline'><li>Bathroom</li></a>
                        <a href="" className='hover:underline'><li>Great Rooms</li></a>
                        <a href="" className='hover:underline'><li>Entry</li></a>
                        <a href="" className='hover:underline'><li className='mt-4 flex items-center space-x-4 text-black font-bold'>View All <BsArrowRightShort size={20}/></li></a>
                    </ul>

                </div>

            </div>

        </div>
    )
}

export default FeaturedProducts