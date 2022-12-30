import React from 'react'
import './infoCardSmall.css';
import { renderValues } from '../../hooks/renderValues.js'


const InfoCardSmall = ({title, icon, titleValue, descOne, descOneValue, descTwo, descTwoValue, accentColor}) => {
  const actColor = 'hsla(' + accentColor + ', 1.0)'
  const boxShadowColor = 'hsla(' + accentColor + ', 0.6)'
  const boxShadow = '0 4px 4px 0px ' +  boxShadowColor;
  
  return (
    <div className='evms__info-card-small_container'>
      <div style={{background: actColor, boxShadow: boxShadow}} className="evms__info-card-small_heading-box">
        <div className="evms__info-card-small_heading-box_title">
          <div  className="evms__icon-wrapper">
            <img className='evms__icon_one' src={icon} alt="icon" />
          </div>
          <h1 className="evms__info-card-small_heading">{title}</h1>
        </div>
        <p className="evms__info-cars-small_amount">$ {renderValues(titleValue)}</p>
      </div>
      <div className="evms__info-card-small_lower-box">
        <div className="evms__info-card-small_lower-box_text">
          <h2 className="evms__info-card-small_heading">{descOne}</h2>
          <p style={{color: actColor}} className="evms__info-cars-small_amount">$ {renderValues(descOneValue)}</p>
        </div>
        {descTwo &&
            <div className="evms__info-card-small_lower-box_text">
                <h2 className="evms__info-card-small_heading">{descTwo}</h2>
                <p style={{color: actColor}} className="evms__info-cars-small_amount">$ {renderValues(descTwoValue)}</p>
            </div>
        }
      </div>
    </div>
  )
}

export default InfoCardSmall