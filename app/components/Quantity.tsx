'use client'
import React, {useState} from 'react'

export default function Quantity() {
    const [num, setNum] = useState(1)
    return (
        <div className='flex gap-x-3 items-center'>
            <button className='text-2xl h-9 w-9 bg-[#f1f1f1] rounded-full center cursor-pointer ' onClick={()=>{
                if(num>1){
                    return setNum(num -1)
                }}}>-</button>
            <span>{num}</span>
            <button className='border-2 text-2xl border-black h-9 w-9 rounded-full center cursor-pointer' onClick={()=>(setNum(num +1))}>+</button>
        </div>
    )
}
