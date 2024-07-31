import { useState } from 'react'

import './App.css'
import NavMenu from './NavMenu'
import Homepage from './Homepage'
import HomepageLayout from './HomepageLayout'

function App() {

  return (
    <>
       {/* <NavMenu />
       <Homepage/> */}
       <div className='ui fluid container'>
            <HomepageLayout/>
        </div>
    </>
  )
}

export default App
