import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-200">
            <div className='max-w-5xl mx-auto py-10'>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 px-5 md:px-3 lg:px-0">
                    <ul className='leading-9 text-gray-600 '>
                        <li className='md:mb-6 mb-2 font-bold text-black'>Help & contact</li>
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Shipping rates</li>
                        <li>Refunds</li>
                    </ul>
                    <ul className='leading-9 text-gray-600 border-t-2  border-neutral-300 md:border-t-0'>
                        <li className='md:mb-6 mb-2 font-bold text-black'>Products Category</li>
                        <li>Beauty</li>
                        <li>Electonics</li>
                        <li>Games</li>
                        <li>Accessories</li>
                        <li>Women fashion</li>
                        <li>Men fashion</li>
                    </ul>
                    <ul className='leading-9 text-gray-600 border-t-2  border-neutral-300 md:border-t-0'>
                        <li className='md:mb-6 mb-2 font-bold text-black'>About us</li>
                        <li>News</li>
                        <li>Policies</li>
                        <li>Carrers</li>
                        <li>Jobs</li>
                    </ul>
                    <ul className='leading-9 text-gray-600 border-t-2  border-neutral-300 md:border-t-0'>
                        <li className='md:mb-6 mb-2 font-bold text-black'>Payments infos</li>
                        <li>Paypal</li>
                        <li>Stripe</li>
                        <li>Mastercard</li>
                        <li>Visa</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer