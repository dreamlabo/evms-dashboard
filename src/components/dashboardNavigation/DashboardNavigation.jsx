import React from 'react'
import './dashboardNavigation.css';

const DashboardNavigation = () => {
  return (
    <div className='evms__dashNav_wrapper'>
        <div className="evms__dashNav_container">
            {/* <div className="evms__dashNav"> */}
                <nav className="evms__dashNav">
                    <ul className='evms__dashNav_links'>
                        <li className='evms__dashNav_link'>Overview</li>
                        <li className='evms__dashNav_link evms__dashNav_link--active'>Performance</li>
                        <li className='evms__dashNav_link'>Earned Value Chart</li>
                        <li className='evms__dashNav_link'>Tickets</li>
                        <li className='evms__dashNav_link'>Info</li>
                        <li className='evms__dashNav_link'>User Access</li>
                        <li className='evms__dashNav_link'>Recent Activity</li>
                        <li className='evms__dashNav_link'>Warnings</li>
                    </ul>
                </nav>
            {/* </div> */}
        </div>
    </div>
  )
}

export default DashboardNavigation