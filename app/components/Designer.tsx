import Image from 'next/image'
import React from 'react'

export default function Designer() {
  return (
    <div className='w-full 2sm:px-8 3sm:px-11 lg:px-7 px-6 xl:px-11 flex lg:flex-row flex-col justify-center xl:gap-0 items-center mt-36 h-[1330px] 2sm:h-[1500px] 4sm:h-[1340px] 3sm:h-[1200px] sm:h-[880px] md:h-[830px] lg:pb-0 md:pb-3  lg:h-[500px] bg-[#fbfcff]'>
      <div className='flex relative w-full justify-start md:mt-40 mt-64 sm:mt-36 4sm:mt-36 3sm:mt-16 2sm:mt-52 lg:mt-0 items-center'>
        <h1 className='font-extrabold text-[#ecedef] leading-tight pl-4 sm:pl-24 text-left xl:text-[100px] lg:text-[90px] md:text-[100px] text-[45px] 3sm:text-[85px] 2sm:text-[58px] sm:text-[100px]'>Different<span className='hidden lg:inline'><br /></span> from <span className='hidden lg:inline'><br /></span>others</h1>
        <div className='absolute grid 2sm:gap-14 2sm:gap-x-20 gap-x-7 gap-12 xl:pl-24 lg:pl-10 grid-cols-2'>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold leading-tight text-[19px]'>Using Good Quality<span className='hidden lg:inline'><br /></span> materials</h3>
            <p className='text-[17px] leading-normal'>Lorem ipsum dolor sit<span className='hidden lg:inline'><br /></span> amt, consectetur<span className='hidden lg:inline'><br /></span> adipiscing elit.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold leading-tight text-[19px]'>Modern Fashion<span className='hidden lg:inline'><br /></span> Design</h3>
            <p className='text-[17px] leading-normal'>Lorem ipsum dolor sit<span className='hidden lg:inline'><br /></span> amt, consectetur<span className='hidden lg:inline'><br /></span> adipiscing elit.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold leading-tight text-[19px]'>100% Handmade<span className='hidden lg:inline'><br /></span> Products</h3>
            <p className='text-[17px] leading-normal'>Lorem ipsum dolor sit<span className='hidden lg:inline'><br /></span> amt, consectetur<span className='hidden lg:inline'><br /></span> adipiscing elit.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold leading-tight text-[19px]'>Discount For Bulk<span className='hidden lg:inline'><br /></span> Orders</h3>
            <p className='text-[17px] leading-normal'>Lorem ipsum dolor sit<span className='hidden lg:inline'><br /></span> amt, consectetur<span className='hidden lg:inline'><br /></span> adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className='flex gap-[580px] 4sm:gap-[630px] 4sm:mt-[-500px] 2sm:gap-[670px] 2sm:mt-[-640px] 3sm:gap-[520px] mt-[-510px] 3sm:mt-[-500px] sm:mt-[-660px] sm:gap-[530px] md:gap-[500px] md:mt-[-500px] lg:mt-0 lg:gap-11 xl:pl-0 pl-0 3lg:pr-5 xl:pr-0 pr-0 lg:relative lg:right-1 md:top-[13%] lg:top-[-18%] items-start flex-col'>
        <h1 className='text-[#212121] leading-tight font-bold text-4xl sm:text-5xl '>
          Unique and Authentic Vintage Designer Jewellery
        </h1>
        <div className='flex sm:flex-row gap-9 flex-col md:gap-11 sm:gap-9 lg:gap-4 xl:gap-6 items-center justify-center'>
          <Image src='/modelFemale12.webp' alt='image model' height='260' width='260' className='' />
          <div className='flex justify-center gap-10 flex-col items-start'>
            <p className='lg:max-w-[230px] 2lg:max-w-[260px] 3lg:max-w-[290px]  xl:max-w-full'
            // className='py-1 3lg:pr-56 2lg:pr-36 min-w-min  2lg:bg-lime-100 pr-0 xl:pr-0 lg:bg-amber-100'
            >This piece is ethically crafted in our<span className='hidden xl:inline'><br /></span> small family-owned workshop in Peru<span className='hidden xl:inline'><br /></span> with unmatched attention to detail<span className='hidden xl:inline'><br /> </span>and care. The Natural color is the<span className='hidden xl:inline'><br /></span> actual natural color of the fiber,<span className='hidden xl:inline'><br /></span> undyed and 100% traceable.</p>
            <button className='py-2 px-4 bg-[#212121] border-2 text-white border-[#545454]'>See All Products</button>
          </div>
        </div>
      </div>
    </div>
  )
}
