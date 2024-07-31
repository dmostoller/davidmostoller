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
import headshot from './assets/david-headshot-amtrak.jpg'
import Email from './Email';
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
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
            effect={'cube'}
            slidesPerView={1}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            navigation
            rewind
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <div className="card" style={{marginBottom: "50px"}}>
                    <h3 style={{marginBottom:"0px"}}>Musician's Base</h3>
                    <h5 className='grey' style={{marginTop: "0px"}}>A Social Fanpage for Independent Musicians</h5>
                        {/* <a href="https://vimeo.com/944678547?share=copy" target='_blank'>
                            <img style={{maxWidth: "700px"}} src={musicThumb}></img>
                        </a> */}
                        <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/944678547?h=de6bb1aa1e" 
                style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                        <div style={{marginTop: "15px"}}>
                            <a href="https://github.com/dmostoller/musicians-base" target='_blank'>
                            <button  style={{marginRight: "15px"}} className='ui teal button'>GitHub Repo</button>
                            </a>
                            <a href="https://superluminalpsy.com/" target='_blank'>
                            <button className='ui violet button'>Deployed Site</button>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <h3 style={{marginBottom:"0px"}}>TutorBot</h3>
                    <h5 className='grey' style={{marginTop: "0px"}}>ChatGPT Assistant for Youtube Playlists</h5>
                    {/* <a href="https://www.loom.com/share/54ffdd1cbc394c0c8b0ac4d3a3783097" target='_blank'>
                            <img style={{maxWidth: "700px"}} src="https://cdn.loom.com/sessions/thumbnails/54ffdd1cbc394c0c8b0ac4d3a3783097-with-play.gif"></img>
                        </a> */}
                        <div 
                            style={{position: "relative", paddingBottom: "60%", height: "0"}}>
                            <iframe src="https://www.loom.com/embed/54ffdd1cbc394c0c8b0ac4d3a3783097?sid=7230f8a1-696f-429a-b30f-a72c9b5676aa" 
                            frameborder="0" 
                            style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}
                            >
                            </iframe>
                        </div>

                        <div style={{marginTop: "15px"}}>
                        <a href="https://github.com/dmostoller/youtube-playlist-chatbot" target='_blank'>
                            <button style={{marginRight: "15px"}} className='ui teal button'>GitHub Repo</button>
                        </a>
                        <a href="https://superluminalpsy.com/learn" target='_blank'>
                            <button className='ui violet button'>Deployed Site</button>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <h3 style={{marginBottom:"0px"}}>Social Art Portfolio</h3>
                    <h5 className='grey' style={{marginTop: "0px"}}>A Fresh Take on an Artist Portfolio</h5>
                        {/* <a href="https://www.loom.com/share/6963e453b24648c7863de7ad8d490ec4" target='_blank'>
                            <img style={{maxWidth: "700px"}} src="https://cdn.loom.com/sessions/thumbnails/6963e453b24648c7863de7ad8d490ec4-with-play.gif"></img>
                        </a> */}
                        <div 
                            style={{position: "relative", paddingBottom: "60%", height: "0"}}>
                            <iframe src="https://www.loom.com/embed/6963e453b24648c7863de7ad8d490ec4?sid=8e6a6ad8-31de-43d7-abfa-9e89c8fdd76a" 
                            frameborder="0" 
                            style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}
                            >
                            </iframe>
                        </div>
                        <div style={{marginTop: "15px"}}>
                        <a href="https://github.com/dmostoller/social-artist-portfolio" target='_blank'>
                            <button style={{marginRight: "15px"}} className='ui teal button'>GitHub Repo</button>
                        </a>
                        <a href="https://yasminmostoller.com/" target='_blank'>
                            <button className='ui violet button'>Deployed Site</button>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <h3 style={{marginBottom:"0px"}}>Mars Base</h3>
                    <h5 className='grey' style={{marginTop: "0px"}}>A Python CLI Game in the style of Oregon Trail</h5>
                        <a href="https://vimeo.com/930451133?share=copy" target='_blank'>
                            <img style={{maxWidth: "700px"}} src={marsThumb}></img>
                        </a>
                        <div style={{marginTop: "15px"}}>
                        <a href="https://github.com/dmostoller/mars-base" target='_blank'>
                            <button className='ui teal button'>GitHub Repo</button>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            ...
        </Swiper>
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
            className='element' name='projects'
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
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={1} 
                  duration={500} 
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
                    <Icon size='large' name='sidebar' />
                  </Menu.Item>
                  <Menu.Item header position='right'>
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
  <Segment style={{ padding: '6em 0em' }}  className='element' name="about" basic vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={10}>
            <Header as='h4' style={{ fontSize: '1.75em', color:"gray"}}>Full Stack Software Engineer
                <br></br><span style={{fontSize:'0.75em', color:"gray"}}>Philadelphia, PA</span>
            </Header>
            
            <p style={{ fontSize: '1.2em' }}>Thank you for visiting my website! I am a software engineer with a rich background in music, combining technical skills with creative flair to drive innovative projects. I excel at crafting user-centric applications that harmonize form and function. My mission is simple: to build meaningful software applications that make a positive impact.</p>
            <p style={{ fontSize: '1.2em' }}>I have experience developing robust web applications and effectively collaborating with senior leadership and leading teams to design, test, and deploy software. </p>
            <p style={{ fontSize: '1.2em' }}>Additionally, I oversaw the development of a customer-facing website and integrated web-based layout tools. I also contributed to data analysis and strategy, utilizing MapBox and other tools to create interactive maps and charts that supported executive decision-making and attracted investors.</p>
            <p style={{ fontSize: '1.2em' }}>My adaptability to new technologies and meticulous attention to detail drive my success in creating impactful software solutions. I thrive in fast-paced environments and have extensive experience working with teams of diverse skill sets, nationalities, and communication styles.</p>
            <p style={{ fontSize: '1.2em' }}>My career as a professional musician, which took me to over 40 countries, parallels programming in its blend of creativity and teamwork. Both fields require transforming abstract ideas into tangible results and working closely with others to create something exceptional. This background gives me a unique perspective on user experience and problem-solving.</p>
            <p style={{ fontSize: '1.2em' }}>I am eager to leverage my diverse experiences to build meaningful software applications that make a positive difference. Let’s connect and explore how we can collaborate to create something extraordinary!</p>
            <p style={{ fontSize: '1.2em', textAlign: "center" }}>
              <a href="https://calendly.com/dmostoller/15-minute-coffee-virtual-chat" target='_blank'>
              Schedule a call on Calendly
              </a>
            </p>

          </Grid.Column>
          <Grid.Column floated='right'width={6}>
            <Image bordered rounded size='massive' src={headshot} />
            <Grid centered style={{marginTop: "25px"}}>
            <Button icon labelPosition='left' 
              size='huge'
              href={resume}
              download="David_Mostoller_Resume"
              content="Download Resume"
              target='_blank'>
                <Icon name='download' />
                My Resume
            </Button>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment basic style={{ padding: '0em' }} className='element' name="contact" vertical>
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