import { makeStyles } from '@material-ui/core/styles'
import Box from 'react-storefront/Box'

const useStyles = makeStyles(theme => ({
  label: {
    display: 'flex',
    marginBottom: '12px',
    alignText: 'left',
    fontFamily: 'bold',
  },
  textbox: {
    padding: '10px',
    borderRadius: '4px',
    borderColor: 'white',
  },
}))
const TextBox = ({ placeholder, type, label, text, value, setValue }) => {
  const classes = useStyles()
  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      {label && <label className={classes.label}>{label}</label>}
      <input
        className={classes.textbox}
        type={type}
        placeholder={placeholder}
        onChange={e => {
          setValue(p => ({ ...p, ['inputvalue']: e.target.value }))
        }}
      >
        {text}
      </input>
      {Boolean(value.errorMessage) && (
        <p style={{ fontSize: '10px', margin: '10px 0 0 0', }}>
          {value.errorMessage}
        </p>
      )}
    </Box>
  )
}
export default TextBox
