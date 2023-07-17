import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'

export default function EmptyCartUI() {
    return (
        <div className='my-24'>
            <div className='container lg:max-w-7xl'>
                <h2 className='text-2xl font-bold'>Shopping Cart</h2>
            </div>
            <div className='mt-9 flex-col gap-3 flex container lg:max-w-7xl w-full items-center justify-center'>
                <BiShoppingBag size={135} color='#000000'/>
                <h1 className='text-4xl font-extrabold text-[#000000]'>
                    Your shopping bag is empty
                </h1>
            </div>
        </div>
    )
}
