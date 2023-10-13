import React from "react";
import Button from '@mui/material/Button';
import "./buttons.css";
import { Flip } from 'react-reveal';
const Buttons = () =>{
    return(
        <div className="buttonParent">
          <Flip duration="2000" top>
          <Button variant="contained" className="btn1" style={{margin:"15px"}}>
            <p style={{fontSize:"30px",paddingTop:"10px"}}>الأخبار</p></Button>
            </Flip>
            <Flip duration="2000" bottom>
          <Button variant="contained" className="btn2" style={{margin:"15px"}}>
            <p style={{fontSize:"30px",paddingTop:"10px"}}>النشاطات</p></Button>
            </Flip>
        </div>
    )
}
export default Buttons;