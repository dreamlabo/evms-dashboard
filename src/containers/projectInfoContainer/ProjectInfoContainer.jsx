import React from 'react'
import './projectInfoContainer.css'
import infoCardData from '../../projectData/infoCardData.js';

import { ProjectInfoCard } from '../../components'


const ProjectInfoContainer = () => {

  const infoCards = infoCardData.map (info => {
    console.log(info);
    return (
      <ProjectInfoCard title={info.projectname}
                        status={info.status}
                        spi={info.spi} 
                        cpi={info.cpi}
                        originalEstimate={info.originalEstimate}
                        timeSpent={info.timeSpent}
                        remainingEstimate={info.remainingEstimate}
                        projectInitials={info.projectInitials}
                        />
    )
  }
  )
  return (
    <div className='evms__project-info_wrapper'>
        <div className='evms__project-info_container'>
            <section className='evms__project-info_cards'>
                {infoCards}
            </section>
        </div>
    </div>
  )
}

export default ProjectInfoContainer