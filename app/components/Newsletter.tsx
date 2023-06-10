import Link from 'next/link'
import React from 'react'

export default function Newsletter() {
    return (
        <section className='w-full flex justify-center flex-col my-28'>
            <h1 className='text-center relative text-[130px] font-extrabold text-[#f2f3f7]'>Newsletter</h1>
            <div className=' flex gap-7 flex-col -mt-44 z-20 justify-center items-center'>
                <h1 className='bg-clip-text text-[#212121] text-4xl font-bold'>Subscribe Our Newsletter</h1>
                <p className=''>Get the latest information and promo offers directly</p>
                <div className='flex gap-3 my-3'>
                    <input className="block w-72 py-2 pl-4 text-sm text-gray-900 border border-[#9e9e9e] bg-[#fcfcfc] placeholder-[#7b7575] " placeholder="input email address" />
                    <Link href='/'><div className='bg-[#000000] font-semibold py-2 px-5 text-sm border-2 border-[#3a3a3a] text-white'>Get Started</div></Link>
                </div>
            </div>
        </section>
    )
}
