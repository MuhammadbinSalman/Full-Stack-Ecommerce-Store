'use client'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React, { useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mproducts } from '../AllProducts/page'

SwiperCore.use([Navigation, Pagination]);

interface MyImages {
    Image1: string;
    Image2: string;
    Image3: string,
    Image4: string,
    Image5: string,
    Image6: string,
    Image7: string,
    Image8: string,
    Image9: string,
    Image10: string,
    Image11: string,
}

const myData: MyImages = {
    Image1: "/modelFemale10.png",
    Image2: "/modelFemale11.png",
    Image3: "/modelFemale2.png",
    Image4: "/modelFemale4.png",
    Image5: "/modelFemale3.png",
    Image6: "/modelFemale5.png",
    Image7: "/modelFemale6.png",
    Image8: "/modelMale3.png",
    Image9: "/modelFemale7.png",
    Image10: "/modelFemale8.png",
    Image11: "/modelFemale9.png",
};
const getProductData = async () => {
    const res = await client.fetch(`*[_type=='product']{
      price,
      _id,
      title,
      description,
      image,
      category -> {name}
    }`)
    return res
  }

function ImageSlider() {
    // const data: Mproducts[] = await getProductData()
    useEffect(() => {
        async function fetchDataAsync() {
            const data: Mproducts[] = await getProductData()
            console.log("useeffect ka data", data)
        }}, [])
    return (
        <div className='lg:px-7 md:px-8 xl:px-6'>
        <Swiper slidesPerView={'auto'} 
        // "py-10 w-[1300px]  md:grid md:grid-cols-3 lg:grid-cols-3" 
        className="h-[600px] px-8 pt-6"
        breakpoints={{ 640: { slidesPerView: 2, }, 768: { slidesPerView: 3 }, }}>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image1} alt='product' className='' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Brushed Raglan Sweatshirt</h1>
                <p className='font-bold text-xl'>$195</p>
            </SwiperSlide>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image2} alt='product' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Cameryn Sash Tie Dress</h1>
                <p className='font-bold text-xl'>$545</p>
            </SwiperSlide>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image3} alt='product' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Flex Sweatshirt</h1>
                <p className='font-bold text-xl'>$175</p>
            </SwiperSlide>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image4} alt='product' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Flex Sweatpants</h1>
                <p className='font-bold text-xl'>$175</p>
            </SwiperSlide>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image5} alt='product' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Pink Fleece Sweetpants</h1>
                <p className='font-bold text-xl'>$195</p>
            </SwiperSlide>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image6} alt='product' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Lite Sweatpants</h1>
                <p className='font-bold text-xl'>$150</p>
            </SwiperSlide>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image7} alt='product' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Imperial Alpaca Hoodie</h1>
                <p className='font-bold text-xl'>$525</p>
            </SwiperSlide>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image8} alt='product' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Flex Pushbutton Bomber</h1>
                <p className='font-bold text-xl'>$225</p>
            </SwiperSlide>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image9} alt='product' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Muscle Tank</h1>
                <p className='font-bol text-xld'>$75</p>
            </SwiperSlide>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image10} alt='product' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Brushed Bomber</h1>
                <p className='font-bold text-xl'>$225</p>
            </SwiperSlide>
            <SwiperSlide className='hover:scale-105 transition duration-500'>
                <div className='w-full h-4'/>
                <Image src={myData.Image11} alt='product' height={"400"} width={"400"} />
                <h1 className='my-2 font-semibold text-lg'>Raglan Sweatshirt</h1>
                <p className='font-bold text-xl'>$195</p>
            </SwiperSlide>
        </Swiper>
        </div>
    );
}

export default function Products() {
    return (
        <div className='w-full mx-auto max-w-sm md:px-0 px-4 md:max-w-7xl py-20'>
            <p className='text-center text-sm text-blue-500 font-semibold'>PRODUCTS</p>
            <h1 className='text-center text-4xl font-bold py-4 leading-tight'>Our Products</h1>
            <div id="myCarousel" className="pt-14">
                <ImageSlider />
            </div>

        </div>
    )
}
