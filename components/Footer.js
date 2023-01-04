import { Box } from 'react-storefront'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import FooterCell from './FooterComponents/FooterCell'
import FooterBody from './FooterComponents/FooterBody'
import FooterHeader from './FooterComponents/FooterHeader'
import FooterEnd from './FooterComponents/FooterEnd'
import Grid from '@mui/material/Grid'
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
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Grid className={classes.wrap}>
        <FooterHeader />
        <FooterBody />
        <FooterEnd />
      </Grid>
    </Grid>
  )
}

export default Footer