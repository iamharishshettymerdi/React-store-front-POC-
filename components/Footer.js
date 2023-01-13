import { Box } from 'react-storefront'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import FooterCell from './FooterComponents/FooterCell'
import FooterBody from './FooterComponents/FooterBody'
import FooterHeader from './FooterComponents/FooterHeader'
import FooterEnd from './FooterComponents/FooterEnd'
import Grid from '@mui/material/Grid'
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'black',
    color: 'white',
    lineHeight: '1.25',
    width:"100%",
    fontSize:"12px",
  },
  wrap: {
    width: '100%',
    margin: 'auto auto 0 auto',
    maxWidth: '1280 px',
    padding: '32px 16px 0 16px',
    lineHeight: "1.25",
  },
  footerdivider:
  {
    background: 'gray',
    width: '85%',
    margin: 'auto'
  },
  feedbacksection:
  {
    backgroundColor: 'rgb(204, 204, 204)',
    justifyContent: 'center',
    display: 'flex',
    color:'black',
    padding: '15px',
    fontSize:'13px'
  },
  feedbacktext:{
    color:'black',
    textDecoration:'none',
    cursor:'pointer',
    '&:hover':{
      textDecoration:'underline'
    }
  }
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
       <div className={classes.feedbacksection}><b><a className={classes.feedbacktext}>Website feedback? Let us know ▸</a></b></div>
      <Grid className={classes.wrap}>
        <FooterHeader />
        <Divider className={classes.footerdivider}/>
        <FooterBody />
        <Divider className={classes.footerdivider}/>
        <FooterEnd />
      </Grid>
    </Grid>
  )
}

export default Footer
