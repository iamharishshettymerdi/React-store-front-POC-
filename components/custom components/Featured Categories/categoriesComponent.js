import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      minWidth: 0,
      cursor:'pointer',
      "&:hover": {
        transform: 'translateY(-5px) scale(1.005) translateZ(0)'  
      },
      height: '130px',
      width: '136px'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    imagecontainer:{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 'auto'
    }
  });

const CategoriesComponent=(props)=>{
    console.log("props ",props)
    const classes = useStyles();

  return (
    <div>
      <Box m={1} >
        <Card className={classes.card} style={{height: '145px',}}>
          <CardContent  >
            {/* <Typography variant="h5" component="h2" >
                Typography 1
            </Typography>
            <Typography className={classes.pos} color="textSecondary" ml={10} pos="10">
            </Typography> */}
            <Typography variant="body2" component="p">
                {props.data.name}
                <div className={classes.imagecontainer}>   
                     <img src={props.data.image} width="50" height="50"/>
                </div>
            </Typography>
          </CardContent>
    
          {/* <CardActions>
            <Button size="small" color="primary" >Learn More</Button>
          </CardActions> */}
        </Card>
  
      </Box>
    </div>
  );
}

export default CategoriesComponent; 
