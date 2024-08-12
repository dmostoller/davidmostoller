import React, { useState } from 'react';
// import Swiper core and required modules
import { Scrollbar, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import { Modal } from "semantic-ui-react";


import marsThumb from './assets/project-thumbs/mars/1.png';

import m1 from './assets/project-thumbs/superluminal/1.png';
import m2 from './assets/project-thumbs/superluminal/2.png';
import m3 from './assets/project-thumbs/superluminal/3.png';
import m4 from './assets/project-thumbs/superluminal/4.png';
import m6 from './assets/project-thumbs/superluminal/6.png';
import m7 from './assets/project-thumbs/superluminal/7.png';

import p1 from './assets/project-thumbs/yasminmostoller/1.png';
import p2 from './assets/project-thumbs/yasminmostoller/2.png';
import p3 from './assets/project-thumbs/yasminmostoller/3.png';
import p4 from './assets/project-thumbs/yasminmostoller/4.png';
import p5 from './assets/project-thumbs/yasminmostoller/5.png';
import p6 from './assets/project-thumbs/yasminmostoller/6.png';

import t1 from './assets/project-thumbs/tutorbot/1.png';
import ProjectModal from './ProjectModal';

export default function Projects() {
    const [projectModalOpen, setProjectModalOpen] = useState(false);

    const deviceSize = window.innerWidth;

    function handlePOpen() {
        setProjectModalOpen(true)
    } 

    function handlePClose() {
        setProjectModalOpen(false)
    } 

  return (
    <div className='element' name="projects" style={{marginTop: "100px"}}>
    <div className="ui container" >
        <h1 className="ui centered header">Projects</h1>
            <div className="ui very relaxed items">
                <div className="item">
                    {/* <div className="ui large image">
                        <Swiper
                        // install Swiper modules
                        modules={[ Scrollbar, Autoplay, EffectFade]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        effect='fade'
                        crossfade={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className='mySwiper'
                        scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide><img src={m1} alt='music thumb 1'/></SwiperSlide>
                            <SwiperSlide><img src={m2} alt='music thumb 2'/></SwiperSlide>
                            <SwiperSlide><img src={m3} alt='music thumb 3'/></SwiperSlide>
                            <SwiperSlide><img src={m4} alt='music thumb 4'/></SwiperSlide>
                            <SwiperSlide><img src={m6} alt='music thumb 6'/></SwiperSlide>
                            <SwiperSlide><img src={m7} alt='music thumb 7'/></SwiperSlide>
                        </Swiper>
                    </div> */}
                    <div className="content">
                    { deviceSize > 768 &&
                        <ProjectModal project={'music'}/>
                    }
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
                            <button className='ui basic small secondary button'><i className="github icon"></i>GitHub</button>
                            </a>
                            <a href="https://superluminalpsy.com/" target='_blank'>
                            <button className='ui basic small secondary button'><i className="laptop code icon"></i>Website</button>
                        </a>
                        <a href="https://vimeo.com/944678547?share=copy" target='_blank'>
                            <button className='ui secondary small basic button'><i className="video icon"></i>Video</button>
                        </a>
                    </div>
                        
                    </div>
                </div>

                <div className="item">
                    {/* <div className="ui large image">
                        <img src={t1} alt='chatbot thumb 1'/>
                    </div> */}
                    <div className="content">
                    { deviceSize > 768 &&
                        <ProjectModal project={'chatbot'}/>
                    }
                        <div className='header' style={{marginBottom:"0px"}}>Contextual Video Chatbot Assistant</div>
                        <div className="meta">React, Python, Flask, Javascript, CSS, ChatGPT, Llama-Index</div>
                        <div className="description" style={{marginTop: "0px"}}>A smart tool designed to answer 
                            user queries based on YouTube video content. By integrating video transcripts with ChatGPT and 
                            providing an interactive React front end, this project highlights my commitment to offering 
                            students personalized support and enhancing their learning experience through advanced AI technology.</div>
                        <div className='extra'>
                            <a href="https://github.com/dmostoller/youtube-playlist-chatbot" target='_blank'>
                                <button className='ui basic small secondary button'><i className="github icon"></i>GitHub</button>
                            </a>
                            <a href="https://superluminalpsy.com/learn" target='_blank'>
                                <button className='ui basic small secondary button'><i className="laptop code icon"></i>Website</button>
                            </a>
                            <a href="https://www.loom.com/share/54ffdd1cbc394c0c8b0ac4d3a3783097" target='_blank'>
                                <button className='ui secondary small basic button'><i className="video icon"></i>Video</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="item">
                    {/* <div className="ui large image">
                        <Swiper
                        // install Swiper modules
                        modules={[ Scrollbar, Autoplay, EffectFade]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        effect='fade'
                        crossfade={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className='mySwiper'
                        scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide><img src={p1} alt='portfolio thumb 1'/></SwiperSlide>
                            <SwiperSlide><img src={p2} alt='portfolio thumb 2'/></SwiperSlide>
                            <SwiperSlide><img src={p3} alt='portfolio thumb 3'/></SwiperSlide>
                            <SwiperSlide><img src={p4} alt='portfolio thumb 4'/></SwiperSlide>
                            <SwiperSlide><img src={p5} alt='portfolio thumb 5'/></SwiperSlide>
                            <SwiperSlide><img src={p6} alt='portfolio thumb 6'/></SwiperSlide>
                        </Swiper>
                    </div> */}
                    <div className="content">
                    { deviceSize > 768 &&
                        <ProjectModal project={'portfolio'}/>
                    }
                        <div className="header" style={{marginBottom:"0px"}}>Interactive Artist Showcase & Engagement Platform</div>
                        <div className="meta">React, Python, Flask, Javascript, SQLAlchemy, Semantic-UI, Cloudinary, PostgreSQL</div>
                        <div className-="description" style={{marginTop: "0px"}}>
                            A platform that enables an artist to showcase their work and engage with their 
                            audience through comments and feedback. This project was created to empower artists by 
                            providing them with a professional yet interactive online presence.</div>
                            <div className='extra content'>
                                <a href="https://github.com/dmostoller/social-artist-portfolio" target='_blank'>
                                    <button className='ui secondary small basic button'><i className="github icon"></i>GitHub</button>
                                </a>
                                <a href="https://yasminmostoller.com/" target='_blank'>
                                    <button className='ui secondary small basic button'><i className="laptop code icon"></i>Website</button>
                                </a>
                                <a href="https://www.loom.com/share/6963e453b24648c7863de7ad8d490ec4" target='_blank'>
                                    <button className='ui basic small secondary button'><i className="video icon"></i>Video</button>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    {/* <div className="ui large image">
                        <img src={marsThumb} alt='mars thumb'/>
                    </div> */}
                    <div className="content">
                    { deviceSize > 768 &&
                        <ProjectModal project={'mars'}/>
                    }
                    <div className='header' style={{marginBottom:"0px"}}>Mars Base (Oregon Trail: In Space)</div>
                    <div className="meta">Python, SQLAlchemy, Playsound</div>
                    <div className='description' style={{marginTop: "0px"}}>
                    A turn-based command-line interface game that I developed using Python and SQLAlchemy. 
                    This project sharpened my skills in game design, including implementing complex game logic, 
                    integrating multimedia elements like ASCII art and sound, and developing robust Python code structures.
                    </div>
                    <div className="description">
                        <a href="https://github.com/dmostoller/mars-base" target='_blank'>
                            <button className='ui basic secondary small button'><i className="github icon"></i>GitHub</button>
                        </a>
                        <a href="https://vimeo.com/930451133?share=copy" target='_blank'>
                            <button style={{marginRight: "15px"}} className='ui secondary small basic button'><i className="video icon"></i>Video</button>
                        </a>
                    </div>
                    </div>
                </div>

            </div>
    </div>
    </div>
  );
}