import React, { useContext } from 'react';
import { PRODUCTS } from '../../constants';
import { ShopContext } from '../../context/shopContext';
import { images } from '../../constants';
import "./checkout.css";

export const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <>
    <div className="second">
      <div className="thong-tin">
         <div>Thông Tin Thanh Toán</div>
         <div className="name-sdt">
            <div className="ten">
               <div>Họ và tên</div>
               <input type="text" className="input-box" />
            </div>
            <div className="sdt">
               <div>Số điện thoại</div>
               <input type="text" className="input-box" />
            </div>
         </div>
         <div className="dia-chi">
            <div>Địa chỉ</div>
            <input type="text" className="input-box" />
         </div>
         <div className="thanh-toan">
            <div>Phương thức thanh toán</div>
            <div className="phuong-thuc">
               <button>
                  <img className="vector-31" src={images.arrowDown} alt="a"/>
               </button>
            </div>
         </div>
         <div className="ghi-chu">
            <div>Ghi chú cho người bán</div>
            <input type="text" className="input-box" />
         </div>
         <div>*Đơn hàng chuyển phát nhanh tại quận 3, Tp Hồ Chí Minh</div>
         <button className="b1">
            <img className="b2" src={images.checkOut} alt='a' />
         </button>
      </div>
      <div className="don-hang">
         <div>Đơn hàng của bạn</div>
         <div className="frame1"> 
            <div className="sanpham1">
               <img className="sp" src={images.chaLua} alt='a' />
               <div className="ps">
                  <div className="checkout-product-name">Chả giò</div>
                  <div className="khoiluong">Khối Lượng: 800 Gram</div>
                  <div className="soluong">Số lượng: 1</div>
               </div>
               <img className="price" src={images.price} alt='l'/>
            </div>
            {/*<div className="sanpham1">
               <img className="sp" src="images/sanpham.png" />
               <div className="ps">
                  <div className="product-name">Chả giò</div>
                  <div className="khoiluong">Khối Lượng: 800 Gram</div>
                  <div className="soluong">Số lượng: 1</div>
               </div>
               <img className="price" src="images/price.png" />
            </div>
            <div className="sanpham1">
               <img className="sp" src="images/sanpham.png" />
               <div className="ps">
                  <div className="product-name">Chả giò</div>
                  <div className="khoiluong">Khối Lượng: 800 Gram</div>
                  <div className="soluong">Số lượng: 1</div>
               </div>
               <img className="price" src="images/price.png" />
            </div>*/}
            
         </div>
         <img className="vector-30" src={images.lineVector} alt='b' />
         <div className="hiha">
            <img className="tong" src={images.total} alt='k' />
            <div className="tonggia">200.000 VNĐ</div>
         </div>
      </div>
   </div>

    </>
  )
}
