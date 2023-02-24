
import slider0 from './../assets/slider/slider0.jpg'
import slider1 from './../assets/slider/slider1.jpg'
import slider2 from './../assets/slider/slider2.jpg'
import slider3 from './../assets/slider/slider3.jpg'
import { Navigation, Pagination,Autoplay, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
        import { useSelector } from 'react-redux';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'



const Caroussel = () => {

    const  {products}= useSelector((state)=>state.product)

    const unduplicate = products.map(pr => {
        return pr.category}
        )

    const unduplicatss=unduplicate.filter((item,index)=>unduplicate.indexOf(item) === index)
    console.log(unduplicatss)




    return (
        <div className="md:max-w-5xl mx-auto grid grid-cols-1  md:grid-cols-4 ">
            <div className=" hidden md:block col-span-1 flex-1 z-40   font-[700]   ">

               <ul className=' border-x-[0.5px]  h-[330px]'>
                     {unduplicatss.map((item,index)=>(
                        <li key={index} className='border-b-[1px] flex font-semibold hover:bg-red-300 hover:cursor-pointer h-[55px] items-center px-5'> {item.charAt(0).toUpperCase() + item.slice(1)}  </li>
                    ))}
               </ul>

            </div>
            <div className="col-span-4 md:col-span-3 z-10 md:pl-5 px-3  mt-3 ">

                <Swiper
                    className=''
                    modules={[Navigation, Pagination, Scrollbar,Autoplay , A11y]}

                    slidesPerView={1}
                  autoplay={{

                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    loop={true}
                    pagination={{ clickable: true }}

                    onSwiper={(swiper) => console.log(swiper)}

                >
                    <SwiperSlide className='relative'><img src={slider0} alt="" className=' w-full h-[330px] object-cover ' />
                    <div className="absolute bottom-[40px] left-[30px]  ">
                        <p className='bg-black text-white w-fit px-2 rounded-xl py-2 text-[13px]'>Best Deal</p>
                        <p className='text-3xl font-[600] text-gray-500'>Come And Get It</p>
                        <p className='text-4xl font-[800] uppercase mt-2 text-stone-700'>Brand new shoes</p>
                        <button className='bg-red-500 text-white px-4 py-2 rounded-full mt-4'>Shop Now</button>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><img src={slider1} alt="" className=' w-full h-[330px] object-cover ' />
                     <div className="absolute bottom-[40px] left-[30px]  ">
                        <p className='bg-black text-white w-fit px-2 rounded-xl py-2 text-[13px]'>Best Deal</p>
                        <p className='text-3xl font-[600] text-gray-500'>Fit Your wardrobe</p>
                        <p className='text-4xl font-[800] uppercase mt-2 text-stone-700'>With luxury items</p>
                        <button className='bg-red-500 text-white px-4 py-2 rounded-full mt-4'>Shop Now</button>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><img src={slider3} alt="" className=' w-full h-[330px] object-cover ' />
                     <div className="absolute bottom-[40px] left-[30px]  ">
                        <p className='bg-black text-white w-fit px-2 rounded-xl py-2 text-[13px]'>Best Deal</p>
                        <p className='text-3xl font-[600] text-gray-500'>Wooden minimal Sofa</p>
                        <p className='text-4xl font-[800] uppercase mt-2 text-stone-700'>Extra 50% off</p>
                        <button className='bg-red-500 text-white px-4 py-2 rounded-full mt-4'>Shop Now</button>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><img src={slider2} alt="" className=' w-full h-[330px] object-cover ' />
                     <div className="absolute bottom-[40px] left-[30px]  ">
                        <p className='bg-black text-white w-fit px-2 rounded-xl py-2 text-[13px]'>Best Deal</p>
                        <p className='text-3xl font-[600] text-gray-500'>Home workout Accessories</p>
                        <p className='text-4xl font-[800] uppercase mt-2 text-stone-700'>Push The limit Now</p>
                        <button className='bg-red-500 text-white px-4 py-2 rounded-full mt-4'>Shop Now</button>
                    </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Caroussel