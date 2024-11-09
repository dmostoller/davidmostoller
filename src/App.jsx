
import './App.css'
import { SocialIcon } from 'react-social-icons'
import { Button } from 'semantic-ui-react'
import resume from './assets/David-Mostoller-Resume-October-2024.pdf'
import { Outlet } from "react-router-dom";


function App() {
  
  return (
    <>
     <div lassName='ui fluid container' id='detail'>
        <Outlet/>
        <div className='social-sidebar'>
        <div className='ui one column grid'>
            <div className='column'>
                <div style={{margin: "10px"}}>
                  <SocialIcon className='social-button' target='_blank' url="https://www.linkedin.com/in/david-mostoller/" />
                </div>
                <div style={{margin: "10px"}}>
                  <SocialIcon className='social-button' target='_blank' url="https://github.com/dmostoller" />
                </div>
                <div style={{margin: "10px"}}>
                  <SocialIcon className='social-button' target='_blank' url="https://discord.com/users/kabayun" />
                </div>
                <div style={{margin: "10px"}}>
                  <SocialIcon className='social-button' target='_blank' url="https://medium.com/@dmostoller" />
                </div>

                <div style={{margin: "10px"}}>
                <Button
                size='huge'
                secondary
                circular
                inverted
                icon='download'
                href={resume}
                target='_blank'
                // data-inverted="" 
                data-tooltip="My Resume" 
                data-position="bottom right">
                </Button>
                </div>
            </div>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
