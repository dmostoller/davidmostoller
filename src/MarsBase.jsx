
import React, { useEffect } from 'react';

import { HashLink } from 'react-router-hash-link';

import mars from "./assets/planet-svgrepo-com.svg"

import m1 from './assets/project-slides/mars/1.png';
import m2 from './assets/project-slides/mars/2.png';
import m3 from './assets/project-slides/mars/3.png';
import m4 from './assets/project-slides/mars/4.png';

export default function MarsBase() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
                <div className='ui inverted fluid basic segment'>
                <div className="ui text container" >
                    <div className='ui fluid basic padded inverted compact segment' style={{marginTop: "50px"}}>
                        <a href="https://github.com/dmostoller/mars-base" target='_blank'>
                            <button className='ui right floated circular inverted button'><i className="github icon"></i>GitHub</button>
                            </a>
                        <div className="content">
                            <div className="header">
                            <h1 style={{marginBottom: "0px"}}><img className="ui left floated mini image" src={mars}></img>Mars Base Game</h1>
                            <h2 style={{marginTop: "0px"}}>Oregon Trail: In Space</h2>
                            </div>
                            <div className="meta" style={{paddingTop: "10px"}}>
                                <h3 style={{color: "grey"}}>
                                Python, SQLAlchemy, Rich, Playsound
                                </h3>
                            </div>
                            <div className="description" style={{paddingTop: "10px"}}>
                                <h3>
                                A turn-based, command-line interface game that incorporates
                                multimedia elements like ASCII art and uses Python and SQLAlchemy
                                to create complex game logic.
                                </h3>

                                <h4>
                                    <i className="video icon"></i>
                                    <a href="https://vimeo.com/930451133?share=copy" target='_blank'>Watch</a> a video demo
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ui center aligned container'>
                    <h2 className="ui left aligned inverted header" style={{marginTop: "25px"}}>Some photos of the project</h2>
                    <div className='ui doubling stackable two column centered grid' style={{marginTop: "25px"}}>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m1} alt='1'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m2} alt='2'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m4} alt='3'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m3} alt='4'></img>
                        </div>
                    </div>



        </div>


                <div className='ui centered grid' style={{marginTop: "50px", marginBottom: "50px"}}>
                        <HashLink to='/#projects' 
                         scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -75) }}
                        className="ui huge circular orange button">See More Projects</HashLink>
                </div>
</div>
                

        </>
    )
}