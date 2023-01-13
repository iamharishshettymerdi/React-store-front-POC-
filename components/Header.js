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
      padding: '10px'
  },
  Headeroptioncontaier:{
    "&:hover": {
      cursor:'pointer',
      textDecoration:'underline'
    },
    "&:hover $icon": {
      color: 'red',
      textDecoration: 'underline'
  }},
  icon:{
    width: '2em',
    cursor:'pointer'
  },
  textbox:{
    paddingLeft: '30px'
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
        <div className="flex-item-right">
            <div class="cards">
            {headerdata.map((m)=>(
            <div className="card cardcontainer"  aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}>
              <Box className={classes.Headeroptioncontaier}  >
                  <StorefrontOutlinedIcon className={classes.icon} />{m.header}<br/>
                </Box>
            </div>            
            ))}
            <div className="cards" style={{margin: '15px'}}>
              <ModeCommentOutlinedIcon className={classes.icon}/>
              <FavoriteBorderOutlinedIcon className={classes.icon}/>
              <LocalMallOutlinedIcon className={classes.icon}/>
            </div>
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

<Paper sx={{ width: 320 }}>
      <Box style={{backgroundColor:'#f6f6f8',padding:'3px'}}><span style={{background: 'white',
        width: '94%',
        height: '40px'}}>
      <LocationOnOutlinedIcon/>Find a Sephora</span></Box>
      <MenuList dense>
      {headerdata.map((m,index)=>(
      <div>
          <b style={{padding: '15px'}}>{m.headermenuoptiontitle}</b>
          {headerdata[index].headerMenuOption?.map((n,index)=>(
             <div>
             <MenuItem style={{padding:'15px'}}>
             <ListItemText><span style={{display: 'flex'}}><img src={n.icon} width={55} height={60}/><p style={{margin: '10px'}}>{n.headersuboption}</p><p>
               </p><p className={classes.spanclass} style={{ marginLeft: '-63px',marginTop: '35px'}}>{n.headersubtext}</p></span></ListItemText>
           </MenuItem>
           {headerdata[0].headerMenuOption.length-1!=index?<Divider />:''}
           </div>
          ))}
      </div>
      ))}
      </MenuList>
    </Paper>
        </Typography>
      </Popover>
    </>
  )
}
