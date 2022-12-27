import React from 'react'
import './projectInfoCard.css'

const ProjectInfoCard = ({title, status, spi, cpi, 
                          originalEstimate, 
                          timeSpent, remainingEstimate,
                        projectInitials}) => {

  const renderIndicatorColor = (value) => {
    if(value === 1 || value > 1 ){
      return (
        <div style={{backgroundColor: 'green'}}  className='evms__project-card_color-status'></div>
      )
    }
    return (
      <div style={{backgroundColor: 'red'}}  className='evms__project-card_color-status'></div>
    )
  }                          
  
  const renderNumbers = (number) => {
    if (number % 1 !== 0) {
      return number.toLocaleString();
    }
    return number.toLocaleString() + '.00'
  }
  
  return (
    <div className='evms__project-card'>

      <div className='evms__project-card_left-title'>
        <div className='evms__project-card_icon'>
          <p className='evms__project-card_icon-text'>
            {projectInitials}
          </p>
        </div>
        <h4>{title}</h4>
        <div className='evms__project-card_icon-status'>{status}</div>
      </div>
      <div className='evms__project-card_inner-cards'>
        <div className='evms__project-card_inner-card'>
          <h5>SPI</h5>
          <div className='evms__project-card_inner-container'>
            {renderIndicatorColor(spi)}
            <p>{spi}</p>
          </div>
        </div>

        <div className='evms__project-card_inner-card'>
          <h5>CPI</h5>
          <div className='evms__project-card_inner-container'>
          {renderIndicatorColor(cpi)}
            <p>{cpi}</p>
          </div>
        </div>

      </div>

      <div className='evms__project-card_hours'>
        <div style={{backgroundColor: 'inherit'}} className='evms__project-card_inner-hours'>
          <h5>Original Estimate</h5>
          <div className='evms__project-card_inner-container'>
            <p>{renderNumbers(originalEstimate)}h</p>
          </div>
        </div>
        <div style={{backgroundColor: 'inherit'}} className='evms__project-card_inner-hours'>
          <h5>Time Spent</h5>
          <div className='evms__project-card_inner-container'>
            <p>{renderNumbers(timeSpent)}h</p>
          </div>
        </div>
        <div style={{backgroundColor: 'inherit'}} className='evms__project-card_inner-hours'>
          <h5>Remaining Estimate</h5>
          <div className='evms__project-card_inner-container'>
            <p>{renderNumbers(remainingEstimate)}h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfoCard