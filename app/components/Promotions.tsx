import Image from 'next/image'
import React from 'react'

export default function Promotions() {
    return (
        <div className='w-full mx-auto max-w-sm md:px-0 px-4 md:max-w-7xl py-20'>
            <p className='text-center text-sm text-blue-500 font-semibold'>PROMOTIONS</p>
            <h1 className='text-center text-4xl font-bold py-4 leading-tight'>Our Promotions Events</h1>
            <div className='grid mt-5 grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='md:col-span-2 flex md:flex-col justify-between'>
                    <div className='bg-[#d6d6d8] md:pl-7 w-full md:h-48 h-72 flex pt-8 md:pt-2 flex-col md:flex-row items-center justify-between gap-1 md:gap-0'>
                        <div className=''>
                            <h1 className='text-3xl font-bold'>GET UP TO <span className='text-[38px]'> 60%</span></h1>
                            <h4 className='text-left text-lg font-medium'>For the summer season</h4>
                        </div>
                        <div>
                            <Image width={"240"} height={"240"} alt='model picture 1' src={"/modelFemale1.webp"} />
                        </div>
                    </div>
                    <div className='w-full h-44 md:h-48 pt-5 md:pt-9 flex flex-col gap-7 md:gap-5 items-center bg-[#212121]'>
                        <h1 className='text-4xl font-bold text-white'>GET 30% OFF</h1>
                        <div className=''>
                            <h4 className='text-md pb-1 text-center text-white'>USE PROMO CODE</h4>
                            <div className='h-9 font font-semibold flex justify-center rounded-md items-center px-16 text-white w-full bg-[#474747]'>DINEWEEKENDSALE</div>
                        </div>
                    </div>
                </div>
                <div className='px-6 w-full md:w-72 md:h-[410px] h-96 bg-[#efe1c7] pt-5 flex justify-between flex-col'>
                    <div>
                        <h4 className='text-md font-medium'>Flex Sweatshirt</h4>
                        <h3 className='text-lg font-medium'>$100.00 <span className=' text-[20px] pl-2 font-semibold'> $75.00</span></h3>
                    </div>
                    <div className='mx-auto'>
                        <Image alt='male model' width={"230"} height={"230"} src={"/modelMale1.webp"} />
                    </div>
                </div>
                <div className='px-6 w-full md:w-72 md:h-[410px] h-96 bg-[#d7d7d9] pt-5 flex justify-between flex-col'>
                    <div>
                        <h4 className='text-md font-medium'>Flex Push Button Bomber</h4>
                        <h3 className='text-lg font-medium'>$225.00 <span className=' text-[20px] pl-2 font-semibold'> $190.00</span></h3>
                    </div>
                    <div className='mx-auto'>
                        <Image alt='male model' width={"230"} height={"230"} src={"/modelMale2.webp"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
