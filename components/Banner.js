import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { useState } from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import banner from '../local-json/banner.json'
const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor:'rgb(206, 0, 0)',
      color:'white',
      minWidth: '100%',
      marginLeft:'auto',
      marginRight:'auto',
      cursor:'pointer',
      height: '65px',
      '&:hover':{
        textDecoration:'underline'
      }

    },
    span:{
        width: '630px',
        marginLeft:'auto',
        marginRight:'auto',
        textAlign:'center'
    }
  }))
const Banner=(pageProps)=>{
    const classes = useStyles()
    const [dialogenable,setdialogenable]=useState(false);
    return (
      // onClick={()=>{console.log("Clicked");setdialogenable(true)}}
             <Container maxWidth="xl" className={classes.container} >
                <div className={classes.span}>{banner.text}</div>
                    {/* <Dialog open={dialogenable} onClose={()=>{"close ";setdialogenable(false)}}>Hello</Dialog> */}
            </Container>
    )          
}
export default Banner;