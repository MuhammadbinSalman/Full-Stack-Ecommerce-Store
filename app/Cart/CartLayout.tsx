"use client"
import React, { FC } from 'react'
import { useState } from 'react'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import { Mproducts } from '../AllProducts/page'
import { cookies } from 'next/dist/client/components/headers';
import EmptyCartUI from '../components/EmptyCartUI'
import ProductCheckout from './ProductCheckout'
import DeleteButton from '../components/DeleteButton'
import Quantity from '../components/Quantity'
import Image from 'next/image'

function CartLayout ({items}:any) {
    const totalPrice = items.reduce((total:any, product:any) => total + product.price, 0);
    // console.log(items, "I ki values")
    const [cartPrice, setCartPrice] = useState(totalPrice);
    const totalQuantity = items.length;
    const [cartTotal, setCartTotal] = useState(totalQuantity);
    // const [price, setPrice] = useState(0)
    if (items.length >= 1) {
        return (
            <div className='max-w-7xl mx-auto px-16 pb-72 lg:pb-0'>
                <h1 className='text-left text-2xl font-bold pt-16 '>Shopping Cart</h1>
                {
                    items.map((i:any) => {
                        // setPrice(price + i.price)
                        return (
                            <div key='abc'>
                                <div className='flex max-w-7xl mx-auto lg:pr-80 justify-between py-8 w-full items-center'>
                                    <div className='flex transform duration-300 flex-col md:flex-row justify-center gap-8 items-center'>
                                        <Image width={"180"} className='rounded-lg' height={"180"} alt='picture by sanity' src={urlForImage(i.product.image).url()} />
                                        <div className='flex flex-col gap-3'>
                                            <h1 className='text-xl text-[#212121] pb-2'>{i.product.title}</h1>
                                            <h1 className='text-[16px] font-semibold text-gray-400'>{i.product.description}</h1>
                                            <p className='font-semibold text-base'>Delivery Estimation</p>
                                            <p className='font-semibold text-base text-yellow-400'>5 Working Days</p>
                                            <h2 className='text-lg font-semibold text-[#212121]'>{`$${i.product.price}`}</h2>
                                        </div>
                                    </div>
                                    <div className='flex gap-28 justify-between items-end flex-col'>
                                        <DeleteButton />
                                        <Quantity />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='px-6 pb-7 pt-5 bg-[#fbfcff] absolute xl:right-24 2xl:right-44 xl:top-[225px] my-4 lg:right-20 lg:top-[225px] '>
                    <h2 className='text-2xl font-bold mb-4'>Order Summary</h2>
                    <div className='w-full flex my-5 justify-between'><p>Quantity</p><p>{totalQuantity} Products</p></div>
                    <div className='w-full flex my-5 justify-between'><p>Subtotal</p><p>${cartPrice}</p></div>
                    <ProductCheckout prods={items} />
                </div>
            </div>
        )
    } else {
        return (
            <EmptyCartUI />
        )
    }
}


export default CartLayout;
