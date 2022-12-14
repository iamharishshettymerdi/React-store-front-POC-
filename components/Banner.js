import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { useState } from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor:'rgb(192, 220, 241)',
      maxwidth: '100%',
      marginLeft:'auto',
      marginRight:'auto',
      cursor:'pointer',
      height:'50px',
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
                <div className={classes.span}>Get FREE shipping on all orders when you join Beauty Insider. Exclusions/terms apply.† </div>
                    <Dialog open={dialogenable} onClose={()=>{"close ";setdialogenable(false)}}>Hello</Dialog>
            </Container>
    )          
}
export default Banner;