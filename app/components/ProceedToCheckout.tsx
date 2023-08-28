// "use client"
// import React from 'react'
// import { Dbproducts } from '../Cart/page'
// import { Mproducts } from '../AllProducts/page'

// interface componentProps {
//     db_products:Dbproducts[],
//     sanity_products:Mproducts[]
// }
// export const ProceedToCheckout = async({prods}:componentProps) =>{
//     console.log( "DB products")
//     console.log( "sanity products")
//     const handleCheckout= async()=>{
//         const response = await fetch("api/stripe-session/", {
//             method:"POST",
//             body: JSON.stringify({})
//         })
//     }
//   return (
//     <>
//     {
//         db_products.map(()=>{})
//     // (await db_products).map(async (single) => {
//     //       const datafiltered = await data.filter((product) => product._id === single.product_id)
//     //     }
//     }
//     <button className='h-11 my-4 md:w-80 lg:w-60 flex-grow w-64  bg-[#212121] text-white border-2 border-gray-500 items-center flex justify-center font-semibold gap-2 text-[14px]' onClick={handleCheckout}>Proceed to Checkout</button>
//     </>
//   )
// }
