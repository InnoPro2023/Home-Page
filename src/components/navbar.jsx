import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import images from '../constants/images';

const navLinkStyles = ({ isActive }) => {
	return {
		fontWeight: isActive ? 'bold' : 'normal',
        color: 'black',
		textDecoration: isActive ? 'none' : 'none',

	}
}

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleCart, setToggleCart] = React.useState(false);

  return (
<>
    <div className="header">
        <div className='logo'>
            <img src={images.logo} alt='Logo'/>
        </div>
        <div className="search-bar">
            <input className="search" type="text" placeholder="Tìm kiếm..." />
            <button>
                <img className="searchicon" src={images.searchIcon} alt="searchBar" />
            </button>
        </div>
        <div className="menu-bar">
            <div><NavLink style={navLinkStyles} to='/'>Home</NavLink></div>
            <div><NavLink style={navLinkStyles} to='/about'>About</NavLink></div>
            <div><NavLink style={navLinkStyles} to='/product'>Products</NavLink></div>
            <div><NavLink style={navLinkStyles} to='/blog'>Blog</NavLink></div>
        </div>
        
        <div className='navbar-cart'>
            <img className="bag" src={images.bag} alt='bag' onClick={() => setToggleCart(true)}/>
            {toggleCart && (
                <div className='navbar-cart_area'>
                    <div className="sidebar">
                        <img className='x1' src={images.x} alt='x' onClick={() => setToggleCart(false)} />
                        <div className="title">
                            <h1> Your Cart Items </h1>
                        </div>
                        <div className="cartItems">

                        </div>
                    </div>
                </div>
            )}
        </div>
        

        <div className='navbar-smallscreen'>
            <img className='stripes' src={images.stripes} alt='stripes' onClick={() => setToggleMenu(true)}/>
            {toggleMenu && (
                <div className="navbar-smallscreen_overlay">
                    <img className='x' src={images.big_x} alt='x' onClick={() => setToggleMenu(false)} />
                    <div className='navbar-smallscreen_links'>
                        <div><NavLink style={navLinkStyles} to='/'>Home</NavLink></div>
                        <div><NavLink style={navLinkStyles} to='/about'>About</NavLink></div>
                        <div><NavLink style={navLinkStyles} to='/products'>Products</NavLink></div>
                        <div><NavLink style={navLinkStyles} to='/blog'>Blog</NavLink></div>
                    </div>
                </div>
            )}
        </div>
    </div>
</>  
  )
}
