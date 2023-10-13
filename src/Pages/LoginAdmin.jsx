import React from "react";

import { useForm } from "react-hook-form";
import admin from "../Images/user-gear.png"
import { useNavigate } from "react-router-dom";
import { Slide } from "react-reveal";
import "./Login.css";
import { useEffect,useState } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import { Collapse } from "@mui/material";
import Stars from "../Components/BackGroundAdminPage";
import close from "../Images/close.png"
import { Watch } from "react-loader-spinner";
import Swal from "sweetalert2";
// import Stars from "../Components/BackGroundAdminPage";
function Login() {
  const [loading,setLoading] = useState(false)
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
    fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify({data}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) => response.json())
       .then((DATA) => {
          console.log(DATA);
          if(DATA.msg !== "Unsuccessful Task Registration"){
            localStorage.setItem("token", DATA.token);
          }else{
            localStorage.removeItem("token")
            Swal.fire({
              icon: 'error',
              title: 'خطأ...',
              text: 'تأكد من كلمة السر أو اسم المستخدم',
            })
          }
           navigate("/dashboard")
           setLoading(false)
       })
       .catch((err) => {
          console.log(err.msg);
       });
  }


  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <Stars/>
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
    </div>: <div className="divlogin">
      <br/>
      <Slide right duration="1500">
      <Stack sx={{ width: '100%' }} spacing={2} style={{width:"50%",height:"40px",marginRight:"20px"}}>
      <Collapse in={open}>
        <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <div style={{textAlign:"left",marginRight:"5rem"}}>
           <img src={close} style={{width:"30px",height:"30px"}} alt="image"/> 
           </div>
          </IconButton>
        }
         severity="info" style={{color:"#1976D2",fontSize:"18px",wordSpacing:"3px"}}>
          هذه الصفحة خاصة بدخول السادة المسئولين عن الصفحة والأخبار المتدولة فيها
        </Alert>
      </Collapse>
    </Stack>
    </Slide>
      <br/><br />
    <div className="imagelogin">
    <img src={admin} alt="admin" style={{height:"100px",width:"100px"}}/>
    </div>
    <br/><br/> 
    <form onSubmit={handleSubmit(onSubmit)} className="formlogin">
      <input className="inputlogin" {...register("username", { required: true })}
       type="text" placeholder="اخل اسم المستخدم الخاص بك" />
      {errors.username && <p className="plogin">This field is required</p>}
      <input  className="inputlogin" {...register("password", { required: true })} type="password"
      placeholder="اخل كلمة المرور" />
      {errors.password && <p className="plogin">This field is required</p>}

      <input  className="inputlogin" type="submit" value="ادخال"/>
    </form>
    </div>}
    
    </div>
  );
}

export default Login;
