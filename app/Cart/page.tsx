import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import React from 'react'
import { cookies } from 'next/dist/client/components/headers';
import CartLayout from './CartLayout'
import { Mproducts } from '../AllProducts/page'

export interface Dbproducts {
  id: number,
  user_id: string,
  product_id: string,
  quantity: number
}
const getData = async () => {

  try {
    const res = await fetch(`http://127.0.0.1:3000/api/cart?user_id=${cookies().get("user_id")?.value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    if (!res) {
      throw new Error("Failed API")
    }
    const result = await res.json()
    return result
  } catch (err) {
    console.log(err)
  }

}

export default async function page() {
  const res:{res:Dbproducts[]} = await getData()
  console.log(res, "res here");
  
  const getProductData = async () => {
      const red = await client.fetch(`*[_type=='product' && _id in $productIds]{
      price,
      _id,
      title,
      description,
      image,
      category -> {name}
    }`, { productIds: res.res.map((item) => item.product_id) })
      return red
  }
  const data = await getProductData()
  console.log(data, "sanity data")
  // console.log(res, "DB data check krlo")
  return (
    <div> 
      <CartLayout items={data}/>
    </div>
  )
}
// {
//   res: [
//     {
//       id: 42,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '06c7b02b-8a2f-4ad0-8be2-0ec3931b981d',
//       quantity: 1
//     },
//     {
//       id: 45,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '0f0401b7-36e6-4113-ab59-67c7d3931b10',
//       quantity: 1
//     },
//     {
//       id: 46,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '0f0401b7-36e6-4113-ab59-67c7d3931b10',
//       quantity: 1
//     },
//     {
//       id: 47,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '0f0401b7-36e6-4113-ab59-67c7d3931b10',
//       quantity: 1
//     },
//     {
//       id: 48,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '3044ebc5-da94-4e86-b697-436785b83d39',
//       quantity: 1
//     },
//     {
//       id: 49,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '3044ebc5-da94-4e86-b697-436785b83d39',
//       quantity: 1
//     },
//     {
//       id: 50,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '06c7b02b-8a2f-4ad0-8be2-0ec3931b981d',
//       quantity: 1
//     },
//     {
//       id: 51,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '06c7b02b-8a2f-4ad0-8be2-0ec3931b981d',
//       quantity: 1
//     },
//     {
//       id: 52,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '0f0401b7-36e6-4113-ab59-67c7d3931b10',
//       quantity: 1
//     },
//     {
//       id: 53,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '0f0401b7-36e6-4113-ab59-67c7d3931b10',
//       quantity: 1
//     },
//     {
//       id: 54,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '0f0401b7-36e6-4113-ab59-67c7d3931b10',
//       quantity: 1
//     },
//     {
//       id: 55,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '0f0401b7-36e6-4113-ab59-67c7d3931b10',
//       quantity: 1
//     },
//     {
//       id: 56,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '31d50098-dde3-42bc-b971-5cf3ae76ca20',
//       quantity: 1
//     },
//     {
//       id: 57,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: '31d50098-dde3-42bc-b971-5cf3ae76ca20',
//       quantity: 1
//     },
//     {
//       id: 58,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: 'f78a2ab3-bad4-4161-82b6-0aae9aa4c1d9',
//       quantity: 1
//     },
//     {
//       id: 59,
//       user_id: 'a4f806af-0912-458e-b3a2-73a7dab6b496',
//       product_id: 'f78a2ab3-bad4-4161-82b6-0aae9aa4c1d9',
//       quantity: 1
//     }
//   ]
// } DB data check krlo
