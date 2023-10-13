import React, { useEffect, useState } from 'react';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import "./OrderList.css"

const AnimatedList2 = () => {


  return (

    <ul className="animated-list" style={{color:"white",fontSize:"20px"}}>
 
      <li>تمتلئ القرية برجالها الذين لهم بعض النشاطات الأثرية</li>
 
      <li>  تهتم أيضا القرية بالنشاطات الرياضية والدورات الصيفية</li>
 
      <li>كما أن لها الكثير من النشاطات الاجتماعية والتعليمية </li>
  

      <li>كما أن لها الكثير من النشاطات الانسانية  ومساعدة المحتاجيين</li>
    

    </ul>

  );
};

export default AnimatedList2;