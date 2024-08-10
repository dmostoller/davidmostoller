import { Segment, Grid, Header, Button, Image, Icon } from "semantic-ui-react";
import resume from './assets/David-Mostoller-SE-Resume-Web.pdf'
import headshot from './assets/david-headshot-amtrak.jpg'

export default function Bio() {
    return (
        <div>
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
            <Image bordered centered circular size='medium' src={headshot} />
            <Grid centered style={{marginTop: "25px"}}>
            <Button icon labelPosition='left' 
              size='huge'
              href={resume}
              basic
              secondary
              content="My Resume"
              target='_blank'>
                <Icon name='download' />
                My Resume
            </Button>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
        </div>
    );
    }