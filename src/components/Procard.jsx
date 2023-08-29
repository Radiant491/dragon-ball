import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
import './Log.css'
import img from '../lg.jpg'
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
    <>
    <div style={{justifyItems: 'center'}}>
        
   <Card sx={{ maxWidth: 400,}}>
   <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            LG
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=  "LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55A3PSA (Rocky Black)"
      />
    <CardMedia
        component="img"
        height="600"
        image={img}
        alt="lg tv"
      />
      <CardContent>
    <Typography variant="body2" color="text.secondary">
    Lg is an established and very popular brand in the current Indian online market scenario. Products by the brand Lg are available at stores like croma, snapdeal, tatacliq, flipkart, pepperfry, amazon, moglix, reliancedigital, vijaysales, industrybuying, myntra. It sells various items under the categories refrigerators, air conditioners, washing machines fully automatic, tv, mobiles, washing machines semi automatic, desktop computer monitors, microwave ovens, water purifiers, home theaters, and more.
        </Typography><br />
        <Typography paragraph>-18% ₹1,14,990 <br /> <b>M.R.P.: ₹1,39,990</b></Typography>
        </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="info">
          <InfoIcon/>
        </IconButton>
        <IconButton aria-label="AddShoppingCart">
          <AddShoppingCartIcon />
          </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <Typography paragraph><b><u>About this item</u> </b>:</Typography>
      <Typography paragraph><ul type="square"> <li>Resolution: 4K Ultra HD (3840x2160) | AI 4K Upscaler | Refresh Rate: 60 hertz.</li> 
        <li>Connectivity: Wi-Fi (Built-in) | 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices | eARC | Bluetooth 5.0 | Optical | Ethernet</li>
        <li>Sound: 20 Watts Output | 2.0 Ch Speaker | Dolby Atmos Sound Configuration | AI Sound Pro with Virtual 5.1.2 up-mix | Built-in Stereo Surround Sound</li>
        <li>Smart TV Features: WebOS Smart TV | AI ThinQ | Built-in Alexa, Matter, Apple Airplay 2 & Homekit | Game Optimizer| Filmmaker Mode | α7 AI Processor 4K Gen6 | HDR 10 |2 GB RAM + 8 GB Storage | Magic Remote | Unlimited OTT App Support: Netflix, Prime Video, Disney+ Hotstar, Apple TV, Jio Cinema, SonyLIV, Discovery+, Zee5, Voot, MxPlayer, Google Play Movies & TV, YuppTV, Youtube</li>
        <li>Display: 4K OLED | Self-LIT Pixels | Dolby Vision IQ | Eye Comfort Display</li>
        <li>Warranty Information: 1 Year LG India Comprehensive Warranty and additional 2 year Complete Warranty  from the date of purchase</li></ul></Typography>
        </CardContent>
        </Collapse>
        </Card>
        </div>
    </>
    
  );
}


