import { makeStyles } from '@material-ui/core/styles'
import FooterCell from './FooterCell'
import Box from 'react-storefront/Box'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import Headerdata from '../../local-json/FooterData/HeaderData.json'
const useStyles = makeStyles(theme => ({
  wrap: {
    width: '100%',
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      padding: '0 0 15px 0',
      flexDirection: 'column',
    },
  },
}))
const FooterHeader = () => {
  const classes = useStyles()
  return (
    <Container style={{marginBottom: '25px'}}>
      <Grid container spacing={2} >
        {Headerdata.map((item, index) => (
          <Grid items lg={2} sm={12} className={classes.wrap} key={index}>
            <FooterCell data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default FooterHeader
