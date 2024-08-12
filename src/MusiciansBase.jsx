
import { Scrollbar, EffectFade, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import 'swiper/css/navigation';
import { Link } from 'react-router-dom';


import m1 from './assets/project-slides/musicians/1.jpg';
import m2 from './assets/project-slides/musicians/2.jpg';
import m3 from './assets/project-slides/musicians/3.jpg';
import m4 from './assets/project-slides/musicians/4.jpg';
import m5 from './assets/project-slides/musicians/5.jpg';
import m6 from './assets/project-slides/musicians/6.jpg';

export default function MusiciansBase() {
    return (
             <div className='ui inverted fluid segment'>

                <div className="ui text container" >
                    <div className='ui fluid basic padded inverted compact segment' style={{marginTop: "50px"}}>
                        <div className="content">
                            <div className="header">
                                <h1>Artist-Fan Interaction & Content Hub</h1>
                            </div>
                            <div className="meta" style={{paddingTop: "10px"}}>
                                <h4 style={{color: "grey"}}>React, Python, Flask, Javascript, SQLAlchemy, GeoPy, Cloudinary, PostgreSQL, WaveSurfer, Semantic-UI</h4>
                            </div>
                            <div className="description" style={{paddingTop: "10px"}}>
                                <h4>
                                A dynamic user experience platform for artists to create and share
                                content while engaging with fans through interactive features like chat
                                forums and personalized music collections.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ui center aligned container'>

                    <div style={{marginTop: "25px"}}>
                            <a href="https://github.com/dmostoller/musicians-base" target='_blank'>
                            <button className='ui circular inverted button'><i className="github icon"></i>GitHub</button>
                            </a>
                            <a href="https://superluminalpsy.com/" target='_blank'>
                            <button className='ui circular inverted button'><i className="laptop code icon"></i>Website</button>
                        </a>
                        <a href="https://vimeo.com/944678547?share=copy" target='_blank'>
                            <button className='ui circular inverted button'><i className="video icon"></i>Video</button>
                        </a>
                    </div>
                    <h2 className="ui left aligned inverted header" style={{marginTop: "25px"}}>Some photos of the project</h2>
                    <div className='ui doubling stackable padded three column centered grid' style={{marginTop: "50px"}}>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m1} alt='1'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m2} alt='2'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m3} alt='3'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m4} alt='4'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m5} alt='5'></img>
                        </div>
                        <div className='column'>
                            <img className="ui rounded bordered image" src={m6} alt='6'></img>
                        </div>
                    </div>


                </div>

              
                <div className='ui centered grid' style={{marginTop: "50px", marginBottom: "50px"}}>
                        <Link to='/' className="ui huge circular orange button">See More Projects</Link>
                </div>
            </div>
    )
}