import React from 'react'
import image from '../AOTLOGO.png'

export default function Demo() {
  return (
    <div>
       
       
       

  
       <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Place</th>
      <th scope="col">DOB</th>
    </tr>
    
  </thead>
  <tbody>
    
    <tr class="table-warning">
      
      <th scope="row">Seema</th>
      <td>9148542075</td>
      <td>fmsfms6839@gmail.com</td>
      <td>Udupi</td>
      <td>28/09/2001</td>
      <td>
    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
  VIEW
</button>


<button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
  UPDATE
</button>
<button class="btn btn-warning" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">DELETE</button>
    </td>
    </tr>
    

    <tr class="table-primary">
      <th scope="row">Rahul</th>
      <td>8569321575</td>
      <td>rahul@gmail.com</td>
      <td>Bangalore</td>
      <td>13/09/2001</td>
      <td>
    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
  VIEW
</button>

<button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
  UPDATE
</button>
<button class="btn btn-warning" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">DELETE</button>
    </td>
    </tr>

    <tr class="table-danger">
      <th scope="row">Radha</th>
      <td>8962547102</td>
      <td>radha@gmail.com</td>
      <td>Bangalore</td>
    <td > 20/10/2000</td>
      <td>
    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
  VIEW
</button>

<button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
  UPDATE
</button>
<button class="btn btn-warning" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">DELETE</button>
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
      <img src={Image} alt="" width="100px" height="100px"/>
      <p ><b>Name</b> : Seema</p>
    <p ><b>Email</b>  : fmsfms6839@gmail.com</p>
    <p ><b>Phone</b> : 9148542075</p>
    <p ><b>Address</b> : Udupi</p>
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
      <img src={image} alt="" width="100px" height="100px"/>
      <p ><b>Name</b> : Rahul</p>
    <p ><b>Email</b>  : rahul@gmail.com</p>
    <p ><b>Phone</b> : 8569321575</p>
    <p ><b>Address</b> : Mangalore</p>
    <p ><b>DOB </b>: 13/09/2001</p>
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
      <img src={image} alt="" width="100px" height="100px"/>
      <p ><b>Name</b> : Radha</p>
    <p ><b>Email</b>  : radha@gmail.com</p>
    <p ><b>Phone</b> : 8962547102</p>
    <p ><b>Address</b> : Bangalore</p>
    <p ><b>DOB </b>: 20/10/2000</p>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>

 
</div>




<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Email:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Phone:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Address:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">DOB:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
        </form>
    

    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Edit</button>
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