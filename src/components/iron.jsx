import * as React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
import './Log.css'
import img from '../iron.png'
  
  export default function RecipeReviewCard() {
  
    return (
    <>
    <div style={{justifyItems: 'center'}}>
        
   <Card sx={{ maxWidth: 400,}}>
   <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Stark
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=  "Iron Man"
      />
    <CardMedia
        component="img"
        height="500"
        image={img}
        alt="iron man"
      />
      <CardContent>
    <Typography variant="body2" color="text.secondary">
    <p>Name:Iron Man</p>
        <TextField
        style={{marginTop:'20px'}}
          id="outlined-read-only-input"
          label="Phone"
          defaultValue="212-970-4133	"
          InputProps={{
            readOnly: true,
          }}
        /><TextField
        style={{marginTop:'20px'}}
        id="outlined-read-only-input"
        label="Email"
        defaultValue="ironman@gmail.com	"
        InputProps={{
          readOnly: true,
        }}
      /><TextField
      style={{marginTop:'20px'}}
      id="outlined-read-only-input"
      label="Address"
      defaultValue="10880 Malibu Point, 90265"
      InputProps={{
        readOnly: true,
      }}
    />
        </Typography><br />
        </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="info">
          <InfoIcon/>
        </IconButton>
      </CardActions>
        </Card>
        </div>
    </>
    
  );
}


