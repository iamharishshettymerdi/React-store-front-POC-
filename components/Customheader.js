import React, { useState, useCallback, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from 'react-storefront/AppBar'
import CartButton from 'react-storefront/CartButton'
import Search from './search/Search'
import Logo from '../components/assets/sephora.svg'
import { Container } from '@material-ui/core'
// import Menu from 'react-storefront/menu/Menu'
import MenuButton from 'react-storefront/menu/MenuButton'
import Link from 'react-storefront/link/Link'
import SessionContext from 'react-storefront/session/SessionContext'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
// import Box from 'react-storefront/Box';
import headerdata from '.././local-json/headerdata.json'
import { Button, Popover, Typography } from "@material-ui/core";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
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

          {headerdata.map(m=>(
            <Box className={classes.Headeroptioncontaier} >
                <StorefrontOutlinedIcon className={classes.icon}/>{m.header}
              </Box>
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
 <button aria-describedby={id} type="button" onMouseEnter={handleClick}>
        Toggle Popper
      </button>

      <Popper  id={id} open={open} anchorEl={anchorEl}
  placement="bottom"
  disablePortal={false}
  modifiers={[
    {
      name: 'flip',
      enabled: true,
      options: {
        altBoundary: true,
        rootBoundary: 'document',
        padding: 8,
      },
    },
    {
      name: 'preventOverflow',
      enabled: true,
      options: {
        altAxis: true,
        altBoundary: true,
        tether: true,
        rootBoundary: 'document',
        padding: 8,
      },
    },
    {
      name: 'arrow',
      enabled: true
    },
  ]}
>
<Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
        </Box> </Popper>

        </Container>
        </AppBar>
    </>
  )
}
