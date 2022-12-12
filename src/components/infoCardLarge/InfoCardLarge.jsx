import React from 'react'
import './infoCardLarge.css'
import evIcon from '../../images/evmIcon.png'

const InfoCardLarge = ({title, accentColor}) => {
  const actColor = 'hsla(' + accentColor + ', 1.0)'
  return (
    <div className='evms__info-card-large_container'>
      <div style={{backgroundColor: actColor}} className="evms__info-card-large_heading-box">
          <div className="evms__icon-wrapper">
            <img className="evms__icon_two" src={evIcon} alt="icon" />
           
          </div>
          <h1 className='evms__info-card-large_heading-box_title'>Earned Value Management</h1>

      </div>

    </div>
  )
}

export default InfoCardLarge