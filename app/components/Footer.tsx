import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
export default function Footer() {
    return (
        <footer className='flex gap-36 py-8 justify-center lg:justify-start items-center lg:flex-row flex-col'>
            <div className='flex-col flex gap-9 justify-center '>
                <Image src='/Logo.webp' height={"165"} width={"165"} alt='Logo' />
                <h3 className='text-[#6a7077] text-[17px] leading-snug'>Small, artisan label that offers a thoughtfully<br /> curated collection of high quality everyday<br /> essentials made.</h3>
                <div className='flex gap-5'>
                    <FaTwitter size={"40"} className='rounded-md border-[11px] bg-[#f1f1f1] border-[#f1f1f1] ' />
                    <FaFacebookF size={"40"} className='rounded-md border-[11px] bg-[#f1f1f1] border-[#f1f1f1] ' />
                    <FaLinkedinIn size={"40"} className='rounded-md border-[11px] bg-[#f1f1f1] border-[#f1f1f1] ' />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-32'>
                <ul className='flex flex-col gap-4'>
                    <h2 className='text-[#666666] text-[18px] py-1 font-bold'>Company</h2>
                    <li className='text-[#666666]'>About</li>
                    <li className='text-[#666666]'>Terms of Use</li>
                    <li className='text-[#666666]'>Privacy Policy</li>
                    <li className='text-[#666666]'>How it Works</li>
                    <li className='text-[#666666]'>Contact Us</li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <h2 className='text-[#666666] text-[18px] py-1 font-bold'>Support</h2>
                    <li className='text-[#666666]'>Support Carrer</li>
                    <li className='text-[#666666]'>24h Service</li>
                    <li className='text-[#666666]'>Quick Chat</li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <h2 className='text-[#666666] text-[18px] py-1 font-bold'>Contact</h2>
                    <li className='text-[#666666]'>Whatsapp</li>
                    <li className='text-[#666666]'>Support 24h</li>
                </ul>
            </div>
        </footer>
    )
}
