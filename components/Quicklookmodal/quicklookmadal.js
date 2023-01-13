import * as React from 'react';
import {Box,Button,Typography,Modal,Container, Grid} from '@material-ui/core';
import { makeStyles,useTheme } from '@material-ui/core/styles'
import { productData } from "./data";

const useStyles = makeStyles(theme => ({
  cardButton: {
    cursor: "pointer",
    left: "0px",
    width: "100%",
    transition: "opacity 0.3s ease 0s",
    textAlign: "center",
    color: "rgb(255, 255, 255)",
    lineHeight: "1",
    fontWeight: "700",
    paddingTop: "8px",
    paddingBottom: "8px",
    fontSize: "12px",
    borderRadius: "4px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    opacity: 1,
  }
}))
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  padding: "16px 16px 32px",
  position: "relative",
  backgroundColor: "rgb(255, 255, 255)",
  display: "block",
  borderRadius: "6px",
};

export default function QuicklookModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen(true);};
  const handleClose = () => setOpen(false);
  const classes = useStyles()
  const theme = useTheme()
  const productImage = props.productImage

  return (
    <div>
      <Button onClick={handleOpen} className={classes.cardButton}>QuickLook</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition	= {true}
      >
        <Box sx={style}>
          <div>
          <Container maxWidth="lg" style={{ paddingTop: theme.spacing(2) }}>
          {productData.map((item) => (
            <div>
            {productImage == item.imageurl ? (
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={5}>
                  <img src={ item.imageurl}/>
                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                  <Grid container spacing={4}  direction="column"  justifyContent="center">
                    <Typography  style={{fontSize:'12px',fontWeight:'bold'}}>
                      <span>  { item.name} </span>
                    </Typography>
                    <Typography  style={{fontSize:'12px',fontWeight:'bold'}}>
                      {item.description}
                    </Typography>
                    <Typography style={{fontSize:'11px',marginTop:'2px'}}>
                        {item.itemid}
                    </Typography>
                    <Typography style={{fontSize:'11px',marginTop:'2px'}}>
                    {item.fullDescription}
                    </Typography>
                    <Typography>
                      {item.size}
                    </Typography>

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
              </Grid>) : ('')}
              </div>
              ))}
      </Container>
          </div>
        </Box>
      </Modal>
    </div>
  );
}