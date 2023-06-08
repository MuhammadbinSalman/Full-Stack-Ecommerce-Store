import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { BiCart } from 'react-icons/bi'
import Cart from './Cart'
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
                    {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
                    <CiSearch/>
                </div>
                <input className="block w-96 py-1 pl-7 text-sm text-gray-900 border border-gray-300 rounded-md bg-white placeholder-gray-500 " placeholder="What you looking for"/>
            </div>
        </div>

    )
}


function Links() {
    return (
        <ul className="flex-col md:flex-row md:pt-0 pt-0 text-gray-950 flex gap-3 md:gap-12">
            <li>
                <Link href="#" className="nav-link text-lg md:text-">Female</Link>
            </li>
            <li>
                <Link href="#" className="nav-link text-lg md:text-">Male</Link>
            </li>
            <li>
                <Link href="#" className="nav-link text-lg md:text-">Kids</Link>
            </li>
            <li>
                <Link href="#" className="nav-link text-lg md:text-">All Products</Link>
            </li>
        </ul>
    )
}

export default function Navbar() {
    return (
        <nav className="flex w-full mx-auto max-w-sm md:px-0 px-4 md:max-w-7xl justify-between py-7 md:py-9 items-center">
            {/* left portion */}
            <div className='flex justify-center gap-28'>
                <Link href="/" className="navbar-brand">
                    <Image width={"140"} height="140" className='' src="/Logo.webp" alt="Logo" />
                </Link>
                <div className='hidden md:block'>
                    <Links/>
                </div>
            </div>
            {/* Right Portion  */}
            <div className='block md:hidden mt-1'>
                <Sheet>
                    <SheetTrigger><RxHamburgerMenu size={"28"} /></SheetTrigger>
                    <SheetContent size={"full"}>
                        <SheetHeader>
                            <SheetTitle><Image alt="logo" className='py-6 ml-4' width={"140"} height={"140"} src={"/Logo.webp"}/></SheetTitle>
                            <SheetDescription>
                                <Cart/>
                                <Links/>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
            <div className='hidden md:block'>
                <div className='flex justify-center gap-32 items-center pr-8 '>
                    <div className="navbar-search">
                        <Navsearch />
                    </div>
                    <div className="navbar-cart">
                        <Cart />
                    </div>
                </div>
            </div>
        </nav>
    )
}
