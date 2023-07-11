import React from 'react'
import { AiOutlineHeart, AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";
import './Nav.scss'
const Nav = () => {
    return (
            <nav>
                <div className="nav-container">
                    <input type="text" className='search-input' name="" id="" placeholder='Enter your search shoes' />
                </div>

                <div className="profile-container">
                    <a href="https://flipkart.com">
                        <AiOutlineHeart className='nav-icons' />
                    </a>
                    <a href="https://flipkart.com">
                        <AiOutlineUserAdd className='nav-icons' />
                    </a>
                    <a href="https://flipkart.com">
                        <AiOutlineShoppingCart className='nav-icons' />
                    </a>
                </div>
            </nav>
    )
}

export default Nav
