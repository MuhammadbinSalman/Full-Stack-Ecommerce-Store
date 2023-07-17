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
    <div className='grid lg:grid-cols-4 justify-center max-w-sm md:px-0 px-4 md:max-w-[1200px] container gap-4'>
        <ProductLayout item={data}></ProductLayout>
        {/* {data.map((item) => {
          return (
            <>
              <div>
                <ProductLayout key={item.id} item={item} />
              </div>
            </>
          )
        })} */}
      </div>
  )
}
