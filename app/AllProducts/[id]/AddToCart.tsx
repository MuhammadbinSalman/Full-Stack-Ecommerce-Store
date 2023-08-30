"use client"
import { ButtonMain } from '@/app/components/Hero'
import React from 'react'
import { FC } from "react"
import { CgShoppingCart } from 'react-icons/cg'
import { useToast } from "@/components/ui/use-toast"
import { Mproducts } from '../page'
import { CheckCircle2 } from 'lucide-react'

const AddToCart: FC<{ item: any }> = ({ item }) => {
    const { toast } = useToast()
    return (
        <>
            {
                item.map((single: Mproducts) => {
                    const handleAddToCart = async () => {
                        // console.log(JSON.stringify({product_id:single.price}), "Product ID frontend")
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
                            <button onClick={() => {toast({description: `Your product has been added to the cart.`,title:"Product Added!", action: <CheckCircle2 color="#1eb300"/>})}} 
                            className='h-[45px] lg:w-44 w-64 sm:w-72 bg-[#212121] text-white border-2 border-gray-500 items-center flex justify-center font-semibold gap-2 text-base'><CgShoppingCart size={"28"} />Add To Cart
                            </button>
                        </div>
                    )
                })
            }
        </>

    )
}
export default AddToCart
