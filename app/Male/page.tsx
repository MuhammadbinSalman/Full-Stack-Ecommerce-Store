import ProductLayout from '@/components/ProductLayout'
import React from 'react'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import { Mproducts } from '../AllProducts/page'

const getMaleData = async () => {
  const res = await client.fetch(`*[_type=='product' && category->name == 'Male']{
        price,
        _id,
        title,
        description,
        image,
        category -> {
          name
        }}`)
  return res
}
export default async function page() {
  const Maledata: Mproducts[] = await getMaleData()
  return (
    <div className='grid sm:pb-16 md:pb-36 lg:grid-cols-4 md:grid-cols-3 2sm:grid-cols-2 grid-cols-1 justify-center max-w-sm px-9 2sm:px-8 sm:px-20 2sm:gap-6 mx-auto 2sm:max-w-full md:max-w-[1350px] container md:px-9 lg:px-10 md:gap-3 md:gap-x-7 lg:gap-4 lg:gap-x-9'>
      <ProductLayout item={Maledata} />
    </div>
  )
}
