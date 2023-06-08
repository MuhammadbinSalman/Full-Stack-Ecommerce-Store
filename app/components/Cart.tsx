import Link from 'next/link'
import React from 'react'
import { BiCart } from 'react-icons/bi'

export default function Cart() {
    return (
        <Link href="/">
            <div className='relative mt-64 md:mt-0'>
                <BiCart size={"43"} className='p-1 hover:scale-125 transition duration-500 border-4 border-gray-100 bg-gray-100 rounded-full'></BiCart>
                <div className='bg-red-500 rounded-full h-4 w-4 absolute top-0 right-1 text-[10px] pb-1 text-gray-100 flex justify-center items-start font-semibold'>0</div>
            </div>
        </Link>
    )
}
