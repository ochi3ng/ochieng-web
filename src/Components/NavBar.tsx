import React from 'react'
import { CgShoppingCart } from 'react-icons/cg';
import './NavBar.css'
import Cart from './Cart/Cart';
type prop ={
total:number;
cartOpen:boolean
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function NavBar({total, cartOpen, setCartOpen}: prop) {
  
  return (
    <div className='navbar'>
      <div className='welcome'>WELCOME TO OUR SHOP</div>
      <div className='navdetails'>
              <div>About Us</div>
              <div>Home</div>
              <div>Services</div>
              <div>More</div>
      </div>
      <div>
        
        <CgShoppingCart className='icon' onClick={()=>setCartOpen(true)} />
        <div className='number'>{total}</div>
      </div>
    </div>
  )
}

export default NavBar