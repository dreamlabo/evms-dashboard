import React from 'react'
import './cardContainer.css'

import  dollarSignIcon from '../../images/dollarSignIcon.png';
import dataInfoCardSmall from '../../projectData/InfoCardSmallData.js'

import { InfoCardLarge, InfoCardSmall } from '../../components'


const CardContainer = () => {

  const renderSmallCards = dataInfoCardSmall.map(info => {
    return (
      <InfoCardSmall title={info.cardTitle}
                      icon={dollarSignIcon} 
                      titleValue={info.titleValue} 
                      descOne={info.headingOne} 
                      descOneValue={info.headingOneValue} 
                      descTwo={info.headingTwo} 
                      descTwoValue={info.headingTwoValue} 
                      accentColor={info.accentColor}/>
    )
  })

  return (
    <div className='evms__card-wrapper'>
        <div className='evms__card-container'>
          <div className="evms__cards">
            {renderSmallCards}
            <InfoCardLarge title="Earned Value Management" accentColor='248, 96%, 61%' />
          </div>
        </div>
    </div>
  )
}

export default CardContainer