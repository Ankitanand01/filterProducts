import React from 'react'
import './Sidebar.scss'
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="logo-container">
                <h1>Logo</h1>
            </div>

            <Category />
            <Price />
            <Colors />
        </section>
    )
}

export default Sidebar;
