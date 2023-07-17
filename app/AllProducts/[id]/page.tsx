import React from 'react'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import { Mproducts } from '../page'
import { product } from '@/sanity/product'
import { category } from '@/sanity/category'
import ProductLayout from '@/components/ProductLayout'
import Image from 'next/image'
import NotFoundError from '@/app/components/NotFoundError'
import Quantity from '@/app/components/Quantity'
import { ButtonMain } from '@/app/components/Hero'
import AddToCart from './AddToCart'
//import AddToCart from '@/app/AllProducts/[id]/AddToCart'


const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']{
    price,
    _id,
    title,
    description,
    image,
    category -> {name}
  }`)
  return res
}
const getfilteredProduct = async (title: string) => {
  const data: Mproducts[] = await getProductData()
  const datafiltered = data.filter((product) => product.title.trim() === title)
  return datafiltered
}

export default async function page({ params }: { params: { id: string } }) {
  const currentProductName = params.id.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const check = await getfilteredProduct(currentProductName)
//   const handleAddToCart = async () => {
//     const res = await fetch("/api/cart", {
//         method: "POST",
//         body: JSON.stringify({
//             product_id: check._id
//         })
//     })
//     const result = await res.json()
//     // console.log(result)
// }
  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  return (
    <>
      <div className='bg-[#fcfcfc] gap-16 flex flex-col justify-center py-16 items-center w-full h-full'>
        <div className='flex w-full gap-10 mx-auto max-w-7xl  flex-wrap'>
          <div>
            {
              (await check).length > 0 ? (
                (await check).map(async (product) => (
                  <div key={product._id} className="flex gap-6 justify-between">
                    <div className='cursor-pointer'><Image width={100} height={100} src={urlForImage(product.image).url()} alt="Product Image" /></div>
                    <div><Image width={630} height={630} src={urlForImage(product.image).url()} alt="Product Image" /></div>
                    <div className='mt-16 pl-4'>
                      <div>
                        <h1 className='text-2xl font-semibold'>{product.title}</h1>
                        <h2 className='text-base font-semibold text-gray-400'>{product.description}</h2>
                      </div>
                      <div>
                        <h3 className='text-xs mt-7 font-bold'>SELECT SIZE</h3>
                        <div className='flex mt-2 gap-5'>
                          {
                            sizes.map((i) => (
                              <div key={i}  className='center h-10 w-10 hover:shadow-xl hover:border duration-300 rounded-full '>
                                <span className='text-[18px] font-bold text-center text-[#666666]'>{i}</span>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      <div className='mt-6 flex gap-x-7'>
                        <h3 className='font-bold'>Quantity</h3>
                        <Quantity />
                      </div>
                      <div className='items-center my-9 flex gap-4'>
                        <AddToCart item={check}/>
                        <h2 className='text-3xl font-bold'>${product.price}.00</h2>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <NotFoundError />
              )
            }
          </div>
        </div>
        <div className='bg-white py-14 px-16 h-[640px] w-[1260px]'>
          <div className="relative flex items-center">
            <h1 className="text-9xl text-gray-100 font-bold">Overview</h1>
            <p className=" text-[#000000] text-2xl absolute font-bold top-2/3 transform -translate-y-2/3">Product Info</p>
          </div>
          <hr className="border my-10 border-gray-300" />
          <div className='flex flex-col gap-4'>
            <div className='flex gap-20 justify-between'>
              <h5 className='text-xl font-bold text-[#6d6e6e]'>PRODUCT DETAILS</h5>
              <p className='text-lg '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br /> mollit anim id est laborum.</p>
            </div>
            <div className='flex gap-80'>
              <h5 className='text-xl text-[#6d6e6e] font-bold'>PRODUCT CARE</h5>
              <ul className='list-disc ml-2'>
                <li className='text-[#212121] text-lg'>Hand wash using cold water.</li>
                <li className='text-[#212121] text-lg'>Do not using bleach.</li>
                <li className='text-[#212121] text-lg'>Hang it to dry.</li>
                <li className='text-[#212121] text-lg'>Iron on low temperature.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
