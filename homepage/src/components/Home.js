import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive }) => {
	return {
		fontWeight: 'bold',
		color: 'white',
		textDecoration: 'none',
	}
}
 class Home extends React.Component{
    render(){
        return(
    <>
        <div className="frame1">
            <div className="header">
                <img className="logo" src="image/logo.png" alt="Logo"/>
                <form className='search'>
                    <input type="text" placeholder="What are you looking for?..."/>
                        <button type="submit">Search</button>
                </form>
                <img className="contact-us" src="image/CONTACT US.png" alt="Contact Us"/>
                <img className="Social" src="image/SOCIAL MEDIA.png" alt="Social"/>
            </div>
            <div className="header2">
                <div className="box1">
                    <div>Shop by categories</div>
                    <div><NavLink style={navLinkStyles} to="About">About</NavLink></div>
                    <div>Blog</div>
                    <div>Contact</div>
                </div>
                <div className="box2">
                    <img src="image/search.png" alt="a"/>
                    <img src="image/acc.png" alt="a"/>
                    <img src="image/like.png" alt="a"/>
                    <img src="image/cart.png" alt="a"/>
                </div>
            </div>
            <div className="header3">
                <div className="slogan">
                    <div>CHẢ GIÒ</div>
                    <div>CHÀ BÔNG</div>
                    <div className="adjust">CHẤT LƯỢNG</div>
                </div>
                <img className="shopnow" src="image/go to shop.png" alt="a"/>
                <img className="elispe" src="image/Ellipse 32.png" alt="a"/>
            </div>
        </div>
        <div className="frame2">
            <div className="letter">SPECIAL PRODUCTS FOR MOST PEOPLE</div>
        </div>
        <div className="frame3">
            <div className="box1">
                <div className="child1">ABOUT</div>
                <div className="child2">NHẤT NAM HƯƠNG</div>
                <div className="child3">MORE ABOUT</div>
            </div>
            <div className="box2">
                <div className="child1"> description description description description description description desdesdes here :)</div>
                <div className="child2"> description description descriptionption description description description descriptioscription description diption description description description description description descriptionion description description description desc</div>
            </div>
            <img className="box3" src="image/vegetable.png" alt="a"/>
        </div>
        <div className="frame4">
            <button className="box1">TẤT CẢ SẢN PHẨM</button>
            <div className="container1">
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
            </div>
            <div className="container2">
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
            </div>
            <div className="container3">
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
                <div className="invisible-box">
                    <div className="white-box"></div>
                    <div className="name-product">Tên Sản Phẩm</div>
                    <div className="price-product">00.00 VNĐ</div>
                </div>
            </div>
        </div>
        <img className="frame5" src="image/Frame 5.png" alt="a"/>
        <img className="frame6" src="image/Frame 6.png" alt="a"/>
        <div className="frame7">
            <div className="invisible-box">
                <div className="box1"> GET IN TOUCH</div>
                <div className="box2">we will make sure that you are the first one to get notification about cur new products</div>
                <div className="box3">Member ships,sale off and more.</div>
            </div>
            <div className="invisible-box2">
                <div className="child1">
                    <div className="letter">Name</div>
                    <input type="grey-box" placeholder="Your full name"/>
                </div>
                <div className="child2">
                    <div className="letter">Email</div>
                    <input type="grey-box" placeholder="Your valid email"/>
                </div>
                <div className="child2">
                    <div className="letter">Phone number</div>
                    <input type="grey-box" placeholder="Your phone number"/>
                </div>
                <div className="child2">
                    <div className="letter">Password</div>
                    <input type="grey-box" placeholder="Create a password"/>
                </div>
                <a className="create" href="##">Create account</a>
            </div>
        </div>
        <img className="frame8" src="image/Frame 8.png" alt="a"/>
        <img className="frame9" src="image/Frame 9.png" alt="a"/>
    </>
        )
    }
}
    
export default Home;