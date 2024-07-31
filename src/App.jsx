
import './App.css'
import HomepageLayout from './HomepageLayout'


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
    </>
  )
}

export default App
