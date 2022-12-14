import React from 'react'
import './infoCardLarge.css'
import evIcon from '../../images/evIcon.png'

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
      <div className="evms__info-card-large_lower-container">
       <div className="evms__info-card-large_row">
          <div className='evms__info-card-large_column'>
            <h4>CPI</h4>
            <p><span>o</span>0.58</p>
          </div>
          <div className='evms__info-card-large_column'>
            <h4>PV</h4>
            <p>$ 8.61</p>
          </div>
          <div className='evms__info-card-large_column'>
            <h4>EV</h4>
            <p>$ 657.06</p>
          </div>
          <div className='evms__info-card-large_column'>
            <h4>EAC</h4>
            <p>$ 894.86</p>
          </div>
        </div>
        <div className="evms__info-card-large_row">
          <div className='evms__info-card-large_column'>
            <h4>SPI</h4>
            <p><span>o</span>0.58</p>
          </div>
          <div className='evms__info-card-large_column'>
            <h4>ETC</h4>
            <p>$ 119.17</p>
          </div>
          <div className='evms__info-card-large_column'>
            <h4>AC</h4>
            <p>$ 775.69</p>
          </div>
          <div className='evms__info-card-large_column'>
            <h4>SV</h4>
            <p>$648.44</p>
          </div>
        </div>
        <div className="evms__info-card-large_row">
          <div className='evms__info-card-large_column'>
            <h4>TCPI</h4>
            <p>-0.58</p>
          </div>
          <div className='evms__info-card-large_column'>
            <h4>CV</h4>
            <p>$ 119.17</p>
          </div>
          <div className='evms__info-card-large_column'>
            <h4>BAC</h4>
            <p>$ 758.00</p>
          </div>
        </div>
   

      </div>

    </div>
  )
}

export default InfoCardLarge