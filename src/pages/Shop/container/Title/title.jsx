import React from 'react'
import { images } from '../../../../constants'
import './title.css';

export const Title = () => {
  return (
    <>
    <img className="product-title" src={images.productTitle} alt='a' />
      <div className="page-number">
        <button className="page">Page 1</button>
        <button className="page">Page 2 </button>
        <button className="page">Page 3</button>
      </div>
    </>
  )
}
