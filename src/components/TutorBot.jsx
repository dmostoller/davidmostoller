import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import robot from "../assets/robot-svgrepo-com.svg"

import m1 from '../assets/project-slides/tutorbot/1.png';
import m2 from '../assets/project-slides/tutorbot/2.png';
import m3 from '../assets/project-slides/tutorbot/3.png';



export default function TutorBot() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
             <div className='ui inverted fluid basic segment'>

                <div className="ui text container" >
                    <div className='ui fluid basic padded inverted compact segment' style={{marginTop: "50px"}}>
                        <a href="https://github.com/dmostoller/youtube-playlist-chatbot" target='_blank'>
                            <button className='ui right floated circular inverted button'><i className="github icon"></i>GitHub</button>
                            </a>
                        <div className="content">
                            <div className="header">
                            <h1 style={{marginBottom: "0px"}}><img className="ui left floated mini image" src={robot}></img>TutorBot</h1>
                            <h2 style={{marginTop: "0px"}}>Contextual Video Chatbot Assistant</h2>
                            </div>
                            <div className="meta" style={{paddingTop: "10px"}}>
                                <h3 style={{color: "grey"}}>
                                React, Python, Flask, Javascript, CSS, ChatGPT, Llama-Index
                                </h3>
                            </div>
                            <div className="description" style={{paddingTop: "10px"}}>
                                <h3>
                                A smart tool that incorporates an interactive React front end and AI
                                technology in order to enhance YouTube user learning experiences.
                                </h3>

                                <h4>
                                    <i className="video icon"></i>
                                    <a href="https://www.loom.com/share/54ffdd1cbc394c0c8b0ac4d3a3783097" target='_blank'>Watch</a> a video demo
                                </h4>
                                <h4 style={{marginTop: 0}}>
                                    <i className="laptop code icon"></i>
                                    <a href="https://superluminalpsy.com/learn" target='_blank'>Visit</a> a deployed version of the project
                                </h4>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='ui center aligned container'>
                    <h2 className="ui left aligned inverted header" style={{marginTop: "25px"}}></h2>
                    <div className='ui doubling stackable three column centered grid' style={{marginTop: "25px"}}>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m1} alt='1'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m2} alt='2'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m3} alt='3'></img>
                        </div>
                    </div>
                </div>
            
                <div className='ui centered grid' style={{marginTop: "50px", marginBottom: "50px"}}>
                        <HashLink to='/#projects' 
                         scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -75) }}
                        className="ui huge circular orange button">More Projects</HashLink>
                </div>
            </div>
    )
}