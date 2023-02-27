import CartItems from "./CartItems"
import type {props} from '../../App'


type Props ={
    total:props
    cartItems:props[];
    addToCart:(clickedItem:props)=>void;
}
const Cart = ({total, cartItems, addToCart}:Props) =>{

return(
 <div>
    <h1>Your shopping Cart</h1>
        {cartItems.length === 0 ? <p>No items in Cart.</p>:null}
        {cartItems.map(item=>(
            
            <CartItems
            total={total}
            key={total.id}
            addToCart={addToCart}
             /> 
        ))}
 </div>
)
}
export default Cart