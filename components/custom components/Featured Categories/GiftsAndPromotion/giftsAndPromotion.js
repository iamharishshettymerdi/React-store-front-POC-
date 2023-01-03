import ResponsiveTiles from 'react-storefront/ResponsiveTiles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//import { CardActionArea } from '@mui/material';
const GiftandPromotion=(props)=>{

    console.log("props ",props)
    return (
        <div style={{width: 'min-content',
            minWidth: '400px',
            padding: '10px'}}>
                 <Card sx={{ maxWidth: 345 }}>
       
        <CardContent style={{height: '115px',background:props.backgroundcolor}}>
          <Typography gutterBottom variant="h6" component="div">
            {props.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.description}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.imageurl}
        />
      
      </Card>
        </div>
       

        
      );
}

export default GiftandPromotion;