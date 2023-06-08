'use client'
import Image from 'next/image'
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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

function ImageSlider() {
    return (
        <Swiper slidesPerView={3} className="md:grid md:grid-cols-3 lg:grid-cols-3"breakpoints={{640: {slidesPerView: 3,},768: {slidesPerView: 3,},}}>
            <SwiperSlide className=''>
                <Image src={myData.Image1} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={myData.Image2} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={myData.Image3} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={myData.Image4} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={myData.Image5} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={myData.Image6} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={myData.Image7} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={myData.Image8} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={myData.Image9} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={myData.Image10} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={myData.Image11} alt='product' height={"400"} width={"400"}/>
            </SwiperSlide>
        </Swiper>
    );
}

export default function Products() {
    return (
        <div className='w-full mx-auto max-w-sm md:px-0 px-4 md:max-w-7xl py-20'>
            <p className='text-center text-sm text-blue-500 font-semibold'>PRODUCTS</p>
            <h1 className='text-center text-4xl font-bold py-4 leading-tight'>Our Products</h1>
            <div id="myCarousel" className="pt-14">
                <ImageSlider/>
            </div>

        </div>
    )
}
