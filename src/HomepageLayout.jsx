/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import { createMedia } from '@artsy/fresnel'
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types'
import React, { Component, useEffect } from 'react'
import { InView } from 'react-intersection-observer'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import marsThumb from './assets/thumb.png'
import resume from './assets/David-Mostoller-Resume-August-2024.pdf'
import Projects from './Projects';
import Email from './Email';
import Bio from './Bio';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { ToastContainer, toast } from "react-toastify";
import { Link, Element, scroller, animateScroll as scroll, scrollSpy } from 'react-scroll';







const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})


/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = () => (
  <Container text style={{marginTop: "50px"}}>
    <Header
      as='h1'
      content='David Mostoller'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as='h2'
      content='Full Stack Software Engineer'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <Header
      as='h2'
      content='Philadelphia, PA'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}/>
      <Grid centered style={{marginTop: "25px"}}>
        <Button icon labelPosition='right' 
          size='large'
          inverted
          href={resume}
          download="David_Mostoller_Resume"
          content="Download Resume"
          target='_blank'>
            <Icon name='download' />
            My Resume
        </Button>
        <Button icon labelPosition='right' 
          size='large'
          inverted
          href="/bio">
            <Icon name='book' />
            My Bio
        </Button>
      </Grid>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
const handleSetActive = (to) => {
  console.log(to);
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='tablet'>
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
                  offset={1} 
                  duration={500} 
                  onSetActive={handleSetActive}
                  >Projects
                </Link>
                <Link className='item'
                  activeClass="active" 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} 
                  onSetActive={handleSetActive}
                  >Contact
                </Link>
                <Menu.Item header position='right'>
                    DAVID MOSTOLLER
                </Menu.Item>
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
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={1} 
                  duration={500}
                  style={{fontSize: "1.5em"}}
                  onClick={this.handleSidebarHide} 
                  onSetActive={handleSetActive}
                  >About Me
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
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500}
                  style={{fontSize: "1.5em"}} 
                  onSetActive={handleSetActive}
                  onClick={this.handleSidebarHide} 
                  >Contact
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
                  <Menu.Item header position='right' style={{verticalAlign: "top"}}>
                    DAVID MOSTOLLER
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

  {/* <Bio/> */}

    <Segment basic style={{marginTop: "50px", padding: '0em' }} className='element' name="contact" vertical>
      <Grid centered stackable>
        <a href="https://github.com/dmostoller" target="_blank">
            <Icon link circular inverted basic size='huge' name='github'/>
        </a>
        <a href="https://www.linkedin.com/in/david-mostoller/" target="_blank">
            <Icon link circular inverted size='huge' name='linkedin'/>
        </a>
        <a href="https://medium.com/@dmostoller" target="_blank">
            <Icon link circular inverted size='huge' name='medium'/>
        </a>
      </Grid>
    </Segment>

  <Projects /> 


    <Segment style={{ padding: '8em 0em' }} basic vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Get In Touch
        </Header>
            <Email/>
      </Container>
    </Segment>

    {/* <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid centered inverted stackable>
          
            <Button size='huge' as='a' href="https://calendly.com/dmostoller/15-minute-coffee-virtual-chat" inverted target="_blank" style={{ marginLeft: '0.5em' }}>
                Schedule a call on Calendly
            </Button>

        </Grid>
      </Container>
    </Segment> */}

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
              <List.Item as='a' href="https://x.com/dave_mostoller" target="_blank">Twitter</List.Item>
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