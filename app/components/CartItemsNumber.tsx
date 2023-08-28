// "use client"
// import { client } from '@/lib/sanityClient'
// import { Image as IImage } from 'sanity'
// import { urlForImage } from '@/sanity/lib/image'
// import React from 'react'
// import { useState } from 'react'
// import { cookies } from 'next/dist/client/components/headers';
// import { Mproducts } from '../AllProducts/page'
// import { Dbproducts } from '../Cart/page';

// const getData = async () => {

//     try {
//         const res = await fetch(`http://127.0.0.1:3000/api/cart?user_id=${cookies().get("user_id")?.value}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         })
//         if (!res) {
//             throw new Error("Failed API")
//         }
//         const result = await res.json()
//         return result
//     } catch (err) {
//         console.log(err)
//     }

// }

// export default async function CartItemsNumber() {
//     const res: { res: Dbproducts[] } = await getData()
//     const totalQuantity = res.res.length;
//     const [cartTotal, setCartTotal] = useState(totalQuantity);
//     // console.log(res, "DB data check krlo")
//     return (
//         <div>
//             {cartTotal}
//         </div>
//     )
// }