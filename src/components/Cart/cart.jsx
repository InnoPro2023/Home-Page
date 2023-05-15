import React, { useContext } from 'react'
import { PRODUCTS } from '../../constants'
import { ShopContext } from '../../context/shopContext'
import { CartItem } from './cart-item';
{/*import "./cart.css";*/}

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className='cart'>
        <div className='cartItems'>
            {PRODUCTS.map((product) => {
                if(cartItems[product.id] !== 0) {
                    return <CartItem data={product} />
                }
            })}
        </div>
    </div>
  )
}
