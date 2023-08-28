import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { CalendarDays } from 'lucide-react'


export function ButtonMain({ props }: any) {
  return (
    <Link href={"/AllProducts"} className='w-72'>
      <button className='h-[61px] md:w-80 lg:w-60 flex-grow w-64 2sm:w-72  bg-[#212121] text-white border-2 border-gray-500 items-center flex justify-center font-semibold gap-2 text-lg'><CgShoppingCart size={"28"} />{props}</button>
    </Link>
  )

}

export default function Hero() {
  const images = [
    { alt: 'bustle logo', src: '/bazaar.webp', heading: "@Harpers Bazaar", description: "Harpers Bazaar – An esteemed emblem of fashion's legacy.", howlong: "Since 1867", link: "https://www.harpersbazaar.com" },
    { alt: 'versace logo', src: '/bustle.webp', heading: "@Bustle", description: "A distinctive emblem in the realm of modern lifestyle and culture.", howlong: "Since 2013", link: "https://www.bustle.com" },
    { alt: 'instyle logo', src: '/versage.webp', heading: "@Versace", description: "An enduring symbol of luxury and innovation in the fashion world", howlong: "1978", link: "https://www.versace.com/row/en/" },
    { alt: 'bazaar logo', src: '/instyle.webp', heading: "@InStyle", description: "A timeless beacon of style inspiration and trend-setting", howlong: "1994", link: "https://www.instyle.com" }
  ];
  return (
    <div className='w-full container grow mx-auto xl:pl-4 md:pl-8 lg:pl-7 px-8 max-w-7xl py-9'>
      <div className='flex justify-between'>
        <div className='flex flex-col justify-center sm:justify-start md:pt-10 gap-9'>
          <div className='h-10 w-[120px] bg-blue-100 text-blue-700 rounded-lg items-center flex justify-center font-bold'>Sale 70%</div>
          <div className='font-bold md:text-6xl md:pr-5 xl:pr-10 text-5xl leading-tight'>An Industrial Take on StreetWear</div>
          <div className='text-gray-600 max-w-sm'>Anyone can beat you but no-one can beat your outfit as long as you wear dine outfits.</div>
          <ButtonMain props="Start Shopping" />
          <div className='md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 sm:gap-y-0 sm:gap-x-0'>
            {images.map((image, index) => {
              return (
                <div key={index}>
                  <HoverCard openDelay={100}>
                    <HoverCardTrigger>
                        <Image alt={image.alt} src={image.src} width={"100"} height={"100"} />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold"><Link href={image.link} target='_blank'>{image.heading}</Link></h4>
                        <p className="text-sm">
                          {image.description}
                        </p>
                        <div className="flex items-center pt-2">
                          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Since {image.howlong}
                          </span>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              )
            })}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className='bg-[#ffece3] overflow-visible flex justify-center items-center rounded-full w-[580px] h-[600px]' >
            <Image alt='hero Image' height={"1200"} className='w-full h-full' width={"1200"} src={"/heroimage.webp"} />
          </div>
        </div>
      </div>
    </div>
  )
}