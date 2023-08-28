"use client"
import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Mproducts } from '../AllProducts/page'
import getStripePromise from '@/lib/stripe';
import Stripe from 'stripe';

interface ProductCheckoutProps {
  prods: Mproducts[]; // Specify the correct type for the 'prods' property
}
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
const ProductCheckout: React.FC<ProductCheckoutProps> = ({ prods }) => {
  const handleCheckout = async () => {
    // const stripe = getStripePromise()
    const response = await fetch("api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application.json" },
      cache: "no-cache",
      body: JSON.stringify({ prods })
    })
    const data = await response.json();
    if (data.session) {
      console.log("File: Checkout.tsx:17 ~ handleCheckout ~ response:", data.session);
      // stripePromise.redirectToCheckout({sessionId:data.session.id})
    }
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
