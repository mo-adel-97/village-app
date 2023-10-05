
import { Input } from '@mui/joy';
import form from "@mui/joy";

export default function FormSubscripe() {


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
     <div>
       <form >
         <input type="email" placeholder='ادخل الايميل الخاص بك' style={{fontSize:"20px",height:"50px"
        ,width:"250px",margin:"5px",paddingRight:"15px",color:"#5D5DFF"}}></input>
        <input type="submit" value='اشتراك' style={{fontSize:"25px",height:"55px"
        ,width:"150px",marginRight:"5px",color:"#5D5DFF"}}></input>
       </form>
     </div>
  )
}