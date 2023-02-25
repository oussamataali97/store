import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-200">
            <div className='max-w-5xl mx-auto md:py-10 py-4'>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 px-5 md:px-3 lg:px-0">
                    <ul className='leading-9 text-gray-600 '>
                        <li className='md:mb-6 mb-2 font-bold text-black'>Help & contact</li>
                        <a href=""><li>Your Account</li></a>
                        <a href=""><li>Your Orders</li></a>
                        <a href=""><li>Shipping rates</li></a>
                        <a href=""><li>Refunds</li></a>
                    </ul>
                    <ul className='leading-9 text-gray-600 border-t-[1px]  border-neutral-300 md:border-t-0'>
                        <li className='md:mb-6 mb-2 font-bold text-black'>Products Category</li>
                        <a href=""><li>Beauty</li></a>
                        <a href=""><li>Electonics</li></a>
                        <a href=""><li>Games</li></a>
                        <a href=""><li>Accessories</li></a>
                        <a href=""><li>Women fashion</li></a>
                        <a href=""><li>Men fashion</li></a>
                    </ul>
                    <ul className='leading-9 text-gray-600 border-t-[1px]  border-neutral-300 md:border-t-0'>
                        <li className='md:mb-6 mb-2 font-bold text-black'>About us</li>
                        <a href=""><li>News</li></a>
                        <a href=""><li>Policies</li></a>
                        <a href=""><li>Carrers</li></a>
                        <a href=""><li>Jobs</li></a>
                    </ul>
                    <ul className='leading-9 text-gray-600 border-t-[1px]  border-neutral-300 md:border-t-0'>
                        <li className='md:mb-6 mb-2 font-bold text-black'>Payments infos</li>
                        <a href=""><li>Paypal</li></a>
                        <a href=""><li>Stripe</li></a>
                        <a href=""><li>Mastercard</li></a>
                        <a href=""><li>Visa</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer