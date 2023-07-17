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
    const Femaledata: Mproducts[] = await getMaleData()
  return (
    <div className='grid lg:grid-cols-4 justify-center max-w-sm md:px-0 px-4 md:max-w-[1200px] container gap-4'>
        {Femaledata.map((item) => {
          return (
            <>
              <div>
                <ProductLayout key={item.id} item={item} />
              </div>
            </>
          )
        })}
      </div>
  )
}
