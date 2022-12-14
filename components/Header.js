import React, { useState, useCallback, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from 'react-storefront/AppBar'
import CartButton from 'react-storefront/CartButton'
import Search from './search/Search'
import Logo from '../components/assets/sephora.svg'
import { Container } from '@material-ui/core'
import Menu from 'react-storefront/menu/Menu'
import MenuButton from 'react-storefront/menu/MenuButton'
import Link from 'react-storefront/link/Link'
import SessionContext from 'react-storefront/session/SessionContext'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Box from 'react-storefront/Box';
import headerdata from '.././local-json/headerdata.json'
import { Button, Popover, Typography } from "@material-ui/core";

console.log("json data ",headerdata);
const useStyles = makeStyles(theme => ({
  title: {},
  con:{
    position: 'relative',
    marginTop:'50px'
  },
  logo: {
    position: 'absolute',
    left: 10,
    top: 0,
    [theme.breakpoints.down('xs')]: {
      left: '50%',
      top: 6,
      marginLeft: -60,
    },
  },
  toolbar: {
    padding: 0,
    margin: 0,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    color:'black',
    [theme.breakpoints.down('xs')]: {
      padding: 5,
    },
  },
 
  Headeroptioncontaier:{
    "&:hover": {
      cursor:'pointer',
      textDecoration:'underline'
    },
    "&:hover $icon": {
      color: 'red',
      textDecoration: 'underline'
  },
  },
 
icon:{
  width: '2em',
  cursor:'pointer'
},
popoverclass:{
  top: '114px'
}
  
}))

export default function Header({ menu }) {
  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClose = useCallback(() => setMenuOpen(false), [])
  const handleMenuButtonClick = useCallback(() => setMenuOpen(menuOpen => !menuOpen), [])
  const { session } = useContext(SessionContext)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <AppBar style={{marginTop:'50px'}}>
        <Container maxWidth="lg" className={classes.container}>
          <Link href="/">
            <a>
              <Logo style={{ width: 120, height: 48 ,position:'relative'}} className={classes.logo} />
            </a>
          </Link>

          <Search className="search1"/>
          {/* <CartButton quantity={get(session, 'itemsInCart')} /> */}
          {headerdata.map(m=>(

        <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        >
            <Box className={classes.Headeroptioncontaier} >
                <StorefrontOutlinedIcon className={classes.icon}/>{m.header}
              </Box>
        </Typography>

              
          ))}
          <ModeCommentOutlinedIcon className={classes.icon}/>
          <FavoriteBorderOutlinedIcon className={classes.icon}/>
          <LocalMallOutlinedIcon className={classes.icon}/>

          {/* <Box >
            <Box className={classes.Headeroptioncontaier} >
              <StorefrontOutlinedIcon className={classes.icon}/>Stores & services 
            </Box>
            

            <Box className={classes.Headeroptioncontaier}>
              <PeopleOutlinedIcon className={classes.icon}/>Community
            </Box>

            <Box className={classes.Headeroptioncontaier}>
              <FaceOutlinedIcon className={classes.icon}/>Sign up 
            </Box>

            <ModeCommentOutlinedIcon className={classes.icon}/>
            <FavoriteBorderOutlinedIcon className={classes.icon}/>
            <LocalMallOutlinedIcon className={classes.icon}/>

          </Box>
   */}
         

          

         

         

        


          <MenuButton open={menuOpen} onClick={handleMenuButtonClick} />
        </Container>
      </AppBar>
      <Menu
        anchor="right"
        root={menu}
        open={menuOpen}
        onClose={handleMenuClose}
        // renderItem={item => <div>{item.text} (custom)</div>}
        // renderItemContent={item => <div>{item.text} (custom content)</div>}
        // renderBack={item => <div>{item.text} back</div>}
        // renderHeader={item => <div>{item.text} header</div>}
        // renderFooter={item => <div>{item.text} footer</div>}
      />
      <Popover style={{top: '20px'}}
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
       
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.I use Popover.</Typography>
      </Popover>
    </>
  )
}
