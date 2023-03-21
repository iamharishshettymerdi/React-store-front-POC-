import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined'
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: theme.spacing(10, 0, 0, 0),
  },
  textbox: {
    width: '100%',
    margin: '5px 0px',
    border: '1px solid gray',
    padding: '10px',
    borderRadius: '5px',
  },
  flexcontainer: {
    display: 'flex',
    flexDrection: 'row',
    textAlign: 'center',
    padding: '10px',
  },
  signupbutton: {
    fontSize: '14px',
    padding: '0.25em 1.125em',
    minHeight: '44px',
    fontWeight: 'var(--font-weight-bold)',
    borderWidth: '2px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '1',
    borderColor: 'transparent',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '99999px',
    appearance: 'none',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(0, 0, 0)',
    transition: 'background-color 0.2s ease 0s',
    minWidth: '14.5em',
    '&:hover': {
      backgroundColor: 'rgb(102, 102, 102)',
    },
  },
  divider: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.063)',
    borderTopColor: 'rgba(0, 0, 0, 0.063)',
    borderRightColor: 'rgba(0, 0, 0, 0.063)',
    borderLeftColor: 'rgba(0, 0, 0, 0.063)',
    margin: '24px -16px',
  },
  smalltext: {
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    lineHeight: '1.25',
    fontSize: '11px',
    color: 'rgb(102, 102, 102)',
    marginTop: '8px',
    marginBottom: '8px',
  },
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  padding: '16px 40px 32px',
  backgroundColor: 'rgb(255, 255, 255)',
  display: 'block',
  borderRadius: '6px',
}

export default function Form({value,closeForm}) {
    const classes=useStyles()
    // const [open,setOpen]=React.useState(true)
    // const handleClose=()=>{
    //     setOpen(false)
    // }
    const [passwordVisible, setPasswordVisible] =React.useState(false)
  return (
    <>
      <Modal
        open={value}
        onClose={closeForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 style={{ fontWeight: '700', fontSize: '16px' }}>Sign In</h2>
          <p>Sign in or create an account to enjoy FREE standard shipping on all orders.</p>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormGroup>
              <div>
                <input placeholder="Email Address" className={classes.textbox} />
              </div>
              <div style={{ position: 'relative' }}>
                <input type="password" placeholder="Password" className={classes.textbox} />
                {passwordVisible ? (
                  <VisibilityOffOutlinedIcon
                    onClick={() => {
                      console.log('Visible '), setPasswordVisible(true)
                    }}
                    style={{ position: 'absolute', top: '28%', right: '4%', cursor: 'pointer' }}
                  />
                ) : (
                  <RemoveRedEyeOutlinedIcon
                    onClick={() => {
                      console.log('Not Visible '), setPasswordVisible(false)
                    }}
                    style={{ position: 'absolute', top: '28%', right: '4%', cursor: 'pointer' }}
                  />
                )}
              </div>

              <div className={classes.flexcontainer}>
                <div>
                  <span>
                    <FormControlLabel control={<Checkbox />} label="Keep me signed in" />
                    <Tooltip
                      title="Selecting this option means you won’t have to sign in as often on this device. For your security, we recommend only doing this on your personal devices."
                      placement="top"
                      arrow
                    >
                      <ErrorOutlineIcon />
                    </Tooltip>
                  </span>
                </div>
                <div style={{ flex: '50%', padding: '10px' }}>
                  <Link>Forgot password?</Link>
                </div>
              </div>

              <button className={classes.signupbutton}>Sign In</button>
            </FormGroup>
            <p className={classes.smalltext}>
              By clicking “Sign In”, you (1) agree to the current version of our{' '}
              <a href="/privacy-policy">TERMS OF USE</a> and (2) have read Sephora’s{' '}
              <a href="/privacy-policy">Privacy Policy</a>
            </p>
            <div className={classes.divider}></div>
            <h2
              style={{
                whiteSpace: 'pre-wrap',
                overflowWrap: 'break-word',
                lineHeight: 1.25,
                fontWeight: 700,
                fontSize: '16px',
                marginBottom: '16px',
              }}
            >
              New to Sephora?
            </h2>
            <button
              className={classes.signupbutton}
              style={{ color: 'black', backgroundColor: 'white', border: '2px solid black' }}
            >
              Create Account
            </button>
          </Typography>
          <button
                        style={{
                          position: 'absolute',
                          top: '0px',
                          right: '0px',
                          zIndex: '3',
                          lineheight: 0,
                          height: '95px',
                          paddingRight:'40px',
                          border:'0',
                          backgroundColor:'transparent',

                        }} >
                        <CloseIcon style={{color:"black"}}  onClick={closeForm}/>
                      </button>
        </Box>
      </Modal>
    </>
  )
}
