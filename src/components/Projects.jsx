import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import robot from '../assets/robot-svgrepo-com.svg';
import music from '../assets/sound-svgrepo-com.svg';
import planet from '../assets/planet-svgrepo-com.svg';
import art from '../assets/art-brush-general-svgrepo-com.svg';
import guitar from '../assets/guitar-svgrepo-com.svg';
import task from '../assets/task-list-menu-document-svgrepo-com.svg';
import philareact from '../assets/philareact.png';
import resumeIcon from '../assets/ai-resume-icon.png';
import typenetwork from '../assets/typenetwork.png';
import SRS from '../assets/srs-logo.png';
import invoice from '../assets/invoice-receipt-svgrepo-com.svg';

export default function Projects() {
  return (
    <div className="element" name="projects" id="projects" style={{ marginTop: '100px' }}>
      <div className="ui fluid container">
        <h1 className="ui centered header">Projects</h1>
        <div className="ui middle aligned center aligned grid" style={{ marginBottom: '25px' }}>
          <div className="ui centered stackable three link cards" style={{ marginTop: '25px' }}>
            <Link
              to="resumeanalyzer"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="header" style={{ marginBottom: '0px' }}>
                  <img
                    className="ui image"
                    src={resumeIcon}
                    style={{ width: '60px' }}
                    alt="AI Resume Analyzer"
                  ></img>
                  <h1 style={{ marginTop: '0px' }}>AI Resume Analyzer</h1>
                </div>
                <div className="meta">
                  <h3>
                    Transforming the way job seekers optimize their resumes with AI-powered analysis and
                    insights.
                  </h3>
                </div>
              </div>
            </Link>
            <Link
              to="philareact"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="header" style={{ marginBottom: '0px' }}>
                  <img className="ui tiny image" src={philareact} alt="PhilaReact"></img>
                  <h1 style={{ marginTop: '0px' }}>PhilaReact</h1>
                </div>
                <div className="meta">
                  <h3>A community for React, Next.js, and TypeScript enthusiasts in Philadelphia.</h3>
                </div>
              </div>
            </Link>
            <Link
              to="https://typenetwork.com/"
              target="_blank"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="header" style={{ marginBottom: '0px' }}>
                  <img
                    className="ui tiny image"
                    src={typenetwork}
                    alt="TypeNetwork"
                    style={{ width: '60px', marginTop: '8px' }}
                  ></img>
                  <h1 style={{ marginTop: '8px' }}>TypeNetwork</h1>
                </div>
                <div className="meta">
                  <h3>The world&apos;s best fonts.</h3>
                </div>
              </div>
            </Link>
            <Link
              to="https://www.southriverstudios.com/"
              target="_blank"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="icon header" style={{ marginBottom: '0px' }}>
                  <Image
                    src={SRS}
                    alt="SRS"
                    className="ui tiny image"
                    style={{
                      backgroundColor: 'darkblue',
                      padding: '0px',
                      width: '60px',
                      height: '60px',
                      borderRadius: '0%'
                    }}
                  />
                  <h1 style={{ marginTop: '0px' }}>South River Studios</h1>
                </div>
                <div className="meta">
                  <h3>Marketing and SEO Website</h3>
                </div>
              </div>
            </Link>
            <Link
              to="musicians-base"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="header" style={{ marginBottom: '0px' }}>
                  <img className="ui mini image" src={music} alt="Musician's Base"></img>
                  <h1>Musician&apos;s Base</h1>
                </div>
                <div className="meta">
                  <h3>Artist-Fan Interaction & Content Hub</h3>
                </div>
              </div>
            </Link>
            <Link
              to="band-website"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="header" style={{ marginBottom: '0px' }}>
                  <img className="ui mini image" src={guitar} alt="Band Website & Music Player"></img>
                  <h1>Band Website & Music Player</h1>
                </div>
                <div className="meta">
                  <h3>An immersive online experience.</h3>
                </div>
              </div>
            </Link>
            <Link
              to="social-portfolio"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="header" style={{ marginBottom: '0px' }}>
                  <img className="ui mini image" src={art} alt="Social Artist Portfolio"></img>
                  <h1>Social Artist Portfolio</h1>
                </div>
                <div className="meta">
                  <h3>Interactive Artist Showcase & Engagement Platform</h3>
                </div>
              </div>
            </Link>
            <Link
              to="tutorbot"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="icon header" style={{ marginBottom: '0px' }}>
                  <img className="ui mini image" src={robot} alt="TutorBot"></img>
                  <h1>TutorBot</h1>
                </div>
                <div className="meta">
                  <h3>Contextual Video Chatbot Assistant</h3>
                </div>
              </div>
            </Link>
            <Link
              to="https://invoice-creator-cmsb.onrender.com/"
              target="_blank"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="header" style={{ marginBottom: '0px' }}>
                  <img className="ui mini image" src={invoice} alt="Invoice Creator"></img>
                  <h1>Invoice Creator</h1>
                </div>
                <div className="meta">
                  <h3>A user-friendly tool for creating invoices.</h3>
                </div>
              </div>
            </Link>
            <Link
              to="mars-base"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="header" style={{ marginBottom: '0px' }}>
                  <img className="ui mini image" src={planet} alt="Mars Game"></img>
                  <h1>Mars Game</h1>
                </div>
                <div className="meta">
                  <h3>Oregon Trail: In Space</h3>
                </div>
              </div>
            </Link>
            <Link
              to="taskmaster"
              className="ui card"
              style={{ margin: '25px', height: '200px', width: '350px' }}
            >
              <div className="content">
                <div className="header" style={{ marginBottom: '0px' }}>
                  <img className="ui mini image" src={task} alt="TaskMaster"></img>
                  <h1>TaskMaster</h1>
                </div>
                <div className="meta">
                  <h3>A sleek and functional task manager app.</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
