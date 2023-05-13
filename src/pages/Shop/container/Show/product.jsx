import React from 'react';
import { images } from '../../../../constants';

export const Product = () => {
  return (
    <div className="product">
        <img className="product-image" src={images.chaLua} alt='a'/>
        <div className="product-name">Chả lụa</div>
        <img className="product-price" src={images.productPrice} alt='q'/>
        <button className="hehe">
{/*            <img className="order" src={images.orderButton} alt='h'/> */}        </button>
    </div>
  )
}
