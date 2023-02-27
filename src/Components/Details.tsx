import React from 'react'
import './Details.css'
import type {props} from '../App'
interface Data {
    id:number;
    title:string;
    price:number;
    image:string;
    handleAddToCart:(Data:props)=>void


}

function Details({id, title, image, price, handleAddToCart}:Data) {
  let data ={id, title, image, price}
  return (
    <div className='header'>
      <h1 className='title'>{title}</h1>
      <img className="image" src={image} alt=''/>
      <h1>Price. ${price.toFixed(2)}</h1>
      <button onClick={()=>handleAddToCart(data)}>Add To Cart</button>
    </div>
  )
}

export default Details
