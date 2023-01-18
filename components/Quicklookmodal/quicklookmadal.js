import * as React from 'react'
import { Box, Button, Typography, Modal, Container, Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { productData } from './data'
import CloseIcon from '@material-ui/icons/Close'
const useStyles = makeStyles(theme => ({
  cardButton: {
    cursor: 'pointer',
    left: '0px',
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
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    opacity: 1,
  },
}))
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  padding: '16px 16px 32px',
  position: 'relative',
  backgroundColor: 'rgb(255, 255, 255)',
  display: 'block',
  borderRadius: '6px',
}

export default function QuicklookModal({ value, handleClose, productData }) {
  const classes = useStyles()
  const theme = useTheme()
  const { imageurl, name, description, itemid, fullDescription, size } = productData

  return (
    <div>
      <Modal
        open={value}
        onClose={() => handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition={true}
      >
        <Box sx={style}>
          <div>
            <Container maxWidth="lg" style={{ paddingTop: theme.spacing(2) }}>
              <div key={itemid}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={5}>
                    <img src={imageurl} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={7}>
                    <Grid container spacing={4} direction="column" justifyContent="center">
                      <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}>
                        <span> {name} </span>
                      </Typography>
                      <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}>
                        {description}
                      </Typography>
                      <Typography style={{ fontSize: '11px', marginTop: '2px' }}>
                        {itemid}
                      </Typography>
                      <Typography style={{ fontSize: '11px', marginTop: '2px' }}>
                        {fullDescription}
                      </Typography>
                      <Typography>{size}</Typography>

                      <Grid item xs={12}>
                        <Button
                          key="button"
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="small"
                          data-th="add-to-cart"
                        >
                          ADD TO BASKET
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <Button
                style={{
                  position: 'absolute',
                  top: '0rem',
                  right: '1rem',
                  zIndex: '3',
                  lineheight: 0,
                  height: 'fit-content',
                  border: 0,
                  borderRadius: '50px',
                  width: 'fit-content',
                  padding: '12px',
                  minWidth: 0,
                }}
                onClick={() => {
                  handleClose(false)
                }}
              >
                <CloseIcon style={{ color: 'black' }} />
              </Button>
            </Container>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
