import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
export default function Footer() {
    return (
        <footer className='pt-8'>
            <div className='flex lg:px-8 items-start justify-start lg:justify-between xl:justify-center pb-8 lg:pb-0 lg:flex-row xl:-ml-28 flex-col gap-5 lg:gap-28 xl:gap-32'>
                <div className='pl-7 lg:pl-0 flex-col flex-grow xl:flex-grow-0 flex gap-9 justify-center '>
                    <Image src='/Logo.webp' height={"165"} width={"165"} alt='Logo' />
                    <h3 className='text-[#6a7077] text-[17px] leading-snug'>Small, artisan label that offers a thoughtfully<br /> curated collection of high quality everyday<br /> essentials made.</h3>
                    <div className='flex gap-5'>
                        <Link href='/'><FaTwitter size={"40"} className='rounded-md border-[11px] bg-[#f1f1f1] border-[#f1f1f1] ' /></Link>
                        <Link href='/'><FaFacebookF size={"40"} className='rounded-md border-[11px] bg-[#f1f1f1] border-[#f1f1f1] ' /></Link>
                        <Link href='/'><FaLinkedinIn size={"40"} className='rounded-md border-[11px] bg-[#f1f1f1] border-[#f1f1f1] ' /></Link>
                    </div>
                </div>
                <div className=' grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 lg:gap-0 xl:gap-7 '>
                    <ul className='flex flex-col gap-4 px-7'>
                        <h2 className='text-[#666666] text-[18px] py-1 font-bold'>Company</h2>
                        <li className='text-[#666666]'><Link href='/'>About</Link></li>
                        <li className='text-[#666666]'><Link href='/'>Terms of Use</Link></li>
                        <li className='text-[#666666]'><Link href='/'>Privacy Policy</Link></li>
                        <li className='text-[#666666]'><Link href='/'>How it Works</Link></li>
                        <li className='text-[#666666]'><Link href='/'>Contact Us</Link></li>
                    </ul>
                    <ul className='flex flex-col gap-4 px-7'>
                        <h2 className='text-[#666666] text-[18px] py-1 font-bold'>Support</h2>
                        <li className='text-[#666666]'><Link href='/'>Support Carrer</Link></li>
                        <li className='text-[#666666]'><Link href='/'>24h Service</Link></li>
                        <li className='text-[#666666]'><Link href='/'>Quick Chat</Link></li>
                    </ul>
                    <ul className='flex flex-col gap-4 px-7'>
                        <h2 className='text-[#666666] text-[18px] py-1 font-bold'>Contact</h2>
                        <li className='text-[#666666]'><Link href='/'>Whatsapp</Link></li>
                        <li className='text-[#666666]'><Link href='/'>Support 24h</Link></li>
                    </ul>
                </div>
            </div>
            <div className='sm:px-4 md:px-8 lg:px-10 xl:px-20 border-t-[1px] py-6 lg:gap-48 flex-col pl-6 sm:pl-0 sm:flex-row flex justify-between items-start gap-3 lg:mt-40 w-full border-[#7f7f7f]'>
                {/* <div className='grid grid-cols-3 gap-16'> */}
                    <h1 className='whitespace-normal sm:px-3 md:px-0'>Copyright © 2023 Dine Market</h1>
                    <h1 className='whitespace-normal sm:px-3 md:px-0'>Design by.<span className='font-bold'> Weird Design Studio</span></h1>
                    <h1 className='whitespace-normal sm:px-3 md:px-0'>Code by. <span className='font-bold'><Link href={"https://github.com/MuhammadbinSalman"}>MuhammadbinSalman</Link> on github</span></h1>
                {/* </div> */}
            </div>
        </footer>
    )
}
