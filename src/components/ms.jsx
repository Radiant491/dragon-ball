import * as React from 'react';
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
import img from '../ms.png'
  
  export default function RecipeReviewCard() {
  
    return (
    <>
    <div style={{justifyItems: 'center'}}>
        
   <Card sx={{ maxWidth: 400,}}>
   <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            MS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=  "Mahendra Singh Dhoni"
      />
    <CardMedia
        component="img"
        height="500"
        image={img}
        alt="lg tv"
      />
      <CardContent>
    <Typography variant="body2" color="text.secondary">
    M.S. Dhoni, in full Mahendra Singh Dhoni, (born July 7, 1981, Ranchi, Bihar [now Jharkhand] state, India), Indian cricketer whose rise to prominence in the early 21st century culminated in his captaincy of the Indian national team that won the one-day Cricket World Cup in 2011.
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


