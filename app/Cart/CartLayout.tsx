import React, { FC } from 'react'

const CartLayout: FC<{ item: any }> = ({ item }) =>  {
    console.log(item, "items")
  return (
    <div>Hello {item.res} </div>
  )
}


export default CartLayout
