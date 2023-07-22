import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
export default function Footer() {
    return (
        <footer className=' pt-8'>
            <div className='flex justify-center lg:justify-center -ml-28 lg:flex-row flex-col items-center gap-36'>
                <div className='flex-col flex gap-9 justify-center '>
                    <Image src='/Logo.webp' height={"165"} width={"165"} alt='Logo' />
                    <h3 className='text-[#6a7077] text-[17px] leading-snug'>Small, artisan label that offers a thoughtfully<br /> curated collection of high quality everyday<br /> essentials made.</h3>
                    <div className='flex gap-5'>
                        <Link href='/'><FaTwitter size={"40"} className='rounded-md border-[11px] bg-[#f1f1f1] border-[#f1f1f1] ' /></Link>
                        <Link href='/'><FaFacebookF size={"40"} className='rounded-md border-[11px] bg-[#f1f1f1] border-[#f1f1f1] ' /></Link>
                        <Link href='/'><FaLinkedinIn size={"40"} className='rounded-md border-[11px] bg-[#f1f1f1] border-[#f1f1f1] ' /></Link>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-7'>
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
            <div className='border-t-[1px] py-6 lg:gap-48 flex justify-center items-center lg:mt-40 w-full border-[#7f7f7f]'>
                {/* <div className='grid grid-cols-3 gap-16'> */}
                    <h1>Copyright © 2022 Dine Market</h1>
                    <h1>Design by.<span className='font-bold'> Weird Design Studio</span></h1>
                    <h1>Code by. <span className='font-bold'><Link href={"https://github.com/MuhammadbinSalman"}>MuhammadbinSalman</Link> on github</span></h1>
                {/* </div> */}
            </div>
        </footer>
    )
}
