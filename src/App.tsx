import { title } from 'process';
import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details';
import NavBar from './Components/NavBar';

interface Data {
  total: props
  cartItems: props[];
  addToCart: (clickedItem: props) => void;
}

export type props = {
  id:number
  title: string;
  image: string;
  price: number
}
function App() {
  const [cartOpen, setCartOpen] = useState(false);
  console.log(cartOpen)

const [data, setData]= useState<props[]>([])
const [isLoading, setIsLoading] = useState<Boolean>(false)
const [addToCart, setAddToCart] =useState<props []>([])

  useEffect(()=>{
    setIsLoading(true)
    fetch('https://fakestoreapi.com/products')
    .then(Response => Response.json())
      .then(respond => {
        setIsLoading(false)
        setData(respond) })
  }, [])

   const handleAddToCart =(CartType:props) =>{
  setAddToCart(prev=> [...prev, CartType])

  }
  // console.log(addToCart.length)
  return (
    <div className="App">
        <NavBar total={addToCart.length} setCartOpen={setCartOpen} cartOpen={cartOpen}/>
       
    <div className='details'>
        <div>
          {cartOpen && addToCart.map(items=><CartList
          image={items.image} title={items.title}
          price={items.price}/>)}
        </div>
      {isLoading && <div className='loading'>Loading please wait...</div>}
        {!isLoading && data.map(item => <Details
          id={item.id} image={item.image}
          title={item.title} price={item.price}
          handleAddToCart={handleAddToCart}
        />)}
    </div>
    </div>
  );
}

export default App;
type cartProps ={
title:string;
image:string;
price:number;
}
export const CartList =({title, image, price}:cartProps)=>{
return (
  <div>
    <h2>{title}</h2>
    <img src={image}/>
    <div>{price}</div>
  </div>
)
}
