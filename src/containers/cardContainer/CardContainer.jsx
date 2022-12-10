import React from 'react'
import './cardContainer.css'

import { InfoCardLarge, InfoCardSmall } from '../../components'

const CardContainer = () => {
  return (
    <div className='evms__card-wrapper'>
        <div className='evms__card-container'>
          <div className="evms__cards">
            <InfoCardSmall />
            <InfoCardSmall />
            <InfoCardSmall />
            <InfoCardLarge />
          </div>
        </div>
    </div>
  )
}

export default CardContainer