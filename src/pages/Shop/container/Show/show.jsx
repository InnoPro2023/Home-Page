import React from 'react';
import { Product } from './product';
import { PRODUCTS } from '../../../../constants';
import './show.css';

export const Show = () => {
  return (
<>
    <div className="product-show1">
      <div className="line1">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div className="line2">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}              
      </div>
    </div>
    <div className="page-number">
      <button className="page">Page 1</button>
      <button className="page">Page 2 </button>
      <button className="page">Page 3</button>
    </div>
</>
  )
}
