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
        <div className='flex w-full gap-10 mx-auto max-w-7xl lg:px-6 xl:px-0 flex-wrap'>
          <div>
            {
              (await check).length > 0 ? (
                (await check).map(async (product) => (
                  <div key={product._id} className="flex flex-col lg:flex-row gap-4 lg:gap-4 xl:gap-6 justify-between ">
                    <div className='flex xl:gap-6 gap-5 sm:gap-6 px-7 md:pr-0 pr-10 sm:px-7 justify-center lg:px-0 lg:gap-4'>
                      <div className='cursor-pointer'><Image width={100} height={100} src={urlForImage(product.image).url()} alt="Product Image" /></div>
                      <div><Image width={630} height={630} src={urlForImage(product.image).url()} className='' alt="Product Image" /></div>
                    </div>
                    <div className='mt-16 pl-12 sm:pl-14 lg:pl-3 xl:pl-4'>
                      <div className='my-9'>
                        <h1 className='lg:text-2xl text-3xl font-semibold'>{product.title}</h1>
                        <h2 className='text-lg lg:text-base font-semibold text-gray-400'>{product.description}</h2>
                      </div>
                      <div className='my-3'>
                        <h3 className='lg:text-xs text-sm mt-7 font-bold'>SELECT SIZE</h3>
                        <div className='flex mt-4 gap-5'>
                          {
                            sizes.map((i) => (
                              <div key={i} className='flex justify-center items-center cursor-pointer h-10 w-10 hover:shadow-xl hover:border duration-300 rounded-full '>
                                <span className='text-[18px] font-bold text-[#666666]'>{i}</span>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      <div className='mt-9 flex gap-x-12'>
                        <h3 className='font-bold text-lg'>Quantity</h3>
                        <Quantity />
                      </div>
                      <div className='items-start my-9 flex sm:flex-row flex-col-reverse gap-4'>
                        <AddToCart item={check} />
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
        <div className='bg-white py-14 px-11 sm:px-12 lg:px-14 xl:px-16 xl:h-[640px] lg:h-[700px] md:h-[800px] md:w-[90%] w-[86%] sm:w-[87%] xl:w-[1260px]'>
          <div className="relative flex items-center">
            <h1 className="md:text-9xl sm:text-8xl text-6xl text-gray-100 font-bold">Overview</h1>
            <p className=" text-[#000000] text-2xl absolute font-bold top-2/3 transform -translate-y-2/3">Product Info</p>
          </div>
          <hr className="border my-10 border-gray-300" />
          <div className='flex flex-col gap-4'>
            <div className='flex sm:flex-row flex-col lg:gap-5 flex-grow gap-6 md:gap-4  sm:gap-5 justify-between'>
              <h5 className='text-xl font-bold text-[#6d6e6e] lg:whitespace-nowrap '>PRODUCT DETAILS</h5>
              <div className=' sm:max-w-[395px] md:max-w-lg lg:max-w-xl xl:max-w-3xl'>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<span className='hidden xl:inline'><br /></span> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<span className='hidden xl:inline'><br /></span> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<span className='hidden xl:inline'><br /></span>dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<span className='hidden xl:inline'><br /></span> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt<span className='hidden xl:inline'><br /></span> mollit anim id est laborum.</p>
              </div>
            </div>
            <div className='flex justify-between sm:flex-row flex-col sm:mt-0 mt-7 gap-5 sm:gap-6 md:gap-12 lg:gap-0 flex-grow'>
              <h5 className='text-xl text-[#6d6e6e] font-bold'>PRODUCT CARE</h5>
              <ul className='list-disc md:mr-[250px] sm:mr-[140px] lg:mr-[315px] xl:mr-96'>
                <li className='text-[#212121] text-lg lg:whitespace-normal md:whitespace-nowrap'>Hand wash using cold water.</li>
                <li className='text-[#212121] text-lg lg:whitespace-normal md:whitespace-nowrap'>Do not using bleach.</li>
                <li className='text-[#212121] text-lg lg:whitespace-normal md:whitespace-nowrap'>Hang it to dry.</li>
                <li className='text-[#212121] text-lg lg:whitespace-normal md:whitespace-nowrap'>Iron on low temperature.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
