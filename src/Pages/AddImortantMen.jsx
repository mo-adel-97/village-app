import React from "react";

import { Watch } from  'react-loader-spinner'
import { useForm } from "react-hook-form";
import admin from "../Images/user-gear.png"
// import { useNavigate } from "react-router-dom";
import Stars from "../Components/BackGroundAdminPage"
import { useEffect,useState } from "react";
import "../Pages/Login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";
  import 'react-toastify/dist/ReactToastify.css';
// import Stars from "../Components/BackGroundAdminPage";
function FormAddNews() {
  const Navigate = useNavigate()
  const notify = () => toast("Wow so easy !");
  const navigate = useNavigate()
  const [data,setData] = useState([])
  const [image,setImage] = useState([])
  const [loading,setLoading] = useState(false);
  const [form,setForm] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  
  const onSubmit = (data) => {
    console.log(data);
    const file = data.file[0]
       const formData = new FormData();
      formData.append("file",file);
      formData.append("name",data.name);
      formData.append("pio",data.PIO);
      formData.append("description",data.description);
      console.log(file)
      setLoading(true)
      setForm(false)
     axios.post('http://localhost:3001/ubload', formData )
    .then(function (response) {
      console.log(response);
      setLoading(false)
      setForm(true)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const [open, setOpen] = React.useState(true);
  return (
    <div>
        <Stars />
        <br/><br/><br/>
            {/* {image.preview && <img src={image.preview} width='100' height='100' />} */}
          {/* <hr></hr> */}
        {form ?     <div className="divlogin" style={{justifyContent:"center",placeItems:"center"}}>
    <form onSubmit={handleSubmit(onSubmit)} className="formlogin">
    <input style={{color:"white"}} className="inputlogin" {...register("file", { required: true })}
       type="file" />
      {errors.URL && <p className="plogin">This field is required</p>}

      <input className="inputlogin" {...register("PIO", { required: true })}
       type="text" placeholder="ادخل اسم الشهرة الخصا بالعنصر"/>
      {errors.PIO && <p className="plogin">This field is required</p>}

      <input className="inputlogin" {...register("name", { required: true })}
       type="text" placeholder="ادخل الاسم الخاص بالعنصر" />
      {errors.name && <p className="plogin">This field is required</p>}

        <textarea className="inputlogin" {...register("description",{ required: true })} type="text"
        placeholder="توصيفا لتأثير العنصر داخل القرية" style={{height:"150px",fontSize:"20px"}}
            maxLength="200"
          />  
      {errors.description && <p className="plogin">This field is required</p>}

      <input  className="inputlogin" type="submit" value="اضافة عنصر "/>
    </form>
    </div> :  loading ? 
    <div className="container"  style={{display:"flex",alignItems:"center",justifyContent:"center",height:"50vh"}}>
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
    </div>
  : null}

    </div>
  );
}

export default FormAddNews;
