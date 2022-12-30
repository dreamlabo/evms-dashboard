import React from 'react'
import './secondaryNavigation.css';

const SecondaryNavigation = () => {
  return (
    <div className='evms__secondary-Nav_wrapper'>
        <div className="evms__secondary-Nav_container">
            <nav className="evms__secondary-Nav">
                <ul className='evms__secondary-Nav_links'>
                    <li className='evms__secondary-Nav_link'>Overperforming Projects</li>
                    <li className='evms__secondary-Nav_link '>Projects At Risk</li>
                    <li className='evms__secondary-Nav_link evms__secondary-Nav_link--active'>Underperforming Projects<div className='evms__secondary-Nav_link-quantity'>2</div></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default SecondaryNavigation