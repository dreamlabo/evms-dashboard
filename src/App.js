import React from 'react'
import './App.css';

import { NavBar, MainHeading, DashboardNavigation, SecondaryNavigation } from './components'
import { CardContainer, ProjectInfoContainer } from './containers';

const App = () => {
  return (
    <div>
        <NavBar />
        <MainHeading />
        <DashboardNavigation />
        <CardContainer />
        <ProjectInfoContainer />
    </div>
  )
}

export default App