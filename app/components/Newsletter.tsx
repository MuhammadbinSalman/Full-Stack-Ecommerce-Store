import Link from 'next/link'
import React from 'react'

export default function Newsletter() {
    return (
        <section className='w-full flex justify-center flex-col my-36 2sm:my-28 md:px-0 sm:px-5'>
            <h1 className='text-center relative sm:text-[110px] 3sm:text-[90px] 4sm:text-[77px] overflow-hidden md:text-[130px] text-[58px] font-extrabold text-[#f2f3f7] 2sm:text-[68px]'>Newsletter</h1>
            <div className=' flex gap-7 flex-col -mt-44 z-20 justify-center items-center'>
                <h1 className='bg-clip-text text-[#212121] text-4xl 4sm:px-5 3sm:px-0 font-bold text-center'>Subscribe Our Newsletter</h1>
                <p className='3sm:px-0 4sm:px-5 2sm:px-4 text-center'>Get the latest information and promo offers directly</p>
                <div className='flex flex-col justify-center items-center 4sm:flex-row 4sm:gap-0 gap-5 3sm:gap-3 my-3'>
                    <input className=" w-64 2sm:w-72 4sm:w-[277px] 3sm:w-72 py-2  pl-4 text-sm text-gray-900 border border-[#9e9e9e] bg-[#fcfcfc] placeholder-[#7b7575] " placeholder="input email address" />
                    <Link href='/'><div className='bg-[#000000] font-semibold 3sm:max-w-none max-w-[280px] py-2 2sm:px-8 4sm:px-2 px-5 3sm:px-5 text-sm border-2 border-[#3a3a3a] text-white'>Get Started</div></Link>
                </div>
            </div>
        </section>
    )
}
