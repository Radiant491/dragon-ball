import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
// import image from '../ms.png'


export default function extra() {
  const Delete = (roy)=>{    
    alert(`"${roy}" Account Has Been Deleted`);
  }
  let data = [{
    
    name:'Mahendra Singh Dhoni',
    phone: '022-67254873',
    email:'mahendrasinghshoni@gmail.com',
    address: 'Sr. No. 84/1, Tal Haveli, Maharashtra',
    dob :'7/7/1981',
    src: './images/dhoni.gif',
    alt:'image 1'

},
{
   name:'Iron Man',
   phone: '212-970-4133',
   email:'ironman@gmail.com',
   address: '10880 Malibu Point, 90265',
   dob:'29/5/1970',
   src: './images/man.gif',
   alt:'image 2'


},
{
name:'Spider Man',
phone: '(407) 224-1783',
email:'spiderman@gmail.com',
address: '20 Ingram Street in Forest Hills, Queens',
dob:'10/08/2001',
src: './images/spi.gif',
alt:'image 3'

}]
  return (
    <div>
       {/* {data.map((i)=>{
        return()
      })} */}
      <>
      <table className="table align-middle mb-0 bg-white">
      <thead className="bg-light">
       <tr>
       <th>Sl. No.</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Address</th>
        <th>DOB</th>
        <th>Action</th>
       </tr>
      </thead>
      <tbody>
      {data.map((i,index)=>  {
          return (
          
            <>
            <tr>
            <td>{index+1}</td>
              <td>{i.name}</td>
              <td>{i.phone}</td>
              <td>{i.email}</td>
              <td>{i.address}</td>
              <td>{i.dob}</td>
              <td>
        <Button type="button" color="success" className="btn btn-success btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}variant="contained" endIcon={<VisibilityIcon />} style={{marginRight:'10px'}}>View</Button>
        <Button type="button" color='primary' className="btn btn-primary"data-bs-toggle="modal" data-bs-target={`#exampleModal2${index}`} variant="contained" endIcon={<EditIcon />} style={{marginRight:'10px'}}>Edit</Button>
        <Button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold" color="error" data-bs-target={`#exampleModalToggle${index}`} data-bs-toggle="modal" variant="contained" endIcon={<DeleteIcon />}>Delete</Button>
      </td>
            </tr>
            <div class="modal fade" id={`exampleModal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Profile</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style= {{backgroundImage: 'linear-gradient(79deg, #7439db, #c66fbc 48%, #F7944D)'}}>
      <img src={i.src} alt={i.alt} height='200px' width='200px'/>
       <p><b>Name : </b>{i.name}</p> 
       <p><b>Phone : </b>{i.phone}</p>
       <p><b>Email : </b>{i.email}</p>
       <p><b>Address : </b>{i.address}</p>
       <p> <b>DOB : </b>{i.dob}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id={`exampleModal2${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      {/* <div class="modal-body">
       <label htmlFor="">Name</label><input type='text' value={i.name}/>
       <label htmlFor="">Phone</label><input type='text'value={i.phone}/>
       <label htmlFor="">Email</label><input type='text'value={i.email}/>
       <label htmlFor="">Address</label><input type='text'value={i.address}/>
       <label htmlFor="">DOB</label><input type='text'value={i.dob}/>
      </div> */}
       <div class="modal-body">

<form>
  <div class="mb-3">
    <label for="recipient-" class="col-form-label">Name:</label>
    <input type="text" class="form-control" id="recipient-" value={i.name} />
  </div>
  <div class="mb-3">
    <label for="recipient-" class="col-form-label">Phone:</label>
    <input type="text" class="form-control" id="recipient-" value={i.phone}/>
  </div>
  <div class="mb-3">
    <label for="message-text" class="col-form-label">Email:</label>
    <textarea class="form-control" id="message-text" value={i.email}></textarea>
  </div>
  <div class="mb-3">
    <label for="recipient-" class="col-form-label">Address:</label>
    <input type="text" class="form-control" id="recipient-" value={i.address}/>
  </div>
  <div class="mb-3">
    <label for="recipient-" class="col-form-label">DOB:</label>
    <input type="text" class="form-control" id="recipient-" value={i.dob}/>
  </div>
</form>
</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id={`exampleModalToggle${index}`} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Delete</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete this {i.name} profile!
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target={`#exampleModalToggle2${index}`} data-bs-toggle="modal" onClick={()=> Delete(`${i.name}`)}>Delete</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id={`exampleModalToggle2${index}`} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Deleted!..</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      {i.name} Profile is deleted!
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target={`#exampleModalToggle2${index}`} data-bs-toggle="modal">Close</button>
      </div>
    </div>
    
  </div>
  
  
</div>
      </>
      )
          })}

      </tbody>
      </table>
     
      
      
      </>






    </div>
  )
}
