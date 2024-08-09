
import './App.css'
import HomepageLayout from './HomepageLayout'
import { SocialIcon } from 'react-social-icons'
import { Button } from 'semantic-ui-react'
import resume from './assets/David-Mostoller-Resume-August-2024.pdf'



function App() {


  function calendly() {
    Calendly.initBadgeWidget({ url: 'https://calendly.com/dmostoller/15-minute-coffee-virtual-chat', text: 'Schedule time with me', color: 'black', textColor: '#ffffff', branding: undefined}); 
  }
    
  calendly();
  
  return (
    <>
      <div className='ui fluid container'>
          <HomepageLayout/>
      </div>
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
    </>
  )
}

export default App
