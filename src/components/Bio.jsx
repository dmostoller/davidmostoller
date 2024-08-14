import React, {useState} from "react";
import { InlineWidget } from "react-calendly";


import { Segment, Grid, Header, Button, Image, Icon, Portal } from "semantic-ui-react";
import resume from '../assets/David-Mostoller-SE-Resume-Web-New.pdf'
import headshot from '../assets/david-headshot-amtrak.jpg'
import bikeShot from '../assets/david-bike.jpg'

export default function Bio() {

  const [open, setOpen] = useState(false)
  const [photo, setPhoto] = useState(headshot)

  function changePhoto(){
    setPhoto(photo === headshot ? bikeShot : headshot)
  }

    return (
        <div className="ui text container">
        <Segment style={{ padding: '6em 0em' }}  className='element' name="about" basic vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={10}>
            <Header as='h4' style={{ fontSize: '2em', color:"gray"}}>A few words about me
            </Header>
            
            {/* <p style={{ fontSize: '1.3em' }}>Hi, I'm Dave.</p> */}
            <p style={{ fontSize: '1.3em' }}>I'm a software engineer focused on forging meaningful connections between users in dynamic online environments. I believe that building impactful technology emerges from iterative, team collaborations.</p>
            <p style={{ fontSize: '1.3em' }}>
                In my free time you can catch me exploring Philly on my <a onMouseOver={changePhoto} onMouseOut={changePhoto}> bike</a>, 
                making music, or enjoying a good sci-fi book. I am always looking to connect with others and learn new things.
            </p>
 
 
              <Portal
                closeOnTriggerClick
                openOnTriggerClick
                trigger={
                  <Button
                    content={open ? 'Close Portal' : 'Schedule a Call'}
                    negative={open}
                    positive={!open}
                    circular
                    basic
                    size="large"
                  />
                }
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
              >
                <Segment
              style={{
                left: '35%',
                position: 'fixed',
                top: '10%',
                zIndex: 1000,
              }}>
                <InlineWidget url="https://calendly.com/dmostoller/15-minute-coffee-virtual-chat" />
                </Segment>
        
                </Portal>

          </Grid.Column>
          <Grid.Column floated='right'width={6}>
            <Image bordered centered circular size='medium' src={photo} />
            <Grid centered style={{marginTop: "25px"}}>
                <Button icon labelPosition='left' 
                size='huge'
                href={resume}
                basic
                circular 
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