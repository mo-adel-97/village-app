import React, { useState } from "react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
import { useEffect } from "react";
import sport from "../Images/ball.png";
import economy from "../Images/economy.png"
import policy from "../Images/policy.png"
import religion from "../Images/religion.png"
import teaching from "../Images/teaching.png"
import social from "../Images/news.png"
import "./News.css";
config({ ssrFadeout: true });


const News = ()=>{
  const [data,setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/news")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setData(data))
  },[])
    return(
        <div>
            <h2 style={{color:"white",textAlign:"center"}}>
                أهم الأخبار والعناوين الرئيسية
            </h2>
            <Zoom ssrFadeout duration="2000" delay="100">
            <div className="parent">
            {data.map((item) => (  
              <Card
              style={{backgroundColor: "rgb(21 23 25)",textAlign:"center"}}
        variant="solid"
  
        invertedColors
        sx={{
          width: 400,
          maxWidth: '100%',
          // to make the demo resizeable
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <div>
          <Typography level="h2">
              {item.headline === "أخبار سياسية" ? <img src={policy} alt="policy" /> :
             item.headline === "أخبار رياضية" ? <img src={sport} alt="sporting"/>  : 
             item.headline === "أخبار اجتماعية" ? <img src={social} alt="social"/>  :
             item.headline === "أخبار دينية" ? <img src={religion} alt="religion"/>  :
             item.headline === "أخبار اقتصادية" ? <img src={economy} alt="economy"/>  :
             item.headline === "أخبار تعليمية" ? <img src={teaching} alt="teaching"/>  : null
            }
          </Typography>
        </div>
        <CardContent>
          <Typography level="title-lg">{item.headline}</Typography>
          <br />
          <Typography style={{color:"#9BA9B4"}} level="body-md">
            {item.Details}
          </Typography>
        </CardContent>
      </Card>
            ))}
            </div>
            </Zoom>
        </div>
    )
}
export default News;