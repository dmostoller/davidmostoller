import { Button } from "semantic-ui-react";



export default function Projects() {
  return (
    <div className='element' name="projects" style={{marginTop: "100px"}}>
    <div className="ui container" >
        <h1 className="ui centered header">Projects</h1>
            <div className="ui items">
                <div className="item">
                    <div className="content">
                    <div className="header" style={{marginBottom:"0px"}}>Artist-Fan Interaction & Content Hub</div>
                    <div className="meta">React, Python, Flask, Javascript, SQLAlchemy, GeoPy, Cloudinary, PostgreSQL, WaveSurfer, Semantic-UI</div>
                    <div className="description" style={{marginTop: "0px"}}>
                    A dynamic platform that allows artists to create and share content 
                    while engaging with fans through comments, chat forums, and personalized music collections. This project aims to 
                    enhance artist-audience connections by providing interactive features and a seamless user experience, showcasing 
                    my ability to develop solutions that drive user engagement and community building.
                    </div>
                    <div className='extra'>
                            <a href="https://github.com/dmostoller/musicians-base" target='_blank'>
                            <button className='ui basic small secondary button'>GitHub Repo</button>
                            </a>
                            <a href="https://superluminalpsy.com/" target='_blank'>
                            <button className='ui basic small secondary button'>Deployed Site</button>
                        </a>
                        <a href="https://vimeo.com/944678547?share=copy" target='_blank'>
                            <button className='ui secondary small basic button'>Video Demo</button>
                        </a>
                    </div>
                    </div>
                </div>

                <div className="item">
                    <div className="content">
                        <div className='header' style={{marginBottom:"0px"}}>Contextual Video Chatbot Assistant</div>
                        <div className="meta">React, Python, Flask, Javascript, CSS, ChatGPT, Llama-Index</div>
                        <div className="description" style={{marginTop: "0px"}}>A smart tool designed to answer 
                            user queries based on YouTube video content. By integrating video transcripts with ChatGPT and 
                            providing an interactive React front end, this project highlights my commitment to offering 
                            students personalized support and enhancing their learning experience through advanced AI technology.</div>
                        <div className='extra'>
                            <a href="https://github.com/dmostoller/youtube-playlist-chatbot" target='_blank'>
                                <button className='ui basic small secondary button'>GitHub Repo</button>
                            </a>
                            <a href="https://superluminalpsy.com/learn" target='_blank'>
                                <button className='ui basic small secondary button'>Deployed Site</button>
                            </a>
                            <a href="https://www.loom.com/share/54ffdd1cbc394c0c8b0ac4d3a3783097" target='_blank'>
                                <button className='ui secondary small basic button'>Video Demo</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="content">
                        <div className="header" style={{marginBottom:"0px"}}>Interactive Artist Showcase & Engagement Platform</div>
                        <div className="meta">React, Python, Flask, Javascript, SQLAlchemy, Semantic-UI, Cloudinary, PostgreSQL</div>
                        <div className-="description" style={{marginTop: "0px"}}>
                            A platform that enables an artist to showcase their work and engage with their 
                            audience through comments and feedback. This project was created to empower artists by 
                            providing them with a professional yet interactive online presence.</div>
                            <div className='extra content'>
                                <a href="https://github.com/dmostoller/social-artist-portfolio" target='_blank'>
                                    <button className='ui secondary small basic button'>GitHub Repo</button>
                                </a>
                                <a href="https://yasminmostoller.com/" target='_blank'>
                                    <button className='ui secondary small basic button'>Deployed Site</button>
                                </a>
                                <a href="https://www.loom.com/share/6963e453b24648c7863de7ad8d490ec4" target='_blank'>
                                    <button className='ui basic small secondary button'>Video Demo</button>
                                </a>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="content">
                    <div className='header' style={{marginBottom:"0px"}}>Mars Base (Oregon Trail: In Space)</div>
                    <div className="meta">Python, SQLAlchemy, Playsound</div>
                    <div className='description' style={{marginTop: "0px"}}>
                    A turn-based command-line interface game that I developed using Python and SQLAlchemy. 
                    This project sharpened my skills in game design, including implementing complex game logic, 
                    integrating multimedia elements like ASCII art and sound, and developing robust Python code structures.
                    </div>
                    <div className="description">
                        <a href="https://github.com/dmostoller/mars-base" target='_blank'>
                            <button className='ui basic secondary small button'>GitHub Repo</button>
                        </a>
                        <a href="https://vimeo.com/930451133?share=copy" target='_blank'>
                            <button style={{marginRight: "15px"}} className='ui secondary small basic button'>Video Demo</button>
                        </a>
                    </div>
                    </div>
                </div>

            </div>
    </div>
    </div>
  );
}