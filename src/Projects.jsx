


export default function Projects() {
  return (
    <div className="ui basic very padded segment">
        <h1>Projects</h1>
            <div className="ui two padded cards">
                <div className="card" style={{marginBottom: "50px"}}>
                    <div className="content">
                    <h3 className="header" style={{marginBottom:"0px"}}>Musician's Base</h3>
                    <h5 className='grey' style={{marginTop: "0px"}}>A Social Fanpage for Independent Musicians</h5>
                        {/* <a href="https://vimeo.com/944678547?share=copy" target='_blank'>
                            <img style={{maxWidth: "700px"}} src={musicThumb}></img>
                        </a> */}
                        {/* <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/944678547?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}} frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen title="Musician's Base Project Presentation"></iframe></div>
                        <script src="https://player.vimeo.com/api/player.js"></script> */}
                        <div style={{marginTop: "15px"}}>
                            <a href="https://github.com/dmostoller/musicians-base" target='_blank'>
                            <button  style={{marginRight: "15px"}} className='ui basic teal button'>GitHub Repo</button>
                            </a>
                            <a href="https://superluminalpsy.com/" target='_blank'>
                            <button className='ui basic violet button'>Deployed Site</button>
                        </a>
                    </div>
                    </div>
                </div>

                <div className="card">
                <div className="content">

                    <h3 style={{marginBottom:"0px"}}>TutorBot</h3>
                    <h5 className='grey' style={{marginTop: "0px"}}>ChatGPT Assistant for Youtube Playlists</h5>
                    {/* <a href="https://www.loom.com/share/54ffdd1cbc394c0c8b0ac4d3a3783097" target='_blank'>
                            <img style={{maxWidth: "700px"}} src="https://cdn.loom.com/sessions/thumbnails/54ffdd1cbc394c0c8b0ac4d3a3783097-with-play.gif"></img>
                        </a> */}
                        {/* <div 
                            style={{position: "relative", paddingBottom: "60%", height: "0"}}>
                            <iframe src="https://www.loom.com/embed/54ffdd1cbc394c0c8b0ac4d3a3783097?sid=7230f8a1-696f-429a-b30f-a72c9b5676aa" 
                            frameborder="0" 
                            style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}
                            >
                            </iframe>
                        </div> */}

                        <div style={{marginTop: "15px"}}>
                        <a href="https://github.com/dmostoller/youtube-playlist-chatbot" target='_blank'>
                            <button style={{marginRight: "15px"}} className='ui basic teal button'>GitHub Repo</button>
                        </a>
                        <a href="https://superluminalpsy.com/learn" target='_blank'>
                            <button className='ui  basic violet button'>Deployed Site</button>
                        </a>
                    </div>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                    <h3 style={{marginBottom:"0px"}}>Social Art Portfolio</h3>
                    <h5 className='grey' style={{marginTop: "0px"}}>A Fresh Take on an Artist Portfolio</h5>
                        {/* <a href="https://www.loom.com/share/6963e453b24648c7863de7ad8d490ec4" target='_blank'>
                            <img style={{maxWidth: "700px"}} src="https://cdn.loom.com/sessions/thumbnails/6963e453b24648c7863de7ad8d490ec4-with-play.gif"></img>
                        </a> */}

                        {/* <div 
                            style={{position: "relative", paddingBottom: "60%", height: "0"}}>
                            <iframe src="https://www.loom.com/embed/6963e453b24648c7863de7ad8d490ec4?sid=8e6a6ad8-31de-43d7-abfa-9e89c8fdd76a" 
                            frameborder="0" 
                            style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}
                            >
                            </iframe>
                        </div> */}
                        <div style={{marginTop: "15px"}}>
                        <a href="https://www.loom.com/share/6963e453b24648c7863de7ad8d490ec4" target='_blank'>
                            <button style={{marginRight: "15px"}} className='ui blue basic button'>Video Walkthrough</button>
                        </a>
                        <a href="https://github.com/dmostoller/social-artist-portfolio" target='_blank'>
                            <button style={{marginRight: "15px"}} className='ui teal basic button'>GitHub Repo</button>
                        </a>
                        <a href="https://yasminmostoller.com/" target='_blank'>
                            <button className='ui violet basic button'>Deployed Site</button>
                        </a>
                    </div>
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                    <h3 style={{marginBottom:"0px"}}>Mars Base</h3>
                    <h5 className='grey' style={{marginTop: "0px"}}>A Python CLI Game in the style of Oregon Trail</h5>
                        {/* <a href="https://vimeo.com/930451133?share=copy" target='_blank'>
                            <img style={{maxWidth: "700px"}} src={marsThumb}></img>
                        </a> */}
                        {/* <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/930451133?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}} frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen title="Mars Base - Project Presentation"></iframe></div>
                        <script src="https://player.vimeo.com/api/player.js"></script> */}
                        <div style={{marginTop: "15px"}}>
                        <a href="https://github.com/dmostoller/mars-base" target='_blank'>
                            <button className='ui basic teal button'>GitHub Repo</button>
                        </a>
                    </div>
                    </div>
                </div>

            </div>
    </div>
  );
}