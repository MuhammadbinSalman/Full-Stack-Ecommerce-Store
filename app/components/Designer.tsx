import Image from 'next/image'
import React from 'react'

export default function Designer() {
  return (
    <div className='w-full px-11 flex justify-center items-center mt-36 h-[500px] bg-[#fbfcff]'>
      <div className='flex relative flex-nowrap w-full justify-start items-center'>
        <h1 className='font-extrabold text-[#ecedef] leading-tight pl-24 text-left text-[100px]'>Different<br /> from <br />others</h1>
        <div className='absolute grid gap-14 gap-x-20 pl-24 grid-cols-2'>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold leading-tight text-[19px]'>Using Good Quality<br /> materials</h3>
            <p className='text-[17px] leading-normal'>Lorem ipsum dolor sit<br /> amt, consectetur<br /> adipiscing elit.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold leading-tight text-[19px]'>Modern Fashion<br /> Design</h3>
            <p className='text-[17px] leading-normal'>Lorem ipsum dolor sit<br /> amt, consectetur<br /> adipiscing elit.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold leading-tight text-[19px]'>100% Handmade<br /> Products</h3>
            <p className='text-[17px] leading-normal'>Lorem ipsum dolor sit<br /> amt, consectetur<br /> adipiscing elit.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold leading-tight text-[19px]'>Discount For Bulk<br /> Orders</h3>
            <p className='text-[17px] leading-normal'>Lorem ipsum dolor sit<br /> amt, consectetur<br /> adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className='flex gap-11 relative right-1 top-[-18%] items-start flex-col'>
        <h1 className='  leading-tight font-bold text-5xl '>
          Unique and Authentic Vintage Designer Jewellery
        </h1>
        <div className='flex gap-6 items-center justify-center'>
          <Image src='/modelFemale12.webp' alt='image model' height='250' width='250' />
          <div className='flex justify-center gap-5 flex-col items-center'>
            <p>This piece is ethically crafted in our<br /> small family-owned workshop in Peru<br /> with unmatched attention to detail<br /> and care. The Natural color is the<br /> actual natural color of the fiber,<br /> undyed and 100% traceable.</p>
            <button className='py-2 px-4 bg-[#212121] border-2 text-white border-[#545454]'>See All Products</button>
          </div>
        </div>
      </div>
    </div>
  )
}
