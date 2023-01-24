import React, { useCallback, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@mui/material/Button'
import { Box, styled } from '@mui/material'
import QuicklookModal from './QuicklookModal'
import Form from '../../Common/Form'
const Main = styled(Box)`
  .label {
    min-height: 55px;
    color: black;
  }
`
const useStyles = makeStyles(theme => ({
  productImage: {
    width: '166px',
    maxWidth: '100%',
    objectFit: 'contain',
    margin: '0 auto 0 auto',
    display: 'block',
  },
  Image: {
    textAlign: 'center',
    display: 'block',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '100%',
  },
  card: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: '16px',
    borderRadius: '8px',
    maxHeight: '90%',
    minHeight: '330px',
    transitionDuration: '10s',
    transform: '0.2s ease 0s',
    margin: '6px',
    "&:hover $quickmodal":{
      display:'block'
    }
  },
  part: {
    display: 'flex',
    flexDirection: 'column',
  },
  price: {
    color: 'grey',
    fontSize: '22px',
  },
  productName: {
    fontSize: '12px',
    fontWeight: 'bold',
    margin: '0px !important',
    maxWidth: '100%',
    display: 'block',
  },
  productDescription: {
    fontSize: '14px',
    margin: '0px !important',
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflowWrap: 'break-word',
    webkitBoxOrient: 'vertical',
    webkitLineClamp: 2,
    display: '-webkit-box !important',
  },
  productpoint: {
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    fontWeight: '700',
    margin: 0,
  },
  button: {
    margin: 'auto 0 auto 0',
    paddingTop: '12px',
    display: 'block',
  },
  quickmodal: {
    cursor: 'pointer',
    width: '100%',
    transition: 'opacity 0.3s ease 0s',
    textAlign: 'center',
    color: 'rgb(255, 255, 255)',
    lineHeight: '1',
    fontWeight: '700',
    paddingTop: '8px',
    paddingBottom: '8px',
    fontSize: '12px',
    borderRadius: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    opacity: 1,
    zIndex: 1,
    marginTop: 'auto',
    display: 'none',
    bottom: '0',
  },
}))
export default function Product({ name, url, point, description, productimage, id }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(false)
  const [form,setForm]=React.useState(false)
  const details = { name, point, description, productimage, id }
  const closeModal = () => {
    setValue(state =>!state)
  }
  
  const closeForm = ()=>{
    setForm(state=> !state)
  }
  return (
    <Main className={classes.card}>
      <div className={classes.container}>
        <div className={classes.Image}>
          <div style={{ maxWidth: '100%', display: 'block' }}>
            <div style={{ position: 'relative', display: 'block' }}>
              <img className={classes.productImage} src={url} alt="product image" />
              <div style={{ position: 'absolute', bottom: '0', width: '100%' }}>
                <Button className={classes.quickmodal} onClick={()=>setValue(true)}>
                  QuickLook
                </Button>
                 <QuicklookModal details={details} open={value} closeModal={closeModal} style={{ padding: '0', width: '100%'}}/>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.part}>
          <div className="label">
            <span className={classes.productName}>{name}</span>
            <span className={classes.productDescription}>{description}</span>
          </div>
          <p className={classes.productpoint}>{point}</p>
          <div className={classes.button}>
            <Button
              style={{
                border: '2px solid black',
                color: 'black',
                borderRadius: '99999px',
                display: 'iniline-flex',
                justifyContent: 'center',
                minHeight: '32px',
                alignItems: 'center',
                lineHeight: 1,
                backgroundColor: 'transparent',
                textAlign: 'center',
                minWidth: '5.5em',
                fontSize: '12px',
                padding: '0.25em 0.875em',
                textTransform: 'none',
              }}
              variant="outlined"
             onClick={()=>setForm(true)}
            >
              Sign in to Access
            </Button >
            <Form value={form} closeForm={closeForm}/>
          </div>
        </div>
      </div>
    </Main>
  )
}
