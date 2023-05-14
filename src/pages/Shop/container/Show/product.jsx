import React, { useContext } from 'react';
import { ShopContext } from '../../../../context/shopContext';
import { images } from '../../../../constants';

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemsAmount = cartItems[id];
  return (
    <div className='product'>
      <img className='product-image' src={productImage} alt='a' />
      <div className='description'>
        <div className="product-name"> {productName} </div>
        <div className='product-price'> {price} vnđ </div>
      </div>
      <button className='hehe' onClick={() => addToCart(id)}>
        <img className='order' src={images.orderButton} alt='a' />
      </button>
    </div>
  )
}

{/* product -> product-image, description -> product-name, pdoduct-price, hehe -> order */}
