"use client"
import React from 'react'
import { Mproducts } from '../AllProducts/page'

interface ProductCheckoutProps {
    prods: Mproducts[]; // Specify the correct type for the 'prods' property
}
const ProductCheckout: React.FC<ProductCheckoutProps> = ({ prods }) => {
    const handleCheckout = async () => {
        console.log("hello");
        const response = await fetch("api/stripe-session/", {
          method: "POST",
          body: JSON.stringify({prods})
        })
      }
    return (
        <>
        <div>
        <button className='h-11 my-4 md:w-80 lg:w-60 flex-grow w-64  bg-[#212121] text-white border-2 border-gray-500 items-center flex justify-center font-semibold gap-2 text-[14px]' onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
        </>
    );
};

export default ProductCheckout;
