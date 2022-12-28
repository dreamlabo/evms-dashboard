import React from 'react'
import './cardContainer.css'

import  dollarSignIcon from '../../images/dollarSignIcon.png';
import dataInfoCardSmall from '../../projectData/InfoCardSmallData.js'





import { InfoCardLarge, InfoCardSmall } from '../../components'
// title, icon, titleValue, descOne, descOneValue, descTwo, descTwoValue
const CardContainer = () => {

  const renderSmallCards = dataInfoCardSmall.map(info => {
    console.log(info)
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
            {/* <InfoCardSmall title="Original Estimate Cost" icon={dollarSignIcon} titleValue="15,940.04" descOne="Time Spent Cost" descOneValue="16,919.93" descTwo="Remaining Estimate Cost" descTwoValue="1,712.43" accentColor='248, 96%, 61%' />
            <InfoCardSmall title="Original Estimate Price" icon={dollarSignIcon} titleValue="21,957.76" descOne="Time Spent Price" descOneValue="18,335.25" descTwo="Remaining Estimate Price" descTwoValue="1,854.77" accentColor='266, 100%, 64%' />
            <InfoCardSmall title="Budget" icon={dollarSignIcon} titleValue="15,904.04" descOne="Actual Margin" descOneValue="6,847.32" descTwo="" descTwoValue="" accentColor='175, 98%, 24%'/> */}
            <InfoCardLarge title="Earned Value Management" accentColor='248, 96%, 61%' />
          </div>
        </div>
    </div>
  )
}

export default CardContainer