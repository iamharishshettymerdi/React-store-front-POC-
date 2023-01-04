
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
  })
const Dialog = () => {
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
      }
    
      const handleClose = () => {
        setOpen(false)
      }
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Promo Error</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Merchandise, excluding gift cards, must be included in your order to qualify for this
          offer..
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
export default Dialog
