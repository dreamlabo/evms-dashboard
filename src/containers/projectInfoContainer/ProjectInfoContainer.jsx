import React, { useState } from 'react'
import './projectInfoContainer.css'
import '../../components/secondaryNavigation/secondaryNavigation.css';
import {secondaryNavLinks} from '../../projectData/secondaryNavigationLinks.js';
import { UnderperformingInfoCardData, AtRiskInfoCardData, OverperformingInfoCardData } from '../../projectData/infoCardData.js';
import { ProjectInfoCard, SecondaryNavigation } from '../../components'

const ProjectInfoContainer = () => {
  const OVERPERFORMING = 'Overperforming Projects';
  const AT_RISK = 'Projects At Risk';
  const UNDERPERFORMING = 'Underperforming Projects'
  
  const [whichProjectListToDisplay, setWhichProjectListToDisplay] = useState(UNDERPERFORMING);
  const [projectArray, setProjectArray] = useState(UnderperformingInfoCardData);
  const [indicatorColor, setIndicatorColor] = useState('red');
  const [textColor, setTextColor] = useState('white');

  const infoCards = projectArray.map ((info, index) => {
    return (
      <ProjectInfoCard title={info.projectname}
                        status={info.status}
                        spi={info.spi} 
                        cpi={info.cpi}
                        originalEstimate={info.originalEstimate}
                        timeSpent={info.timeSpent}
                        remainingEstimate={info.remainingEstimate}
                        projectInitials={info.projectInitials}
                        key={index + '_' + info.projectname}
                        />
    )
  })

  const changeNavLink = (navLink) => {
    setWhichProjectListToDisplay(navLink);
    switch(navLink) {
      case OVERPERFORMING:
        setProjectArray(OverperformingInfoCardData);
        setIndicatorColor('green');
        setTextColor('white');
        break;
      case AT_RISK:
        setProjectArray(AtRiskInfoCardData);
        setIndicatorColor('yellow')
        setTextColor('black');
        break;
      case UNDERPERFORMING:
        setProjectArray(UnderperformingInfoCardData);
        setIndicatorColor('red');
        setTextColor('white');
        break;
    } 
  }

  const renderNavLinks = secondaryNavLinks.map((link, index) => {
    if (link === whichProjectListToDisplay) {
      return (
        <li key={index + '_' + link} className='evms__secondary-Nav_link evms__secondary-Nav_link--active'>
          {link}
            <div style={{ backgroundColor: indicatorColor, color:textColor }}
              className='evms__secondary-Nav_link-quantity'>{projectArray.length}
            </div>
        </li>
      )
    }
    else {
      return (
        <li onClick={() => changeNavLink(link)}
          key={index + '_' + link}
          className='evms__secondary-Nav_link'>
            {link}
            <div style={{ backgroundColor: 'inherit', color:textColor }}
              className='evms__secondary-Nav_link-quantity'>
            </div>
        </li>
      )
    }
  })

  return (
    <>
      <div className='evms__secondary-Nav_wrapper'>
        <div className="evms__secondary-Nav_container">
                <nav className="evms__secondary-Nav">
                    <ul className='evms__secondary-Nav_links'>
                        {renderNavLinks}
                    </ul>
                </nav>
        </div>
      </div>
      <div className='evms__project-info_wrapper'>
          <div className='evms__project-info_container'>
              <section className='evms__project-info_cards'>
                  {infoCards}
              </section>
          </div>
      </div>
    </>
  )
}

export default ProjectInfoContainer