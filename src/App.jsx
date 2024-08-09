
import './App.css'
import HomepageLayout from './HomepageLayout'
import { SocialIcon } from 'react-social-icons'


function App() {


  function calendly() {
    Calendly.initBadgeWidget({ url: 'https://calendly.com/dmostoller/15-minute-coffee-virtual-chat', text: 'Schedule time with me', color: 'black', textColor: '#ffffff', branding: undefined}); 
  }
  
  //   console.log(darkMode)
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
            </div>
        </div>
      </div>
    </>
  )
}

export default App
