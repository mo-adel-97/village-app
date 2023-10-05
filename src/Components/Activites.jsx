import React from "react";
import "./Activtes.css";
import AnimatedList from "./OrderList";
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
import Swipper from "./Swipper";
import Swipper2 from "./Swipper2";
config({ ssrFadeout: true });
const Activites = ()=>{

    return(
        <>
        <h1 style={{textAlign:"center",color:"white"}}>أهم النشاطات والأحداث داخل القرية</h1>
        <br/><br/>
        <Zoom  ssrFadeout duration="2000" delay="100">
        <div className="ParentActivites">
          <div className="child1">
             <Swipper />
          </div>
          <div className="child2" >
          <h2 style={{color:"white",textAlign:"center"}}>
                الجمعية الخيرية داخل قرية كرم 
            </h2>
             <AnimatedList/>
          </div>

          <div className="child1" >
          <h2 style={{color:"white",textAlign:"center"}}>
                الجمعية الخيرية داخل قرية كرم 
            </h2>
            <AnimatedList/>
          </div>
          <div className="child2">
            <Swipper2 />
          </div>
          </div>
        </Zoom>
        <br /><br />
        </>
    )
}
export default Activites;