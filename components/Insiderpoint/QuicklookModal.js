import * as React from 'react'
import { Box, Button, Typography, Modal, Container, Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import useMediaQuery from '@mui/material/useMediaQuery'

const useStyles = makeStyles(theme => ({
  cardButton: {
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
    display: 'block',
    bottom: '0',
    '&hover': {
      color: 'black',
    },
  },
  bodySection: {
    display: 'flex',
    flexFlow: 'row wrap',
    marginLeft: '-12px',
    marginRight: '-12px',
    width: '100%',
  },
  titlesection: {
    cursor: 'pointer',
    display: 'block',
    fontSize: '16px',
    lineHeight: '1.25',
    marginBottom: '4px',
    color: 'black',
    textDecoration: 'none',
    width: '100%',
  },
  style: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '16px 40px 32px',
    backgroundColor: 'rgb(255, 255, 255)',
    display: 'block',
    borderRadius: '6px',
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

export default function QuicklookModal(props) {
  const [open, setOpen] = React.useState(true)
  const handleClose = React.useCallback(() => setOpen(false), [])
  const classes = useStyles()
  const theme = useTheme()
  const { productimage, name, description, point, id } = props.details
  return (
    <div style={{ width: '100%' }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition={true}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '60%', md: '50%', lg: '50%' },
          }}
          className={classes.style}
        >
          <div>
            <Container
              maxWidth="lg"
              style={{
                paddingTop: theme.spacing(2),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Grid cotainer spacing={24}>
                <Grid item sx={24} sm={12} md={12} lg={12}>
                  <Box sx={{ width: '100%' }}>
                    <Typography
                      style={{
                        padding: '16px 0 16px 0',
                        borderBottom: '1px soild grey',
                        fontWeight: '700',
                      }}
                    >
                      {' '}
                      Quick Look
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={12} className={classes.bodySection}>
                <Grid item xs={6} sm={6} md={6} lg={6} style={{ width: '50%' }}>
                  <img src={productimage} style={{ width: '100%' }} />
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Grid
                    container
                    spacing={4}
                    direction="column"
                    justifyContent="center"
                    margin="0"
                    style={{ margin: '0' }}
                  >
                    <div>
                      <a href="" className={classes.titlesection}>
                        <Typography
                          style={{ fontWeight: '700', display: 'block', fontSize: '16px' }}
                          variant={'h2'}
                        >
                          <span> {name} </span>
                        </Typography>
                        <Typography>{description}</Typography>
                      </a>
                      <Typography style={{ fontSize: '12px' }}>ITEM {id}</Typography>
                      <Typography
                        style={{
                          fontSize: '16px',
                          lineHeight: '1.25',
                          marginTop: '16px',
                          display: 'block',
                          fontWeight: '700',
                        }}
                      >
                        {point}
                      </Typography>
                    </div>
                    <div style={{ marginTop: '30%', paddingTop: '20%' }}>
                      <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
                        <Button
                          style={{
                            fontSize: '14px',
                            border: '2px solid black',
                            padding: '0.25em 1.125em',
                            minHeight: '44px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            lineHeight: 1,
                            backgroundColor: 'transparent',
                            textAlign: 'center',
                            textDecoration: 'none',
                            borderRadius: '99999px',
                            appearance: 'none',
                            color: 'rgb(0, 0, 0)',
                            transition: 'color 0.2s ease 0s, border-color 0.2s ease 0s',
                            display: 'flex',
                            width: '50%',
                            minWidth: '5.5em',
                          }}
                        >
                          <a style={{ textDecoration: 'none', color: 'black' }}>View Details</a>
                        </Button>
                        <Button
                          disabled={true}
                          style={{
                            border: '2px solid',
                            textTransform: 'none',
                            width: '50%',
                            borderRadius: '9999px',
                            color: 'rgb(102, 102, 102)',
                            borderColor: 'rgb(238, 238, 238)',
                            backgroundColor: 'rgb(238, 238, 238)',
                          }}
                        >
                          <span
                            style={{
                              whiteSpace: 'pre-wrap',
                              overflowWrap: 'break-word',
                              fontSize: '12px',
                              fontWeight: '700',
                            }}
                          >
                            Add to Basket
                            <span
                              style={{
                                whiteSpace: 'pre-wrap',
                                overflowWrap: 'break-word',
                                display: 'block',
                                fontWeight: '400',
                                marginTop: '0.125em',
                              }}
                            >
                              for standard shipping
                            </span>
                          </span>
                        </Button>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
                <Button
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    zIndex: '3',
                    lineheight: 0,
                    height: '95px',
                    border:0,
                  }}
                >
                  <CloseIcon style={{ color: 'black' }} onClick={handleClose} />
                </Button>
              </Grid>
            </Container>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
