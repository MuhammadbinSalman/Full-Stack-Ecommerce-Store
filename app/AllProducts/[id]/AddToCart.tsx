"use client"
import { ButtonMain } from '@/app/components/Hero'
import React from 'react'
import { FC } from "react"
import { CgShoppingCart } from 'react-icons/cg'
import { Mproducts } from '../page'

const AddToCart: FC<{ item: any }> = ({ item }) => {
    return (
        <>
            {
                item.map((single: Mproducts) => {
                    const handleAddToCart = async () => {
                        const res = await fetch("/api/cart", {
                            method: "POST",
                            body: JSON.stringify({
                                product_id: single._id
                            })
                        })
                        const result = await res.json()
                    }
                    return (
                        <div onClick={handleAddToCart} key={single._id}>
                            <button className='h-[45px] md:w-44 w-72 bg-[#212121] text-white border-2 border-gray-500 items-center flex justify-center font-semibold gap-2 text-base'><CgShoppingCart size={"28"} />Add To Cart</button>
                        </div>
                    )
                })
            }
        </>

    )
}
export default AddToCart
