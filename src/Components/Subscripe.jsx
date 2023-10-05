import React from "react";
import "./Subscripe.css";
import FormSubscripe from "./Form";
const Supscipe = ()=>{
    return(
        <div className="Subscripe">
           <div className="div1">
            <h1 style={{color:"white"}}>
                أبقى معنا دائما على اطلاع
            </h1>
            <h3 style={{color:"#E2E1FF"}}>ارسل لنا الميل الخاص بك لتصلك أخر الأخبار مباشرة وقبل اي شخص أخر</h3>
           </div>
           <div className="div2">
            <FormSubscripe/>
           </div>
        </div>
    )
}
export default Supscipe;