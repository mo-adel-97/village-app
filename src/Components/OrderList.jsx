import React, { useEffect, useState } from 'react';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import "./OrderList.css"

const AnimatedList = () => {


  return (

    <ul className="animated-list" style={{color:"white",fontSize:"20px"}}>
 
      <li> تهدف الجمعية الى مساعدة الفقراء والمحتاجين كما تسعى الجمعية لتقديم</li>
 
      <li>  كافة المتطلبات التي تحتاجها القرية,وهذا من خلال دعم أهلها والتي تضمن لهم </li>
 
      <li>,كم أن التمويل قد يكون تمويلا ماليا أو المشاركة بالمحاصيل الزراعية</li>
  

      <li> أو تمولا معنويا بوقفة أولاد القرية معنا لنصل الى ما نريد.</li>
    

    </ul>

  );
};

export default AnimatedList;