import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Grid from '@mui/material/Grid'
import Box from 'react-storefront/Box'
import Link from 'react-storefront/link/Link'
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    height: '40px',
    cursor: 'pointer',
    margin:0,
    width:"max-content",
  },
  link:{
    color: "white",
    textDecoration: "none",
    display: "flex",
  },
  image: {
    height: '30px',
    marginRight: '10px',
  },
  textbox: {
    display: 'flex',
    flexDirection: 'column',
    letterSpacing: '0px',
  },
  title: {
    margin: 0,
    border: 0,
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
    },
    clear: "both",
    display: "inline-block",
    whiteSpace: "nowrap",
  },
  description: {
    margin: 0,
    border: 0,
    textAlign: 'left',
  },
}))

const FooterCell = ({ data }) => {
  const { icon, title, description,url } = data
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <Link href={url} prefetch="visible"   >
      <a className={classes.link}>
      <img className={classes.image} src={icon} />
      <div className={classes.textbox}>
        <span className={classes.title}>{title}</span>
        <span className={classes.description}>{description}</span>
      </div>
      </a>
      </Link>
    </Grid>
  )
}

export default FooterCell
