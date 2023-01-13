import ResponsiveTiles from 'react-storefront/ResponsiveTiles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
//import { CardActionArea } from '@mui/material';

const useStyles = makeStyles(theme => ({
  main: {
    width: 'min-content',
    minWidth: '400px',
    padding: '10px',
    display: 'inline-block',
    marginTop: '30px',
    marginBottom: '30px'
  }
}))
const GiftandPromotion=(props)=>{
    const classes = useStyles()
    return (
        <div className={classes.main}>
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