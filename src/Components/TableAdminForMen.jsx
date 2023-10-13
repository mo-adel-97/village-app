import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Watch } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import axios from 'axios';
function TableAdminForMen() {
    const [data,setData] = useState([]);
    // const image = "../Images/Screenshot (13).png"
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true);
const getData = ()=>{
  try {
    // Make API call to fetch the updated data
    const response = axios.get('http://localhost:3001/getmen');
    setData(response.data);
  } catch (error) {
    console.log(error)
  }
}
    useEffect(() => {
        fetch("http://localhost:3001/getmen")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data =>{
          setData(data)
          setLoading(false)
        })
      },[])
      // console.log(data[0].imageUrl)
  return (
    <div>
    <br />
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
    </div> : <div>
    <div style={{textAlign:"center"}}>
      <Link to="/dashboard/men">
    <Button style={{width:"50%",wordSpacing:"8px"}}  variant="primary">اضافة عنصر جديد</Button>
    </Link>
    </div>
    <br/>
    <Table striped bordered hover size="sm" style={{
        textAlign:"center",
         width:"90%",
         margin:"auto"
      }}>
      <thead >
        <tr style={{backgroundColor:"#0D6EFD",color:"white"}}>
          <th style={{width:"4%",backgroundColor:"#0D6EFD",color:"white",fontSize:"20px"}}>م</th>
          <th style={{width:"6%",backgroundColor:"#0D6EFD",color:"white",fontSize:"20px"}}>صورة</th>
          <th style={{width:"20%",backgroundColor:"#0D6EFD",color:"white",fontSize:"20px"}}>الشهرة</th>
          <th style={{width:"20%",backgroundColor:"#0D6EFD",color:"white",fontSize:"20px"}}>الاسم</th>
          <th style={{width:"50%",backgroundColor:"#0D6EFD",color:"white",fontSize:"20px"}}>تأثيره داخل القرية</th>
          <th style={{width:"6%",backgroundColor:"#0D6EFD",color:"white",fontSize:"20px"}}>العمليات</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item) => (
  <tr key={item.id}>
    <td>item.imageUrl</td>
    <td><img style={{width:"50px",heigth:"50px"}} src={require(`../Images/${item.imageUrl}`)} alt="image"/></td>
    <td>{item.pio}</td>
    <td>{item.name}</td>
    <td>{item.Description}</td>
    <td> <Grid item xs={8}>
        {/* <DeleteIcon /> */}
        <DeleteForeverIcon 
          onClick={()=>{
            const swalWithBootstrapButtons = Swal.mixin({
              customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
              },
              buttonsStyling: false
            })
            
            swalWithBootstrapButtons.fire({
              title: 'هل أنت متأكد ؟',
              text: "لا يمكنك استعادة ذلك !",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'نعم احذف ذلك',
              cancelButtonText: 'لا تحذف',
              reverseButtons: true
            }).then((result) => {
              if (result.isConfirmed) {
                try {
                  const itemId = item.id;
                  const response =  fetch(`http://localhost:3001/delete/items/${itemId}`, {
                    method: 'DELETE',
                  });
                   console.log(response)
                } catch (error) {
                  console.error('An error occurred', error);
                }
                swalWithBootstrapButtons.fire(
                  'تم الحذف',
                  'لقد تم حذف الملف الخاص بك',
                  'success'
                )
                window.location.reload()
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'تم الالغاء',
                  'لم تقم بحذف الملف  :)',
                  'error'
                )
              }
            })
          }}
        style={{height:"40px",width:"40px",color:"red"}} />
      </Grid>
</td>
  </tr>
))}
      </tbody>
    </Table>
      </div>}
    
    </div>
  );
}

export default TableAdminForMen;