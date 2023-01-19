import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
    card: {
      minWidth: 0,
      cursor:'pointer',
      "&:hover": {
        transform: 'translateY(-5px) scale(1.005) translateZ(0)'  
      },
      height: '140px',
      width: '120px'
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
    console.log("props ",props.data.featuredcategories)
    const [data,setdata]=useState(props.data.featuredcategories)
    console.log("Data ",data)
    const classes = useStyles();


  return (
    <div style={{display: 'flex',marginTop: '30px',marginBottom:'30px',flexWrap: 'wrap'}}>
      <h2 style={{width: '125px'}}>{props.data.title}</h2>
      {props?.data?.data?.map((element)=>(<Box m={1} >
        <Card className={classes.card}>
          <CardContent  >
            <Typography variant="body2" component="p">
                {element.name}
                <div className={classes.imagecontainer}>   
                     <img src={element.image} width="50" height="50"/>
                </div>
            </Typography>
          </CardContent>
        </Card>
      </Box>))}


      
    </div>
  );
}

export default CategoriesComponent; 
