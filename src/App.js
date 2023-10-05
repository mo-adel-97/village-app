import logo from './logo.svg';
import TextTransition, { presets } from 'react-text-transition';
import { useEffect,useState } from 'react';
import Slider from './Components/Slider';
import './App.css';
import IconPng from "./Images/Icon.png"
import Pargraph from './Components/Pargrapgh';
import Buttons from './Components/Buttons';
import BioCard from './Components/Cart';
import { TypeAnimation } from 'react-type-animation';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
 import Activites from './Components/Activites';
 import News from './Components/News';
 import Vedio from './Components/VidioKarm';
 import Supscipe from './Components/Subscripe';
 import Footer from './Components/Footer';
config({ ssrFadeout: true });
const TEXTS = ['أهلا بكم في الصفحة الرسمية لقرية كرم الجديدة', 'يمكنكم من خلالها متباعة أخر الأخبار والأحداث', 'كما تهتم الصفحة أيضا بجميع الأنشطة الخاصة بالقرية', 'كما تذكر أهم الشخصيات والكوادر المؤثرة داخل القرية'];
function App() {
  const [index, setIndex] =useState(0);
  const mystyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontWeight: "bold",
  };
useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="App">
         <img  style={{padding:"10px",width:"160px",height:"160px",padding:"30px"}} src={IconPng} alt='noimage' />
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
         <br/>
         <div style={{textAlign:"center"}}>
         <h1>
         <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'من أهم رجال القرية',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        // 'We produce food for Hamsters',
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block',color:"white" }}
      repeat={Infinity}
    />
         </h1>
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
  );
}

export default App;
