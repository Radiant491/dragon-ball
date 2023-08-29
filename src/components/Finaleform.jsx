import React from 'react'
import ms from '../ms.png'
import iro from '../man.gif'
import spi from '../spider.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

export default function finaleform() {
    let data = [{
         name:'Mahendra Singh Dhoni',
         phone: '022-67254873',
         email:'mahendrasinghshoni@gmail.com',
         address: 'Sr. No. 84/1, Tal Haveli, Maharashtra',
         dob:'7/7/1981'
    },
    {
        name:'Iron Man',
        phone: '212-970-4133',
        email:'ironman@gmail.com',
        address: '10880 Malibu Point, 90265',
        dob:'29/5/1970'
   },
   {
    name:'Spider Man',
    phone: '(407) 224-1783',
    email:'spiderman@gmail.com',
    address: '20 Ingram Street in Forest Hills, Queens',
    dob:'10/08/2001'
}]
const Delete = (profileName) => {
  alert(`Profile has been "${profileName}"`);
};
const Update = (profileName) => {
  alert(`Profile has been "${profileName}"`);
};
  return (
    
    <div>
      
        <table className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Place</th>
      <th scope="col">DOB</th>
      <th scope="col">Action</th>
    </tr>
    
  </thead>
  <tbody>
 
  <tr>
  {data.map((i)=>{
          return (
            <>
      <td>
      <p className="fw-bold mb-1">{i.name}</p>
  
        <span>{i.phone}</span>
      
        <span>{i.email}	</span>
     
     {i.address}
      {i.dob}
      </td>
      </>
      )
          })}
      <td>
    <Button type="button" color="success" className="btn btn-success btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" variant="contained" endIcon={<VisibilityIcon />} style={{marginRight:'10px'}}>
  VIEW
</Button>


<Button type="button" color='primary' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#EditmapModal" variant="contained" endIcon={<EditIcon />} style={{marginRight:'10px'}} >
 Edit
</Button>
<Button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold" color="error" data-bs-target="#Delete" data-bs-toggle="modal" variant="contained" endIcon={<DeleteIcon />}>DELETE</Button>
    </td>
    </tr>
    </tbody>
    </table>

    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">PROFILE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
              src={ms}
              className="rounded-circle"
              alt=""
              style={{width: "80px",height: "80px"}}
              />
      <p ><b>Name</b> : Mahendra Singh Dhoni</p>
    <p ><b>Phone</b> : 022-67254873</p>
    <p ><b>Email</b>  :mahendrasinghshoni@gmail.com	</p>
    <p ><b>Address</b> : Sr. No. 84/1, Tal Haveli, Maharashtra</p>
    <p ><b>DOB </b>: 28/09/2001</p>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>

 
</div>

<div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">PROFILE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
              src={iro}
              className="rounded-circle"
              alt=""
              style={{width: "200px",height: "200px"}}
              />
      <p ><b>Name</b> : Iron Man</p>
    <p ><b>Phone</b> : 212-970-4133	</p>
    <p ><b>Email</b>  : ironman@gmail.com	</p>
    <p ><b>Address</b> : 10880 Malibu Point, 90265	</p>
    <p ><b>DOB </b>: 29/5/1970</p>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>

 
</div>

<div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">PROFILE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img
              src={spi}
              className="rounded-circle"
              alt=""
              style={{width: "80px",height: "80px"}}
              />
      <p ><b>Name</b> : Spider Man</p>
    <p ><b>Phone</b> : (407) 224-1783	</p>
    <p ><b>Email</b>  : spiderman@gmail.com	</p>
    <p ><b>Address</b> : 20 Ingram Street in Forest Hills, Queens	</p>
    <p ><b>DOB </b>: 10/8/2001	</p>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="EditmapModal" tabindex="-1" aria-labelledby="EditmapModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="EditmapModalLabel">PROFILE</h1>
              <Button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div class="modal-body">

              <form>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">Name:</label>
                  <input type="text" class="form-control" id="recipient-" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Email:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">Phone:</label>
                  <input type="text" class="form-control" id="recipient-" />
                </div>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">Address:</label>
                  <input type="text" class="form-control" id="recipient-" />
                </div>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">DOB:</label>
                  <input type="text" class="form-control" id="recipient-" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <Button className="btn btn-info m-2" data-bs-dismiss="modal" startIcon={<EditIcon />}>Edit</Button>
              <Button className="btn btn-primary m-2" data-bs-dismiss="modal" startIcon={<SendIcon />} onClick={() => Update("Updated")}>Send</Button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="Delete" aria-hidden="true" aria-labelledby="DeletemapModalToggleLabel" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="DeletemapModalToggleLabel" >Delete</h1>
              <Button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div className="modal-body">
              Are you sure you want to Delete this Profile!
            </div>
            <div className="modal-footer">
              <Button className="btn btn-primary m-2" /*data-bs-target="#DeletemapModalToggle"*/ data-bs-dismiss="modal" startIcon={<CancelIcon />}>Cancel</Button>
              <Button className="btn btn-danger m-2" data-bs-dismiss="modal" onClick={() => Delete("Deleted")} startIcon={<DeleteIcon />}> Delete</Button>
            </div>
          </div>
        </div>
      </div>
 
</div>
    
        
  )
}