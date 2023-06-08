import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'

export default function Hero() {
  return (
    <div className='w-full mx-auto max-w-sm md:px-0 px-4 md:max-w-7xl py-9'>
      <div className='flex justify-between'>
        <div className='flex flex-col md:pt-10 gap-9'>
          <div className='h-10 w-[120px] bg-blue-100 text-blue-700 rounded-lg items-center flex justify-center font-bold'>Sale 70%</div>
          <div className='font-bold md:text-6xl md:pr-5 text-5xl leading-tight'>An Industrial Take on StreetWear</div>
          <div className='text-gray-600 max-w-sm'>Anyone can beat you but no-one can beat your outfit as long as you wear dine outfits.</div>
          <Link href={"/"} className='w-72'>
            <div className='h-[61px] md:w-60 w-72 bg-[#212121] text-white border-2 border-gray-500 items-center flex justify-center font-semibold gap-2 text-lg'><CgShoppingCart size={"28"} />Start Shopping</div>
          </Link>
          <div className='md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 sm:gap-y-0 sm:gap-x-0'>
            <Image alt='bazaar logo' src="/bazaar.webp" width={"100"} height={"100"} />
            <Image alt='bustle logo' src="/bustle.webp" width={"100"} height={"100"} />
            <Image alt='versage logo' src="/versage.webp" width={"100"} height={"100"} />
            <Image alt='instyle logo' src="/instyle.webp" width={"100"} height={"100"} />
          </div>
        </div>
        <div className="">
          <div className='bg-[#ffece3] overflow-visible flex justify-center items-center rounded-full w-[580px] h-[600px]' >
            <Image alt='hero Image' height={"1200"}  className='w-full h-full' width={"1200"} src={"/heroimage.webp"} />
          </div>
        </div>
      </div>
    </div>
  )
}