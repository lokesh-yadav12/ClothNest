import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt='' className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>
                This is a temporary text. Later, we will change the text, so don't worry. 
                This is a temporary text. Later, we will change the text, so don't worry. 
                This is a temporary text. Later, we will change the text, so don't worry. 
                This is a temporary text. Later, we will change the text, so don't worry
                  </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9166353078</li>
                    <li>Contact@Eonfashion@gmail.com</li>
                    
                </ul>
            </div>

        </div>
        <div>
            <hr/>
            <p className='py-5 text-center text-sm'>Copyright 2025@ Eonfashion.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer