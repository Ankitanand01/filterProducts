import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BiSolidCartAdd } from "react-icons/bi";
import Json from '../db/data.json';
function Card() {
  return (
<>

    {Json.productsData.map((Card) => {
        return (
          <section className="card">
            <img className='card-image' src={Card.img} alt="" />
            <div className="card-details">
              <h3 className="card-title">{Card.title}</h3>
              <div className="card-reviews">
                <AiFillStar className='ratings-star' /> <AiFillStar className='ratings-star' /> <AiFillStar className='ratings-star' /> <AiFillStar className='ratings-star' />
                <span className="total-reviews">{Card.reviews}</span>
              </div>
              <div className="card-price">
                <div className="price">
                  <del>{Card.prevPrice}</del> {Card.newPrice}
                </div>
                <div className="bag">
                  <BiSolidCartAdd className='bag-icon' />
                </div>
              </div>
            </div>
          </section>
        )
      })
    }
</>
  )
}

export default Card