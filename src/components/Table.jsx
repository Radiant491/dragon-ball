import React from 'react'
import img from '../ms.png'
import iro from '../iron.png'
import ms from './ms'
import iron from './iron'
import spider from './spider'
import spi from '../spider.png'


export default function Table() {
  return (
    <>
    <div>
      <table className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Adress</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src={img}
              alt="no image"
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
      <td>Sr. No. 84/1, Tal Haveli, Pimpri-Chinchwad, Maharashtra – 412101</td>
      <td>
      <button type="button" className="btn btn-primary btn-sm btn-rounded" data-mdb-toggle="modal" data-mdb-target="#exampleModal" style={{marginRight:'10px'}}>
          Edit
        </button>
        <button
                type="button"
                className="btn btn-danger btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark" style={{marginRight:'10px'}}
              
                >
          Delete
        </button>
        <button type="button" className="btn btn-success btn-sm btn-rounded" data-mdb-toggle="modal" data-mdb-target="#exampleModal" style={{marginRight:'10px'}}>
          View
        </button>
        
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
      <td>
      <button type="button" className="btn btn-primary btn-sm btn-rounded" data-mdb-toggle="modal" data-mdb-target="#iron" style={{marginRight:'10px'}}>
          Edit
        </button>
        <button
                type="button"
                data-bs-target="#exampleModalToggle"
                className="btn btn-danger btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark" id='mango' style={{marginRight:'10px'}}
              
                >
          Delete
        </button>
        <button type="button" className="btn btn-success btn-sm btn-rounded" data-mdb-toggle="modal" data-mdb-target="#iron" style={{marginRight:'10px'}}>
          View
        </button>
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
        <span className="badge badge-warning rounded-pill d-inline">(407) 224-1783</span>
      </td>
      <td>
        <span className="badge badge-warning rounded-pill d-inline">spiderman@gmail.com</span>
      </td>
      <td>20 Ingram Street in Forest Hills, Queens</td>
      <td>
      <button type="button" className="btn btn-primary btn-sm btn-rounded" data-mdb-toggle="modal" data-mdb-target="#exampleModal" style={{marginRight:'10px'}}>
          Edit
        </button>
        <button
                type="button"
                className="btn btn-danger btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark" style={{marginRight:'10px'}}
              
                >
          Delete
        </button>
        <button type="button" className="btn btn-success btn-sm btn-rounded" data-mdb-toggle="modal" data-mdb-target="#spider" style={{marginRight:'10px'}}>
          View
        </button>
      </td>
    </tr>
  </tbody>
</table>

<div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Delete</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Are you sure you want to delete this profile!
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Delete</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Deleted!..</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Profile is deleted!
      </div>
      
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Profile</h5>
        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">{ms()}</div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="iron" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Profile</h5>
        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">{iron()}</div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="spider" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Profile</h5>
        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">{spider()}</div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
