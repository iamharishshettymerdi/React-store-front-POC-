import { makeStyles } from '@material-ui/core/styles'
import TextBox from '../Common/TextBox'
import Button from '../Common/Button'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import { emailValidator } from '../Common/vaildate'
const useStyles = makeStyles(theme => ({
  wrap: {
    display: 'flex',
    flexDirection:"column",
    width: '100%',
    height:"100%",
    alignContent: 'start',
    marginBottom: 'auto',
  },
  tab: {
    fontSize: '28px',
    width:'max-content',
    display: 'flex',
    alignContent: 'flex-start',
    fontWeight:'bold',
    height:'65%'
  },
  label:{
    paddingBottom:"10px"
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: '30px',
    width:'fit-content',
  },
  line:{
    display: "flex",
    justifyContent: "space-around",
  },
}))

const FooterForm = () => {
  const classes = useStyles()
  const [emailDetails, setEmailDetails] = useState({
    inputvalue: '',
    errorMessage: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
    if(!emailValidator(emailDetails.inputvalue,setEmailDetails))
  {
    return;
  }
  console.log('value submitted');
};
  return (
      <Grid className={classes.wrap}>
        <p className={classes.tab}>
          We Belong to
          <br />
          Something Beautiful
        </p>
        <Grid className={classes.form}>
          <span className={classes.label}>Signup for Sephora Emails</span>
          <Grid className={classes.line}>
          <TextBox
            placeholder="Enter Your Email address"
            type="email"
            value={emailDetails}
            setValue={setEmailDetails}
          />
          <Button
            color="black"
            textcolor="white"
            radius="6px"
            width="55px"
            height="40px"
            padding="5px"
            onClick={submitHandler}
          >
            Signup
          </Button>
          </Grid>
        </Grid>
      </Grid>
  )
}
export default FooterForm
