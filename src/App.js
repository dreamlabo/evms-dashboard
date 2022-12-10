import React from 'react'
import './App.css';

import { NavBar, MainHeading, DashboardNavigation } from './components'
import { CardContainer } from './containers';

const App = () => {
  return (
    <div>
        <NavBar />
        <MainHeading />
        <DashboardNavigation />
        <CardContainer />

    </div>
  )
}

export default App