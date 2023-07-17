import React from 'react'
import EmptyCartUI from './EmptyCartUI'
import { Mproducts } from '../AllProducts/page'
import { cookies } from 'next/dist/client/components/headers';
import { data } from 'autoprefixer';



// const dataCart=async()=>{
//     const res = await fetch("/api/cart", {
//         method: "GET",
//     })
//     const result = await res.json()
// }
// const fetchCartData = async () => {
//   const res = await fetch("/api/cart?user_id=" + cookies().get("user_id")?.value);
//   const data = await res.json();
//   return data;
// };

const getData = async () => {
  try {
    const res = await fetch('http://127.0.0.1:3000/api/cart', {
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    })
    if (!res) {
      throw new Error("Failed API")
    }
    const result = await res.json()
    console.log(result, "yeh ha")
  } catch (err) {
    console.log(err)
  }

}
export default async function page() {
  const res = await getData()
  // console.log(res)
  return (
    <>
    {/* {res.map((single: Mproducts) => {
      return (
          <div key={single._id}>
              <div className='flex flex-col gap-1 mt-3'>
                  <h1 className='text-[16px] font-semibold text-[#212121]'>{single.title}</h1>
                  <h2 className='text-[#888888]'>{single.description}</h2>
                  <h2 className='text-[#212121] text-lg font-bold'>${single.price}</h2>
              </div>
          </div>
      )
  })} */}
      {/* <EmptyCartUI /> */}
    </>
  )
}
