import React from 'react'
import './infoCardSmall.css';

const InfoCardSmall = () => {
  return (
    <div className='evms__info-card-small_container'>
      <div className="evms__info-card-small_heading-box">
        <div className="evms__info-card-small_heading-box_title">
          <div className="evms__icon-wrapper">
            <img src="" alt="" />
          </div>
          <h1 className="evms__info-card-small_heading">Original Estimate Cost</h1>
        </div>
        <p className="evms__info-cars-small_amount">$ 15,904.04</p>
      </div>
      <div className="evms__info-card-small_lower-box">
        <div className="evms__info-card-small_lower-box_text">
          <h2 className="evms__info-card-small_heading">Time Spent Cost</h2>
          <p className="evms__info-cars-small_amount">$ 16,919.93</p>
        </div>
     
        <div className="evms__info-card-small_lower-box_text">
            <h2 className="evms__info-card-small_heading">Remaining Estimate Cost</h2>
            <p className="evms__info-cars-small_amount">$ 1,712.43</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCardSmall