import React from "react";
import TextTransition, { presets } from 'react-text-transition';
import { useEffect,useState } from 'react';
import Slider from '../Components/Slider';
import IconPng from "../Images/Icon.png"
import Pargraph from "../Components/Pargrapgh"
import Buttons from '../Components/Buttons';
import BioCard from '../Components/Cart';
import { TypeAnimation } from 'react-type-animation';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
 import Activites from '../Components/Activites';
 import News from '../Components/News';
 import Vedio from '../Components/VidioKarm';
 import Supscipe from '../Components/Subscripe';
 import Footer from '../Components/Footer';
 import Avatar from '@mui/material/Avatar';
 import avatarIcon from "../Images/icons8-admin-60.png";
 import { useNavigate } from "react-router-dom";
 import HandleMouseHover from "../Components/HandleMouseHover";
import Stars from "../Components/BackGroundAdminPage";
config({ ssrFadeout: true });
const TEXTS = ['أهلا بكم في الصفحة الرسمية لقرية كرم الجديدة', 'يمكنكم من خلالها متباعة أخر الأخبار والأحداث', 'كما تهتم الصفحة أيضا بجميع الأنشطة الخاصة بالقرية', 'كما تذكر أهم الشخصيات والكوادر المؤثرة داخل القرية'];

const User = ()=>{
    const [index, setIndex] =useState(0);
const mystyle = {
  // display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
};
useEffect(() => {
  const intervalId = setInterval(
    () => setIndex((index) => index + 1),
    3000, // every 3 seconds
  );
  return () => clearTimeout(intervalId);
}, []);

const [isHovering, setIsHovering] = useState(false);

const handleMouseOver = () => {
  setIsHovering(true);
};

const handleMouseOut = () => {
  setIsHovering(false);
};

const navigate = useNavigate();

const handleClick = ()=>{
    navigate('/login')
}
    return(
      <div>
        <Stars/>
        <div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
         <img  style={{padding:"15px",width:"120px",height:"120px"}} src={IconPng} alt='noimage'
         /> 
         <Avatar onClick={handleClick}alt="Remy Sharp" style={{margin:"15px",width:"80px",height:"80px",cursor:"pointer"}} src={avatarIcon} />
         </div>
         <br/><br/>
         <h1 style={{textAlign:"center",color:"white"}}>
            <TextTransition
            style={mystyle}
             springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
         </h1>
         <Pargraph />
         <br/>
         <Buttons />
         <br /><br/>
         <Slider />
         <br/><br />
         <div style={{textAlign:"center"}}>
         <h1 style={{color:"white"}}>
             من أهم رجال القرية
         </h1>
         <br/><br/>
         </div>
         <Zoom ssrFadeout duration="2000" delay="100">
         <BioCard/>
         </Zoom>
         <br/><br/>
         <Activites />
         <br/><br/>
         <News />
         <br/><br/>
         <Vedio />
         <br/><br/>
         <Supscipe />
         <br/><br/>
         <Footer/>
        </div>
        </div>
    )
}
export default User