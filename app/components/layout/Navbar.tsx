"use client"
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { BiCart } from 'react-icons/bi'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import { useState } from 'react'
import { cookies } from 'next/dist/client/components/headers';
import { Mproducts } from '@/app/AllProducts/page'
import { Dbproducts } from '@/app/Cart/page'
import CartIcon from './CartIcon'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { RxHamburgerMenu } from 'react-icons/rx'
import Image from 'next/image'
import { CiSearch } from 'react-icons/ci'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"


function Navsearch() {
    return (
        <div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <CiSearch />
                </div>
                <input className="block w-full lg:w-[375px] xl:w-96  py-1 pl-7 text-sm text-gray-900 border border-gray-300 rounded-md bg-white placeholder-gray-500 " placeholder="What you looking for" />
            </div>
        </div>

    )
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

function Links() {
    return (
        <ul className="flex-col md:flex-row md:pt-0 pt-0 text-gray-950 flex justify-between  gap-3 md:gap-12 lg:gap-5 xl:gap-12">
            <li>
                <Link href="/Female" className="nav-link text-lg md:text-lg lg:text-base xl:text-lg">Female</Link>
            </li>
            <li>
                <Link href="/Male" className="nav-link text-lg md:text-lg lg:text-base xl:text-lg">Male</Link>
            </li>
            <li>
                <Link href="/Kids" className="nav-link text-lg md:text-lg lg:text-base xl:text-lg">Kids</Link>
            </li>
            <li>
                <Link href="/AllProducts" className="nav-link text-lg md:text-lg lg:text-base whitespace-nowrap xl:text-lg">All Products</Link>
            </li>
        </ul>
    )
}

export default function Navbar() {
    const res: { res: Dbproducts[] } = getData()
    console.log("res yeh", res)
    // const totalQuantity = res.res.length;
    // const [cartTotal, setCartTotal] = useState(totalQuantity);
    return (
        <nav className="flex w-full mx-auto md:px-9 xl:px-4 px-4 max-w-7xl justify-between py-9 items-center">
            {/* left portion */}
            <div className='flex flex-grow justify-between lg:max-w-lg xl:max-w-2xl pr-4'>
                <Link href="/" className="navbar-brand">
                    <Image width={"140"} height="140" className='' src="/Logo.webp" alt="Logo" />
                </Link>
                <div className='hidden lg:block'>
                    <Links />
                </div>
            </div>
            {/* Right Portion  */}
            <div className='block lg:hidden mt-1'>
                <Sheet>
                    <SheetTrigger><RxHamburgerMenu size={"28"} /></SheetTrigger>
                    <SheetContent size={"full"}>
                        <SheetHeader>
                            <SheetTitle><Image alt="logo" className='py-6 ml-4' width={"140"} height={"140"} src={"/Logo.webp"} /></SheetTitle>
                            <SheetDescription>
                                <CartIcon />
                                <Links />
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className='hidden lg:block'>
                <div className='flex justify-center gap-32 lg:gap-14 items-center pr-8 '>
                    <div className="navbar-search">
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger><Navsearch /></TooltipTrigger>
                                <TooltipContent>
                                    <h1>Search</h1>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="navbar-cart">
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger><Link href="/Cart">
                                    <div className='relative mt-64 md:mt-0'>
                                        <BiCart size={"43"} className='p-1 hover:scale-125 active::scale-150 transition duration-500 border-4 border-gray-100 bg-gray-100 rounded-full' />
                                        <div className='bg-red-500 rounded-full h-4 w-4 absolute top-0 right-1 text-[10px] pb-1 text-gray-100 flex justify-center items-start font-semibold'>2</div>
                                    </div>
                                </Link></TooltipTrigger>
                                <TooltipContent>
                                    <h1>Products Cart </h1>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
        </nav>
    )
}
