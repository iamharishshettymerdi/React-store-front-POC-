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
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Paper from '@mui/material/Paper';

console.log("json data ",headerdata);
const useStyles = makeStyles(theme => ({
  title: {},
  flexcontainer:{
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      width: '98%',
      margin: 'auto',
      padding:'0px'
  },
  Headeroptioncontaier:{
    "&:hover": {
      cursor:'pointer',
      textDecoration:'underline'
    },
  //   "&:hover $icon": {
  //     color: 'red',
  //     textDecoration: 'underline'
  // }
},
  icon:{
    width: '2em',
    cursor:'pointer'
  },
  textbox:{
    paddingLeft: '30px'
  },
  iconcontainer:{
    // background:'red',
    width: 'fit-content',
    display: 'flex',
    padding: '10px'
    // "&:hover $spanbelowtextclass":{
    //   boxShadow: 'rgb(0 0 0) 0px 2px 0px 0px'
    // }
  },
  spanbelowtextclass:{
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    maxWidth: '28ch',
    display: 'block',
    fontSize: '11px',
    paddingBottom: '4px',
    marginBottom: '-4px',
    color: 'rgb(102, 102, 102)',
    width: 'fit-content'
  },
  classdef:{
    display: 'flex',
    padding: '10px',
    flex: '55%'
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
    document.getElementById('spanbelowid').setAttribute('boxShadow','rgb(0 0 0) 0px 2px 0px 0px');
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    document.getElementById('spanbelowid').setAttribute('boxShadow','rgb(0 0 0) 0px 2px 0px 0px');
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <div className={classes.flexcontainer}>
          <div class="flex-item-left" style={{display: 'inline-flex'}}>
            <div id="image">
              <Link href="/">
                <a>
                  <Logo style={{ width: 120, height: 48 ,position:'relative'}} />
                </a>
              </Link>
            </div>
            <div id="textbox" className={classes.textbox}>
                <Search className="search1"/>
            </div>
          </div>
        <div  className={classes.classdef}>

        {headerdata.map((m)=>(
             <div aria-owns={open ? 'mouse-over-popover' : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen} className={classes.iconcontainer}>
              <div>
                <StorefrontOutlinedIcon className={classes.icon} />
              </div>
              <div style={{textAlign: 'left'}}>
                {m.header}<span onMouseEnter={handlePopoverOpen} className={classes.spanbelowtextclass} id="spanbelowid">{m.headerbelowText}</span>
              </div>
             </div>
        ))}
            <div className="cards" style={{margin: '10px'}}>
              <ModeCommentOutlinedIcon className={classes.icon}/>
              <FavoriteBorderOutlinedIcon className={classes.icon}/>
              <LocalMallOutlinedIcon className={classes.icon}/>
            </div>
        </div>
      </div>


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
        <Typography style={{width:'300px'}} sx={{ p: 1 }}>
        <Box style={{ justifyContent: 'center',
                      paddingBottom: '8px',
                      display: 'flex'}}><button style={{fontSize: '12px',
                        padding: '0.25em 0.875em',
                        minHeight: '32px',
                        borderWidth: '2px',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        lineHeight: '1',
                        borderColor: 'transparent',
                        textAlign: 'center',
                        textDecoration: 'none',
                        borderRadius: '99999px',
                        appearance: 'none',
                        color:' rgb(255, 255, 255)',
                        backgroundColor: 'rgb(0, 0, 0)',
                        transition: 'background-color 0.2s ease 0s',
                        minWidth: '5.5em'}}>Choose Your Store</button></Box>
        </Typography>
      </Popover>
    </>
  )
}
