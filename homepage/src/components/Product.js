import React from 'react';
import "./css/Product.css";

class Product extends React.Component {
    render(){
    return (
<div>
    <div className="header">
        <img className="logo" src="imageProduct/logo.png" alt="a"/>
        <form className="search">
            <input type="text" placeholder="What are you looking for?..."/>
            <button type="submit">Search</button>
        </form>
        <img className="contact-us" src="imageProduct/CONTACT US.png" alt="a"/>
        <img className="Social" src="imageProduct/SOCIAL MEDIA.png" alt="a"/>
    </div>
    <div className="header2">
        <div className="box1">
            <div>Shop by categories</div>
            <div>About</div>
            <div>Blog</div>
            <div>Contact</div>
        </div>
        <div className="box2">
            <img src="imageProduct/search.png" alt="a"/>
            <img src="imageProduct/acc.png" alt="a"/>
            <img src="imageProduct/like.png" alt="a"/>
            <img src="imageProduct/cart.png" alt="a"/>
        </div>
    </div>
    
    <div className="frame2">
        <div className="invisible1">
            <img src="imageProduct/sanpham1.png" alt="a"/>
            <div className="hello">
                <div className="first">Product Name</div>
                <div className="second">100.000 VNĐ</div>
                <div className="third">Desciption: Brown Sugar, Tomato Puree (Water, Tomato Paste), Distilled Vinegar, Molasses, Corn Starch, Salt, Spices, Dried Onion, Garlic Powder.</div>
            </div>
        </div>
        <div className="invisible2">
            <div className="first">

            </div>
            <button className="second">
                <div>Thêm vào giỏ</div>
            </button>
        </div>
    </div>
    <div className="frame3">
        <div className="review">Cảm nhận của khách hàng</div>
        <div className="first">
            <img src="imageProduct/profile.jpg" className="account" alt="a"/>
            <input className="opinion" placeholder="Cảm nhận của bạn" />
        </div>
    </div>
    <div className="frame4">
        <div className="first">Những sản phẩm khác...</div>
        <div className="second">
            <div className="box">
                <img src="imageProduct/chả quế.jpg" alt="a"/>
                <div>Chả Quế</div>
                <div className="price">100.000 VNĐ</div>    
            </div>
            <div className="box">
                <img src="imageProduct/Cha Bong.jpg" alt="a"/>
                <div>Chà Bông</div>
                <div className="price">100.000 VNĐ</div>
            </div>
            <div className="box">
                <img src="imageProduct/Giò Lụa.jpg" alt="a"/>
                <div>Giò Lụa</div>
                <div className="price">100.000 VNĐ</div>
            </div>
            <div className="box">
                <img src="imageProduct/Nem chua.jpg" alt="a"/>
                <div>Nem Chua</div>
                <div className="price">100.000 VNĐ</div>
            </div>
        </div>
        <button className="see-more">Thêm</button>
    </div>    
    <img className="frame9" src="imageProduct/Frame 9.png" alt="a"/>
</div>
    )
    }
}
export default Product;