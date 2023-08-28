import React from 'react'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import ProductLayout from '../../components/ProductLayout'


export interface Mproducts {
    price: number,
    _id: string,
    title: string,
    description: string,
    image: IImage
    category: {
      name: string
    }
  }
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
export default async function page() {
    const data: Mproducts[] = await getProductData()
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 2sm:grid-cols-2 grid-cols-1 justify-center max-w-sm px-9 2sm:px-8 sm:px-20 2sm:gap-6 mx-auto pb-6 2sm:max-w-full md:max-w-[1350px] container md:px-9 lg:px-10 md:gap-3 md:gap-x-7 lg:gap-4 lg:gap-x-9'>
        <ProductLayout item={data}/>
      </div>
  )
}
