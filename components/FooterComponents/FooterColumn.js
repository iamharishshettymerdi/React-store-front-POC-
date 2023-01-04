import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import Box from 'react-storefront/Box'
import DoneIcon from '@material-ui/icons/Done'
import { swtichData } from '../../local-json/Footerdata'
const useStyles = makeStyles(theme => ({
  wrap: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    width:"440px",
    [theme.breakpoints.down('sm')]: {
      width:"100%",
    },
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: '10px',
  },
  custom: {
    alignItems: 'baseline',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  select: {
    display: 'flex',
    lineHeight: '2.25',
    justifyItems: 'space-between',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

const FooterColumn = () => {
  const classes = useStyles()
  const [country, setCountry] = useState('US')
  const handleClick=(value)=>{
    setCountry(value)
  }
  return (
    <Box className={classes.wrap} style={{ alignItems: 'left' }}>
      <span className={classes.title}>{swtichData.title}</span>
      <Box className={classes.custom} style={{ alignItems: 'left' }}>
        {swtichData.items?.map((item, index) => (
          <div className={classes.select} key={index}>
            <img width={'25px'} alignItems={'center'} src={item.flag} />
            <span onClick={()=>handleClick(item.country)}>
              {item.title}
            </span>
            {(country === item.country) && <DoneIcon />}
            <br />
          </div>
        ))}
      </Box>
    </Box>
  )
}
export default FooterColumn
/*

  <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{`Switch to ${item.country} `}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                {`You are about to switch to our ${item.country} shopping experience. Do you want to continue?`}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Continue</Button>
                <Button onClick={handleClose}>Cancel</Button>
              </DialogActions>
            </Dialog>*/
