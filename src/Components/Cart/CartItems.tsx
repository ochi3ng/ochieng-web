import * as React from 'react';
import type {props} from '../../App'
type prop = {
  total:props;
  addToCart:(clickedItem:props)=>void
}

const CartItems = ({total, addToCart}:prop) => {
  return (
    <div>
      <h3>{total.title}</h3>
      <p>{total.image }</p>
      <p>{total.price }</p>
      <button onClick={()=>addToCart}>+</button>
      console.log(addToCart)
    </div>
  );
}
export default CartItems;