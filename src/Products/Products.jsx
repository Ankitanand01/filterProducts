import React from 'react'
import './Products.scss';
import { AiFillStar } from "react-icons/ai";
import { BiSolidCartAdd } from "react-icons/bi";
const Products = () => {
    return (
        <div>
            <section className="card-container">
                <section className="card">
                    <img className='card-image' src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="" />
                    <div className="card-details">
                        <h3 className="card-title">Shoes</h3>
                        <div className="card-reviews">
                            <AiFillStar className='ratings-star' /> <AiFillStar className='ratings-star' /> <AiFillStar className='ratings-star' /> <AiFillStar className='ratings-star' />
                            <span className="total-reviews">4</span>
                        </div>
                        <div className="card-price">
                            <div className="price">
                                <del>$300</del> $200
                            </div>
                            <div className="bag">
                                <BiSolidCartAdd className='bag-icon' />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Products
