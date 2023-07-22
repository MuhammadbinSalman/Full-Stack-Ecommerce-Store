import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { BiCart } from 'react-icons/bi'
import CartIcon from './CartIcon'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from 'react-icons/rx'
import Image from 'next/image'
import { CiSearch } from 'react-icons/ci'

function Navsearch() {
    return (
        <div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <CiSearch/>
                </div>
                <input className="block w-full lg:w-[375px] xl:w-96  py-1 pl-7 text-sm text-gray-900 border border-gray-300 rounded-md bg-white placeholder-gray-500 " placeholder="What you looking for"/>
            </div>
        </div>

    )
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
    return (
        <nav className="flex w-full mx-auto max-w-sm md:px-9 xl:px-4 px-4 md:max-w-7xl justify-between py-7 md:py-9 items-center">
            {/* left portion */}
            <div className='flex flex-grow justify-between lg:max-w-lg xl:max-w-2xl pr-4'>
                <Link href="/" className="navbar-brand">
                    <Image width={"140"} height="140" className='' src="/Logo.webp" alt="Logo" />
                </Link>
                <div className='hidden lg:block'>
                    <Links/>
                </div>
            </div>
            {/* Right Portion  */}
            <div className='block lg:hidden mt-1'>
                <Sheet>
                    <SheetTrigger><RxHamburgerMenu size={"28"} /></SheetTrigger>
                    <SheetContent size={"full"}>
                        <SheetHeader>
                            <SheetTitle><Image alt="logo" className='py-6 ml-4' width={"140"} height={"140"} src={"/Logo.webp"}/></SheetTitle>
                            <SheetDescription>
                                <CartIcon/>
                                <Links/>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
            <div className='hidden lg:block'>
                <div className='flex justify-center gap-32 lg:gap-14 items-center pr-8 '>
                    <div className="navbar-search">
                        <Navsearch />
                    </div>
                    <div className="navbar-cart">
                        <CartIcon />
                    </div>
                </div>
            </div>
        </nav>
    )
}
