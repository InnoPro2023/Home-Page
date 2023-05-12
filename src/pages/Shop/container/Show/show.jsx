import React from 'react';
import { Product } from './product';
import './show.css';

export const Show = () => {
  return (
<>
    <div className="product-show1">
      <div className="line1">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="line2">
        <Product />
        <Product />
        <Product />                
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
