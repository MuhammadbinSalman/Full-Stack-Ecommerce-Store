import Image from 'next/image'
import React from 'react'

export default function NotFoundError() {
  return (
    <div className='flex pt-5 pb-20 flex-col justify-center items-center'>
            <Image width={"400"} height={"400"} src={"/404.svg"} alt='404 error product not found' />
            <h1 className='font-bold text-2xl'> No Products Found :(</h1>
          </div>
  )
}
