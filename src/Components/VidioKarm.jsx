import React from "react";
import ReactPlayer from 'react-player'
import "./VidioKarm.css";
import vidio1 from "../Images/vidio2.mp4"
import vidio2 from "../Images/vidio1.mp4"
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
config({ ssrFadeout: true });

const Vedio = ()=>{

    const VIDEO_PATH = "https://youtu.be/UDSxX5jMsAA?si=D9I_0te7GCfSVq8V"

    return(
        <>
           <h2 style={{color:"white",textAlign:"center"}}>
             بعض من نفحات شيخ قريتنا أحمد عيد 😃👏
            </h2>
            <br /><br />
        <Zoom ssrFadeout duration="2000" delay="100">
        <div className="parentt">
           <ReactPlayer  url={vidio1} controls={true} className="vidio" />
           <ReactPlayer  url={vidio2} controls={true} className="vidio" />
        </div>
        </Zoom>
        <br /><br />
        </>
    )
}
export default Vedio;