import React from 'react'
import './mainHeading.css'
import HeaderIcon from '../../images/dashboard-symbol.png'

const MainHeading = () => {
  return (
    <div className='evms__main-heading_wrapper'>
        <div className="evms__main-heading_container">
            <div className="evms__main-heading">
                <img src={HeaderIcon} alt="dashboard icon" />
                <h1>Main Dashboard</h1>
            </div>
        </div>
    </div>
  )
}

export default MainHeading