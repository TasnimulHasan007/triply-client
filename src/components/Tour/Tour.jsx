import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import './Tour.css'

const Tour = ({ tour: { _id, title, img, location, description, price } }) => {
  return (
    <Fade bottom>
      <div className="tour">
        <div className="thumbnail">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <h3>{title}</h3>
          <h5>
            <i className="fas fa-map-marker-alt"></i> {location}
          </h5>
          <p>{description.substring(0, 135)}...</p>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div className="price">
              Starting at <br /> <span className="orange">${price}</span>
            </div>
            <Link to={`/tours/${_id}`}>
              Explore <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Tour
