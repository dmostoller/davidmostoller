
import React, { useEffect } from 'react';

import { HashLink } from 'react-router-hash-link';

import philareact from "../assets/philareact.png"

import p1 from '../assets/project-slides/philareact/pr-1.png';
import p2 from '../assets/project-slides/philareact/pr-2.png';
import p3 from '../assets/project-slides/philareact/pr-3.png';
import p4 from '../assets/project-slides/philareact/pr-4.png';
import p5 from '../assets/project-slides/philareact/pr-5.png';
import p6 from '../assets/project-slides/philareact/pr-6.png';



export default function PhilaReact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
             <div className='ui inverted fluid basic segment'>
                <div className="ui text container" >
                    <div className='ui fluid basic padded inverted compact segment' style={{marginTop: "50px"}}>
                        <a href="https://github.com/dmostoller/philareact" target='_blank'>
                            <button className='ui right floated circular inverted button'><i className="github icon"></i>GitHub</button>
                            </a>
                        <div className="content">
                            <div className="header">
                            <h1 style={{marginBottom: "0px"}}><img className="ui left floated tiny image" src={philareact}></img>PhilaReact</h1>
                            <h2 style={{marginTop: "0px"}}>A community for React, Next.js, and JavaScript enthusiasts in Philadelphia.</h2>
                            </div>
                            <div className="meta" style={{paddingTop: "10px"}}>
                                <h3 style={{color: "grey"}}>
                                Next.js, TypeScript, Prisma, Postgres, TailwindCSS, Vercel
                                </h3>
                            </div>
                            <div className="description" style={{paddingTop: "10px"}}>
                                <h3>
                                PhilaReact is a community where developers meet to discuss and share knowledge on React, Next.js, and JavaScript technologies.
                                </h3>
{/* 
                                <h4>
                                    <i className="video icon"></i>
                                    <a href="https://www.loom.com/share/6963e453b24648c7863de7ad8d490ec4" target='_blank'>Watch</a> a video demo
                                </h4> */}
                                <h4 style={{marginTop: 0}}>
                                    <i className="laptop code icon"></i>
                                    <a href="https://www.philareact.org/" target='_blank'>Visit</a> the website
                                </h4>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='ui center aligned container'>
                    <h2 className="ui left aligned inverted header" style={{marginTop: "25px"}}></h2>
                    <div className='ui doubling stackable three column centered grid' style={{marginTop: "25px"}}>
                        <div className='column'>
                            <img className="ui rounded bordered image" style={{marginBottom: "20px"}} src={p1} alt='1'></img>
                            <img className="ui rounded bordered image" style={{marginBottom: "20px"}} src={p4} alt='4'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" style={{marginBottom: "20px"}} src={p2} alt='2'></img>
                            <img className="ui rounded bordered image" style={{marginBottom: "20px"}} src={p5} alt='5'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" style={{marginBottom: "20px"}} src={p3} alt='3'></img>
                            <img className="ui rounded bordered image" style={{marginBottom: "20px"}} src={p6} alt='6'></img>
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