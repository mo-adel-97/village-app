import React from "react";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import image1 from "../Images/ball.png";
import ArrayOfState from "./ArrayOfNews";
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
import "./News.css";
config({ ssrFadeout: true });


const News = ()=>{
    return(
        <div>
            <h2 style={{color:"white",textAlign:"center"}}>
                أهم الأخبار والعناوين الرئيسية
            </h2>
            <Zoom ssrFadeout duration="2000" delay="100">
            <div className="parent">
            {ArrayOfState.map((item) => (  
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
              <img src={item.image} alt="image"/>
          </Typography>
        </div>
        <CardContent>
          <Typography level="title-lg">{item.name}</Typography>
          <br />
          <Typography style={{color:"#9BA9B4"}} level="body-md">
            {item.paragraph}
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