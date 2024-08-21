import { Link } from "react-router-dom";

import robot from "../assets/robot-svgrepo-com.svg"
import music from "../assets/sound-svgrepo-com.svg"
import planet from "../assets/planet-svgrepo-com.svg"
import art from "../assets/art-brush-general-svgrepo-com.svg"
import guitar from "../assets/guitar-svgrepo-com.svg"
import task from "../assets/task-list-menu-document-svgrepo-com.svg"


export default function Projects() {


  return (
    <div className='element' name="projects" id='projects' style={{marginTop: "100px"}}>
    <div className="ui fluid container" >
        <h1 className="ui centered header">Projects</h1>
        <div className='ui center aligned two column padded grid' style={{ marginBottom: "25px"}}>
            <div className='ui stackable inverted link cards' style={{marginTop: "25px"}}>
                <div className='column'>
                    <Link to='musicians-base' className="ui card" style={{margin: "25px", height: "200px", width: "350px"}}>
                        <div className="content">
                            <div className="header" style={{marginBottom:"0px"}}>
                                <img className="ui mini image" src={music}></img>
                                <h1>Musician's Base</h1>
                                </div>
                            <div className="meta"><h3>Artist-Fan Interaction & Content Hub</h3></div>
                        </div>
                    </Link>

                    <Link to='tutorbot' className="ui card" style={{margin: "25px", height: "200px", width: "350px"}}>
                        <div className="content">
                            <div className='icon header' style={{marginBottom:"0px"}}>
                                <img className="ui mini image" src={robot}></img>
                                <h1>TutorBot</h1>
                            </div>
                            <div className="meta"><h3>Contextual Video Chatbot Assistant</h3></div>
                        </div>
                    </Link>

                    <Link to='band-website' className="ui card" style={{margin: "25px", height: "200px", width: "350px"}}>
                        <div className="content">
                            <div className='header' style={{marginBottom:"0px"}}>
                            <img className="ui mini image" src={guitar}></img>
                            <h1>Band Website</h1>
                            </div>
                            <div className="meta"><h3>An immersive online experience.</h3></div>
                        </div>
                    </Link>

                </div>
                <div className='column'>
                    
                    <Link to='social-portfolio' className="ui card" style={{margin: "25px", height: "200px", width: "350px"}}>
                        <div className="content">
                            <div className="header" style={{marginBottom:"0px"}}>
                            <img className="ui mini image" src={art}></img>
                            <h1>Social Artist Portfolio</h1>
                            </div>
                            <div className="meta"><h3>Interactive Artist Showcase & Engagement Platform</h3></div>
                        </div>
                    </Link>

                    <Link to='taskmaster' className="ui card" style={{margin: "25px", height: "200px", width: "350px"}}>
                        <div className="content">
                            <div className='header' style={{marginBottom:"0px"}}>
                            <img className="ui mini image" src={task}></img>
                            <h1>TaskMaster</h1>
                            </div>
                            <div className="meta"><h3>A sleek and functional task manager app.</h3></div>
                        </div>
                    </Link>

                    <Link to='mars-base' className="ui card" style={{margin: "25px", height: "200px", width: "350px"}}>
                        <div className="content">
                            <div className='header' style={{marginBottom:"0px"}}>
                            <img className="ui mini image" src={planet}></img>
                            <h1>Mars Game</h1>
                            </div>
                            <div className="meta"><h3>Oregon Trail: In Space</h3></div>
                        </div>
                    </Link>
                </div>

                <div className="column">
                   


                </div>
            </div>            
        </div>
    </div>
    </div>
  );
}