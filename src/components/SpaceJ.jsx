
import React, { useEffect } from 'react';

import { HashLink } from 'react-router-hash-link';

// import { Link } from 'react-scroll';

import guitar from "../assets/guitar-svgrepo-com.svg"

import m1 from '../assets/project-thumbs/spaceJ/1.png';
import m2 from '../assets/project-thumbs/spaceJ/2.png';
import m3 from '../assets/project-thumbs/spaceJ/3.png';
import full1 from '../assets/project-slides/spaceJ/1.png';



export default function SpaceJ() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
             <div className='ui inverted fluid basic segment'>

                <div className="ui text container" >
                    <div className='ui fluid basic padded inverted compact segment' style={{marginTop: "50px"}}>
                        {/* <a href="https://github.com/dmostoller/social-artist-portfolio" target='_blank'>
                            <button className='ui right floated circular inverted button'><i className="github icon"></i>GitHub</button>
                            </a> */}
                        <div className="content">
                            <div className="header">
                            <h1 style={{marginBottom: "0px"}}><img className="ui left floated mini image" src={guitar}></img>
                                Band Website
                            </h1>
                            <h2 style={{marginTop: "0px"}}>
                                An immersive online experience for musicians and their fans.
                                </h2>
                            </div>
                            <div className="meta" style={{paddingTop: "10px"}}>
                                <h3 style={{color: "grey"}}>
                                React, Next.js, Javascript, Tailwind CSS, Vercel
                                </h3>
                            </div>
                            <div className="description" style={{paddingTop: "10px"}}>
                                <h3>
                                An beautiful and interactive website for a musician to showcase their music and events.
                                </h3>

                                {/* <h4>
                                    <i className="video icon"></i>
                                    <a href="https://www.loom.com/share/6963e453b24648c7863de7ad8d490ec4" target='_blank'>Watch</a> a video demo
                                </h4> */}
                                {/* <h4 style={{marginTop: 0}}>
                                    <i className="laptop code icon"></i>
                                    <a href="https://yasminmostoller.com/" target='_blank'>Visit</a> a deployed version of the project
                                </h4> */}

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
                        <div className='three column centered row'>
                            <img className="ui rounded bordered image" src={full1} alt='4'></img>
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