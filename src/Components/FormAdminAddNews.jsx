import React from "react";

import { useForm } from "react-hook-form";
import admin from "../Images/user-gear.png"
import { useNavigate } from "react-router-dom";
import Stars from "./BackGroundAdminPage";
import "../Pages/Login.css"
import { Watch } from "react-loader-spinner";
import Swal from "sweetalert2";
// import Stars from "../Components/BackGroundAdminPage";
function FormAddNews() {
  const [loading,setLoading] = React.useState(false);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    console.log(data);
    fetch('http://localhost:3001/postNews', {
      method: 'POST',
      body: JSON.stringify({data}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) =>response.json())
       .then((DATA) => {
          console.log(DATA);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          setLoading(false)
       })
       .catch((err) => {
          console.log(err.msg);
       });
  }

  const [open, setOpen] = React.useState(true);
  return (
    <div>
        <Stars />
        <br/><br/><br/><br/>
        {loading ? <div className="container"  style={{display:"flex",alignItems:"center",justifyContent:"center",height:"50vh"}}>
 <Watch
     height="100"
     width="100"
     radius="48"
     color="#1976D2"
     ariaLabel="watch-loading"
     wrapperStyle={{}}
     wrapperClassName=""
     visible={true}
  />
    </div>  :   <div className="divlogin" style={{justifyContent:"center",placeItems:"center"}}>
 
 <form onSubmit={handleSubmit(onSubmit)} className="formlogin">
 <select className="inputlogin" {...register("fe2a")} placeholder="اختر فئة الخبر الخاص بك">
     <option value="أخبار سياسية">أخبار سياسية</option>
     <option value="أخبار اجتماعية">أخبار اجتماعية</option>
     <option value="أخبار رياضية">أخبار رياضية</option>
     <option value="أخبار دينية">أخبار دينية</option>
     <option value="أخبار تعليمية">أخبار تعليمية</option>
     <option value="أخبار اقتصادية">أخبار اقتصادية</option>
   </select>
   <input className="inputlogin" {...register("headline", { required: true })}
    type="text" placeholder="اخل العنوان الخاص بالخبر" />
   {errors.headline && <p className="plogin">This field is required</p>}
     <textarea className="inputlogin" {...register("description",{ required: true })} type="text"
     placeholder="اكتب توصيفا للخبر " style={{height:"150px",fontSize:"20px"}}
         maxLength="200"
       />  
   {errors.description && <p className="plogin">This field is required</p>}

   <input  className="inputlogin" type="submit" value="اضافة الخبر "/>
 </form>
 </div>}

    </div>
  );
}

export default FormAddNews;
