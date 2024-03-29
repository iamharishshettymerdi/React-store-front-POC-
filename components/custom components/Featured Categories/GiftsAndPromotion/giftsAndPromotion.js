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
    console.log("gift compo ",props.data)
    return (
      <div >
           {props?.data?.map((element)=>(
                <div className={classes.main}>
                <Card sx={{ maxWidth: 345 }}>
                
                <CardContent style={{height: '115px',background:element.backgroundcolor}}>
                  <Typography gutterBottom variant="h6" component="div">
                    {element.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {element.description}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={element.image}
                />
              
              </Card>
                </div>
                    ))}
      </div>

        
      );
}

export default GiftandPromotion;