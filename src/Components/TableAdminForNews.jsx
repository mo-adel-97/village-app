import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Watch } from 'react-loader-spinner';
import Swal from 'sweetalert2';
function TableAdminForNews() {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3001/news")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => {
          setData(data);
          setLoading(false)
        })
      },[])
  return (
    <div>
    <br />
    {loading ?  <div className="container"  style={{display:"flex",alignItems:"center",justifyContent:"center",height:"50vh"}}>
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
      <Link to="/dashboard/addnews">
    <Button style={{width:"50%",wordSpacing:"8px"}}  variant="primary">اضافة خبر جديد</Button>
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
          <th style={{width:"20%",backgroundColor:"#0D6EFD",color:"white",fontSize:"20px"}}>فئة</th>
          <th style={{width:"20%",backgroundColor:"#0D6EFD",color:"white",fontSize:"20px"}}>عنوان</th>
          <th style={{width:"50%",backgroundColor:"#0D6EFD",color:"white",fontSize:"20px"}}>وصف</th>
          <th style={{width:"6%",backgroundColor:"#0D6EFD",color:"white",fontSize:"20px"}}>العمليات</th>
        </tr>
      </thead>
      <tbody>
      {data.map((news) => (
  <tr key={news.id}>
    <td>#</td>
    <td>{news.headline}</td>
    <td>{news.headline}</td>
    <td>{news.Details}</td>
    <td> <Grid item xs={8}>
        <DeleteForeverIcon  style={{height:"40px",width:"40px",color:"red"}} onClick={()=>{
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
                  const itemId = news.id;
                  const response =  fetch(`http://localhost:3001/delete/news/${itemId}`, {
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
                  'لم تقم بحذف هذا الملف :)',
                  'error'
                )
              }
            })
          }} />
      </Grid>
</td>
  </tr>
))}
      
      </tbody>
    </Table>
    </div> }
    
    </div>
  );
}

export default TableAdminForNews;