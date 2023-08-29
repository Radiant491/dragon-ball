import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import './Log.css'
import { Box } from '@mui/material';

 

function App() {
    return (
    <>
    <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
    <div className='ded'>
    <div className='log'>
    
      <h1>Login</h1>
      
      <form action="Procard.jsx" method="post" enctype="multipart/form-data">
      <Box >
     <div style={{diplay:'block'}}>
     <div style={{marginTop:'10px'}}><PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="demo-helper-text-aligned"label="Name" type='text'/></div>
      <div style={{marginTop:'10px'}}><EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="demo-helper-text-aligned"label="Email" type='email'/></div>
      <div style={{marginTop:'10px'}}><PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="demo-helper-text-aligned"label="Phone" type='number'/></div>
      <div style={{marginTop:'10px'}}><LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="demo-helper-text-aligned"label="Address" type='text'/></div>
     </div>
      <div style={{marginTop:'10px'}}><a href="Procard.jsx">
      <Button variant="contained" endIcon={<SendIcon />} >Send</Button></a>
      </div>
        </Box>
        </form>
        </div>
        </div>
        
    </>
     
  );
}

export default App;
