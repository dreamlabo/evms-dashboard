import React from 'react'
import './App.css';

import { NavBar, MainHeading, DashboardNavigation, SecondaryNavigation } from './components'
import { CardContainer } from './containers';

const App = () => {
  return (
    <div>
        <NavBar />
        <MainHeading />
        <DashboardNavigation />
        <CardContainer />
        <SecondaryNavigation />

    </div>
  )
}

export default App