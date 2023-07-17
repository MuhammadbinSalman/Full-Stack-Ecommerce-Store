'use client'
import React from 'react'
import { FC } from "react"
import { client } from '../lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
// import { json } from 'stream/consumers'
import Link from 'next/link'
import { Mproducts } from '@/app/AllProducts/page'
import toast, { Toaster } from 'react-hot-toast';


export const ProductLayout: FC<{ item: any }> = ({ item }) => {
    // console.log({item},"yeh ha productLayout waale items")
    return (
        <>
            {item.map((single: Mproducts) => {
                const handleAddToCart = async () => {
                    const res = await fetch("/api/cart", {
                        method: "POST",
                        body: JSON.stringify({
                            product_id: single._id
                        })
                    })
                    const result = await res.json()}
                const productRoute = single.title.toLowerCase().replace(/ /g, "-").replace(/^-/, "");
                return (
                    <div key={single._id}>
                        <Link
                           href={`/AllProducts/${productRoute}`}
                        >
                        <Image width={"250"} className='' height={"250"} alt='picture by sanity' src={urlForImage(single.image).url()} />
                        <div className='flex flex-col gap-1 mt-3'>
                            <h1 className='text-[16px] font-semibold text-[#212121]'>{single.title}</h1>
                            <h2 className='text-[#888888]'>{single.description}</h2>
                            <h2 className='text-[#212121] text-lg font-bold'>${single.price}</h2>
                        </div>
                        </Link>
                        {/* <button onClick={handleAddToCart} className='text-center rounded-2xl bg-blue-600 text-white py-2 px-7'>Add To Cart</button> */}
                    </div>
                )
            })}
            {/* <Link
            href={`/AllProducts/${productRoute}`}
            >
                <Image width={"250"} className='' height={"250"} alt='picture by sanity' src={urlForImage(item.image).url()} />
                <div className='flex flex-col gap-1 mt-3'>
                    <h1 className='text-[16px] font-semibold text-[#212121]'>{item.title}</h1>
                    <h2 className='text-[#888888]'>{item.description}</h2>
                    <h2 className='text-[#212121] text-lg font-bold'>${item.price}</h2>
                </div>
                <button onClick={handleAddToCart} className='text-center rounded-2xl bg-blue-600 text-white py-2 px-7'>Add To Cart</button>
            </Link> */}
        </>
    )
}

export default ProductLayout