import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import Box from 'react-storefront/Box'
import Link from 'react-storefront/link/Link'
import { Typography, Modal, Button } from '@mui/material'
const useStyles = makeStyles(theme => ({
  box: {
    display: 'block',
    flexShrink: '0',
    alignItems: 'normal',
    width: '190px',
  },
  wrap: {
    position: 'relative',
    zIndex: 0,
    overflow: 'hidden',
    margin: '-16px',
    display: 'block',
    width: '190px',
  },
  link: {
    position: 'relative',
    width: '240px',
    flexDirection: 'column',
    fontSize: '14px',
    lineHeight: 1.25,
    backgroundColor: '#fff',
    borderRadius: '4px',
    textAlign: 'left',
    boxShadow: '0 0 6px 0 rgb(0 0 0 / 20%)',
    overflow: 'hidden',
    display: 'flex',
  },
  pic: {
    display: 'block',
    position: 'relative',
    maxWidth: '100%',
    width: '100%',
    paddingBottom: '75%',
  },
  image: {
    display: 'inline-block',
    maxWidth: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  part: {
    padding: '12px 16px 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    color: '#666',
    fontSize: '12px',
    minHeight: '205px',
  },
  headline: {
    color: 'black',
    fontWeight: '700',
    textDecoration: 'none',
    margin: '0',
    wordWrap: 'break-word',
  },
  subheadline: {
    margin: '0 0 5px 0',
    color: 'black',
    overflowWrap: 'break-word',
  },
  offer: {
    margin: 0,
  },
  store: {
    margin: '5px 0 0 0',
  },
  policy: {
    margin: 0,
  },
  endpart: {
    paddingTop: '8px',
    marginTop: 'auto ',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '48px',
    display: 'flex',
  },
  smallcard: {
    position: 'absolute',
    top: '6px',
    left: '6px',
    zIndex: 1,
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    borderRadius: '4px',
    verticalAlign: 'middle',
    textTransform: 'uppercase',
    fontSize: '10px',
    lineHeight: '1.3',
    display: 'inline-block',
    backgroundColor: 'rgb(0, 0, 0)',
    color: 'rgb(255, 255, 255)',
    paddingLeft: '0.6em',
    paddingRight: '0.6em',
    width: 'fit-content',
  },
  modalheading: {
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    width: '100%',
    lineHeight: '1.25',
    fontSize: '16px',
  },
  headPart: {
    borderBottom: '1px solid rgb(238, 238, 238)',
    minHeight: '54px',
    textAlign: 'center',
    padding: '10px 37px',
    display: 'block',
  },
  bodyPart: {
    overflowY: 'auto',
    lineHeight: '1.25',
    position: 'relative',
    padding: '16px 16px 32px',
    display: 'block',
    fontSize: '14px',
  },
}))
const buttonDesign = {
  backgroundColor: 'white',
  border: '2px solid black',
  color: 'black',
  borderRadius: '9999px',
  textTransform: 'none',
  padding: '0.25em 0.875em 0.25em 0.875em',
  minHeight: '32px',
  minWidth: '112px',
  fontSize: '12px',
  fontWeight: '700',
  '&hover': {
    color: '#666',
    borderColor: '#666',
  },
  closeButton: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    zIndex: '3',
    lineheight: 0,
    height: '54px',
  },
  modal:{

  },
}
const Cards = ({ item }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = React.useCallback(() => setOpen(true), [])
  const handleClose = React.useCallback(() => setOpen(false), [])
  const classes = useStyles()
  const {
    card,
    image,
    title,
    description,
    available,
    store,
    details,
    policy,
    buttonText,
    url1,
    url2,
    date,
  } = item
  const d1 = new Date()
  const d2 = new Date(date)
  const diff = d2.getTime() - d1.getTime()
  const left = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return (
    <>
      <Box ClassName={classes.box}>
        <Box ClassName={classes.wrap}>
          {card === 'offer' ? (
            <Link href={url1}>
              <a className={classes.link} style={{ textDecoration: 'none' }}>
                {Boolean(left >= 1) && <span className={classes.smallcard}>{left} Days Left</span>}
                <picture className={classes.pic}>
                  <img className={classes.image} src={image}></img>
                </picture>
                <div className={classes.part}>
                  <div>
                    <h3 className={classes.headline}>{title}</h3>
                    <p className={classes.subheadline}>{description}</p>
                    <p className={classes.offer}>{available}</p>
                    <p className={classes.store}>{store}</p>
                    <p className={classes.policy}>{policy}</p>
                  </div>
                  <div className={classes.endpart}>
                    <Button style={{ ...buttonDesign }}>{buttonText}</Button>
                    <a href={url2} style={{ textDecoration: 'none' }}>
                      See Details
                    </a>
                  </div>
                </div>
              </a>
            </Link>
          ) : (
            <div className={classes.link} style={{ textDecoration: 'none' }}>
              <picture className={classes.pic}>
                <img className={classes.image} src={image}></img>
              </picture>
              <div className={classes.part}>
                <div>
                  <h3 className={classes.headline}>{title}</h3>
                  <p className={classes.subheadline}>{description}</p>
                  <p className={classes.offer}>{available}</p>
                  <p className={classes.store}>{store}</p>
                  <p className={classes.policy}>{policy}</p>
                </div>
                <div className={classes.endpart}>
                  <Button
                    style={{
                      ...buttonDesign,
                    }}
                    onClick={handleOpen}
                  >
                    Apply now
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '414px',
                        padding: '20px 16px',
                        backgroundColor: 'rgb(255, 255, 255)',
                        display: 'block',
                        borderRadius: '6px',
                        height: 'auto',
                      }}
                      className={classes.modal}
                    >
                      <Typography variant="h6" component="h2" className={classes.headPart}>
                        Promo Error
                      </Typography>
                      <Typography sx={{ mt: 2 }} className={classes.bodyPart}>
                        Must be logged into Beauty Insider account to redeem this offer. Must
                        purchase skincare products to qualify.
                      </Typography>
                      <Typography className={classes.modalButton}>
                      <Button
                        style={{
                          fontSize: '14px',
                          padding: '0.25em 1.125em',
                          minHeight: '44px',
                          borderWidth: '2px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          lineHeight: 1,
                          borderColor: 'transparent',
                          textAlign: 'center',
                          textDecoration: 'none',
                          borderRadius: '99999px',
                          appearance: 'none',
                          color: 'rgb(255, 255, 255)',
                          backgroundColor: 'rgb(0, 0, 0)',
                          transition: 'background-color 0.2s ease 0s',
                          display: 'flex',
                          width: '100%',
                          minWidth: '5.5em',
                        }}
                        onClick={handleClose}
                      >
                        ok
                      </Button>
                      </Typography>
                      <Button
                        style={{
                          position: 'absolute',
                          top: '0px',
                          right: '0px',
                          zIndex: '3',
                          lineheight: 0,
                          height: '95px',
                        }} onClick={handleClose}>
                        <CloseIcon style={{color:"black"}} />
                      </Button>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Box>
    </>
  )
}
export default Cards
