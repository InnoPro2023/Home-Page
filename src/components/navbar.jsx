import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import bag from '../assets/bag.png';
import logo from '../assets/zyro-image 1.png';
import searchBar from '../assets/search-icon.png';
import stripes from '../assets/3_stripes.png';
import big_x from '../assets/Big_X.png';

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
            <img src={logo} alt='Logo'/>
        </div>
        <div className="search-bar">
            <input className="search" type="text" placeholder="Tìm kiếm..." />
            <button>
                <img className="searchicon" src={searchBar} alt="searchBar" />
            </button>
        </div>
        <div className="menu-bar">
            <div><NavLink style={navLinkStyles} to='/'>Home</NavLink></div>
            <div><NavLink style={navLinkStyles} to='/about'>About</NavLink></div>
            <div><NavLink style={navLinkStyles} to='/products'>Products</NavLink></div>
            <div><NavLink style={navLinkStyles} to='/blog'>Blog</NavLink></div>
        </div>
        
        <div className='navbar-cart'>
            <img className="bag" src={bag} alt='bag' onClick={() => setToggleCart(true)}/>
            {toggleCart && (
                <div className='navbar-cart_area'>
                    <div className="sidebar">
                        <img className='x1' src={big_x} alt='x' onClick={() => setToggleCart(false)} />
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
            <img className='stripes' src={stripes} alt='stripes' onClick={() => setToggleMenu(true)}/>
            {toggleMenu && (
                <div className="navbar-smallscreen_overlay">
                    <img className='x' src={big_x} alt='x' onClick={() => setToggleMenu(false)} />
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
