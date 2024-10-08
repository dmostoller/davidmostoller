/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { InView } from 'react-intersection-observer'
import {
  Container,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

import Projects from './Projects';
import Email from './Email';
import Bio from './Bio';

import { ToastContainer } from "react-toastify";
import { Link, Element, scroller, animateScroll as scroll, scrollSpy } from 'react-scroll';
import resume from '../assets/David-Mostoller-SE-Resume-Web-New.pdf'

import reactIcon from '../assets/react-svgrepo-com.svg'
import pythonIcon from '../assets/python-svgrepo-com.svg'
import flaskIcon from '../assets/flask-svgrepo-com.svg'
import postgresqlIcon from '../assets/postgresql-svgrepo-com.svg'
import gear from '../assets/gear.svg'
import wesIcon from '../assets/WU_Wordmark_FullColor_1450x425_Horiz_WebReady.png'
import flatIcon from '../assets/flatiron-school-logo.png'


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})


const HomepageHeading = () => (
  <Container style={{marginTop: "50px"}}>
        <div className='ui basic segment' style={{marginTop: "100px"}}>
            <div className="ui very relaxed stackable grid">
                <div className="column">
                    <div className="ui left aligned inverted text container segment">
                  
                        <h1 className='ui inverted header' style={{marginTop: "0px", marginBottom: "0px", fontSize: "3.5em"}}>
                        {/* <img className="ui huge image" src={gear}></img> */}
                          I'm Dave, 
                        </h1>
                        <h1 className="ui inverted header" style={{marginTop: "25px", marginBottom: "0px", fontSize: "3em", color: "orange"}}>a full-stack web developer,</h1>
                        <h1 style={{marginTop: "35px", fontSize: "2em", color: "white"}}>focused on design and functionality.</h1>
                        <div className='ui padded grid'> 
                          <div className='ui huge circular orange button'  style={{ marginTop: "50px"}}
                          onClick={() => scroller.scrollTo('projects', {
                          duration: 500,
                          delay: 0,
                          offset: -75,
                          smooth: 'easeInOutQuart'
                        })}>Discover My Projects</div>
                    </div>



                    </div>

                </div>  
            </div>
        </div>
    
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

const handleSetActive = (to) => {
  // console.log(to);
};

class DesktopContainer extends Component {
  state = {}

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
            className='element' name='home'
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              borderless
              size='huge'
            >
              <Container>
                <Link className='item'
                  activeClass="active" 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  offset={-75} 
                  duration={500} 
                  onSetActive={handleSetActive}
                  >Home
                </Link>
                <Link className='item'
                  activeClass="active" 
                  to="projects" 
                  spy={true} 
                  smooth={true} 
                  offset={-75} 
                  duration={500} 
                  onSetActive={handleSetActive}
                  >Projects
                </Link>
                <Link className='item'
                  activeClass="active" 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500} 
                  onSetActive={handleSetActive}
                  >About
                </Link>
                {fixed ?
                <Menu.Item header position='right'>
                    DAVID MOSTOLLER
                </Menu.Item>
                :
                <Menu.Item header position='right'>

                  <a href="https://www.linkedin.com/in/david-mostoller/" target='_blank'><div className='ui inverted circular blue button' style={{marginLeft: "5px"}}><i className='linkedin icon'></i>LinkedIn</div></a>
                  <a href={resume} content="My Resume" target='_blank' ><div className='ui inverted circular orange icon button' style={{marginLeft: "5px"}}>
                    <i className='download icon'></i>  Resume
                  </div></a>
                </Menu.Item>
            }
              </Container>
            </Menu>

            <HomepageHeading />
            
          </Segment>
        </InView>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
                <div className='item'></div>
                <Link className='item'
                  activeClass="active" 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  offset={-75} 
                  duration={500}
                  style={{fontSize: "1.5em"}}
                  onClick={this.handleSidebarHide} 
                  onSetActive={handleSetActive}
                  >Home
                </Link>
                <Link className='item'
                  activeClass="active" 
                  to="projects" 
                  spy={true} 
                  smooth={true} 
                  offset={-75} 
                  duration={500}
                  style={{fontSize: "1.5em"}} 
                  onSetActive={handleSetActive}
                  onClick={this.handleSidebarHide} 
                  >Projects
                </Link>
                <Link className='item'
                  activeClass="active" 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500}
                  style={{fontSize: "1.5em"}} 
                  onSetActive={handleSetActive}
                  onClick={this.handleSidebarHide} 
                  >About
                </Link>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='massive'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                <Menu.Item position='right'>
                  <a href="https://www.linkedin.com/in/david-mostoller/" target='_blank'><div className='ui inverted circular blue button' style={{marginLeft: "5px"}}><i className='linkedin icon'></i>LinkedIn</div></a>
                  <a href={resume} content="My Resume" target='_blank' ><div className='ui inverted circular orange icon button' style={{marginLeft: "5px"}}>
                    <i className='download icon'></i>  Resume
                  </div></a>
                </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (

  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  
  <ResponsiveContainer>
  
  <ToastContainer/>

  <Projects /> 

    <Segment basic style={{marginTop: "50px", marginBottom: "0px", padding: '0em' }} className='element' name="contact" vertical>
      <Container textAlign='center' text>
            <Email/>
      </Container>
    </Segment>


    <Bio/>
    <div className="ui center aligned text container" style={{marginTop: "0px",  marginBottom: "25px"}}>
      <img src={wesIcon} alt="gear" style={{width: "300px"}}/>
      <img src={flatIcon} alt="gear" style={{width: "170px"}}/>
    </div>
    <Segment inverted vertical style={{ margin: '0em 0em 0em 0em', padding: '5em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={4}>
            <Header inverted as='h4' content='Links' />
            <List link inverted>
              <List.Item as='a' href="https://www.linkedin.com/in/david-mostoller/" target="_blank">LinkedIn</List.Item>
              <List.Item as='a' href="https://github.com/dmostoller" target="_blank">GitHub</List.Item>
              <List.Item as='a' href="https://medium.com/@dmostoller" target="_blank">Medium</List.Item>
              <List.Item as='a' href="https://calendly.com/dmostoller/15-minute-coffee-virtual-chat" target="_blank">Calendly</List.Item>
              <List.Item as='a' href="https://discord.com/users/kabayun" target="_blank">Discord</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={12}>
            <Header inverted as='h4' content='Skills' />
              <img alt="Static Badge" src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/Google%20Analytics-E37400?style=for-the-badge&logo=google%20analytics&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"></img>
              <img alt="Static Badge" src="	https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"></img>
              <img alt="Static Badge" src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white"></img>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout