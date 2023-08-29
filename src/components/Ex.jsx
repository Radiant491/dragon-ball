import React from 'react'
import ms from '../ms.png'
import iro from '../man.gif'
import spi from '../spider.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Demo() {
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
      <td>
        <div className="d-flex align-items-center">
          <img
              src={ms}
              alt="no img"
              style={{width: "45px",height: "45px"}}
              className="rounded-circle"
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Mahendra Singh Dhoni</p>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">022-67254873</span>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">mahendrasinghshoni@gmail.com</span>
      </td>
      <td>Sr. No. 84/1, Tal Haveli, Maharashtra</td>
      <td>7/7/1981</td>
      <td>
    <Button type="button" color="success" className="btn btn-success btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" variant="contained" endIcon={<VisibilityIcon />} style={{marginRight:'10px'}}>
  VIEW
</Button>


<Button type="button" color='primary' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" variant="contained" endIcon={<EditIcon />} style={{marginRight:'10px'}}>
 Edit
</Button>
<Button className="btn btn-danger btn-rounded btn-sm fw-bold" color="error" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" variant="contained" endIcon={<DeleteIcon />}>DELETE</Button>
    </td>
    </tr>
    

    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src={iro}
              className="rounded-circle"
              alt=""
              style={{width: "45px",height: "45px"}}
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Iron Man</p>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">212-970-4133</span>
      </td>
      <td>
        <span className="badge badge-primary rounded-pill d-inline"
              >ironman@gmail.com</span>
      </td>
      <td>10880 Malibu Point, 90265</td>
      <td>29/5/1970</td>
      <td>
      <Button type="button" color="success" className="btn btn-success btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" variant="contained" endIcon={<VisibilityIcon />} style={{marginRight:'10px'}}>
  VIEW
</Button>


<Button type="button" color='primary' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" variant="contained" endIcon={<EditIcon />} style={{marginRight:'10px'}}>
 Edit
</Button>
<Button className="btn btn-danger btn-rounded btn-sm fw-bold" color="error" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" variant="contained" endIcon={<DeleteIcon />}>DELETE</Button>
    </td>
    </tr>

    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src={spi}
              className="rounded-circle"
              alt=""
              style={{width: "45px",height: "45px"}}
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Spider Man</p>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-primary rounded-pill d-inline">(407) 224-1783</span>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">spiderman@gmail.com</span>
      </td>
      <td >20 Ingram Street in Forest Hills, Queens</td>
      <td>10/8/2001</td>
      <td>
      <Button type="button" color="success" className="btn btn-success btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" variant="contained" endIcon={<VisibilityIcon />} style={{marginRight:'10px'}}>
  VIEW
</Button>


<Button type="button" color='primary' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3" variant="contained" endIcon={<EditIcon />} style={{marginRight:'10px'}}>
 Edit
</Button>
<Button className="btn btn-danger btn-rounded btn-sm fw-bold" color="error" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" variant="contained" endIcon={<DeleteIcon />}>DELETE</Button>
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




<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">PROFILE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="Mahendra Singh Dhoni"/>
          </div>
          <div class="mb-3">
            <label for="recipient-number" class="col-form-label">Phone:</label>
            <input type="text" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="022-67254873"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Email:</label>
            <textarea class="form-control" id="message-text" required 
          label="Required"
          defaultValue="mahendrasinghshoni@gmail.com"></textarea>
          </div>
          
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Address:</label>
            <input type="text" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="Sr. No. 84/1, Tal Haveli, Maharashtra"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">DOB:</label>
            <input type="date" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="7/7/1981"/>
          </div>
        </form>
    

    </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">PROFILE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="Iron Man"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Phone:</label>
            <input type="number" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="212-970-4133"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Email:</label>
            <textarea class="form-control" id="message-text" required 
          label="Required"
          defaultValue="ironman@gmail.com"></textarea>
          </div>
          
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Address:</label>
            <input type="text" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="10880 Malibu Point, 90265"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">DOB:</label>
            <input type="date" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="29/5/1970	"/>
          </div>
        </form>
    

    </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">PROFILE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="Spider Man"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Phone:</label>
            <input type="number" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="(407) 224-1783"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Email:</label>
            <textarea class="form-control" id="message-text" required 
          label="Required"
          defaultValue="spiderman@gmail.com"></textarea>
          </div>
          
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Address:</label>
            <input type="text" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="20 Ingram Street in Forest Hills, Queens"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">DOB:</label>
            <input type="date" class="form-control" required
          id="recipient-name"
          label="Required"
          defaultValue="10/8/2001"/>
          </div>
        </form>
    

    </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>





<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Delete</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete this profile!
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Delete</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Deleted!..</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Profile is deleted!
      </div>
      
    </div>
  </div>
</div>


  </div>





  )
}