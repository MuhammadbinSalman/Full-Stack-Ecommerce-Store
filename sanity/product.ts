import { title } from "process";
import { defineType } from "sanity";

export const product={
  name:'product',
  type:'document',
  title:"Product",
  fields: [
    {
        name:'title',
        title:"Title",
        type:"string"
    },
    {
        name:'description',
        title:"Product Description",
        type:"string"
    },
    {
      name:'price',
      title:'Product Price',
      type:'number'
    },
    {
        name:'image',
        title:"Product Image",
        type:"image"
    },
    defineType({
      type:"reference",
      name:"category",
      title:"Product Category",
      to:[
        {
          type:"category"
        }
      ]
    })
  ]
}
