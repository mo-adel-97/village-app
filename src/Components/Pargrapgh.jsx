import React from "react";
import "./Paragraph.css";
import Fade from 'react-reveal/Fade';
const Pargraph = ()=>{
    return(
        <Fade duration="2500" opposite>
        <div className="DIV"  style={{textAlign:"center",marginTop:"50px",margin:"auto"}}>
       <h4 className="Para"  style={{textAlign:"center",fontWeight:"bold"}}>
          <span>
           تعرض آخر الأخبار والمستجدات في القرية
           </span>
           <span>
            تغطية شاملة للأحداث والتطورات التي تحدث في القرية
            </span>
            <span>
            تقارير وتغطية للأحداث والفعاليات التي تنظمها القرية والمجتمع المحلي
            </span>
           </h4>
        </div>
        </Fade>
    )
}
export default Pargraph;