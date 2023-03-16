import React, { useState, useCallback, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from 'react-storefront/AppBar'
import CartButton from 'react-storefront/CartButton'
import Search from './search/Search'
import Logo from '../components/assets/sephora.svg'
import { Container } from '@material-ui/core'
import Link from 'react-storefront/link/Link'
import SessionContext from 'react-storefront/session/SessionContext'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Box from 'react-storefront/Box';
import headerdata from '.././local-json/headerdata.json'
import { Typography } from "@material-ui/core";
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
  dropdown:{
    // background:'red',
    width: 'fit-content',
    // display: 'flex',
    padding: '10px',
    position: 'relative',
    display: 'inline-block',
    
    "&:hover $spanbelowtextclass":{
      boxShadow: 'rgb(0 0 0) 0px 2px 0px 0px'
    }
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
    flex: '55%',
    gap: '10px'
  },
  headertext:{
    margin:'2px',
    fontSize: '12px'
  }
  
  }))

export default function Header({ menu }) {
  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(false)

  const { session } = useContext(SessionContext)
  const [subdata,setsubdata]=useState([]);
  const [headermenuoptiontitle,setheadermenuoptiontitle]=useState('');

  const hoverfunction=(index)=>{
    console.log("Hello hovered ",index);
    setsubdata(headerdata[index].headerMenuOption);
    setheadermenuoptiontitle(headerdata[index].headermenuoptiontitle)
    console.log("subdata ",subdata)

  }

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

        {headerdata.map((m,index)=>(
             <div className="dropdown" onMouseEnter={()=>hoverfunction(index)} key={index}>
             <div class="dropbtn" style={{display:'flex',cursor:'pointer'}}>
              <div>
                  <StorefrontOutlinedIcon className={classes.icon} />
                </div>
                <div style={{textAlign: 'left'}}>
                  {m.header}<span  className={classes.spanbelowtextclass} id="spanbelowid">{m.headerbelowText}</span>
                </div>
             </div>
             <div class="dropdown-content">
               <div class="popcontent" href="#">
               <Typography sx={{ p: 1 }}>
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

            <div style={{textAlign:'left'}}>
                <LocationOnOutlinedIcon/>Find a Sephora
                <div >
          <b style={{padding: '15px'}}>{headermenuoptiontitle}</b>
          {subdata?.map((n,index)=>(
             <div style={{display: 'flex'}} key={index}>
             <MenuItem style={{padding:'15px'}}>
             <ListItemText>
              <div style={{display: 'flex',gap:'10px'}}>
                <div>
                  <img src={n.icon} width={55} height={60}/>
                </div>
                <div>
                    <p className={classes.headertext}>{n.headersuboption}</p>
                    <p className={classes.headertext}>{n.headersubtext}</p>
                </div>
                </div>
              
                </ListItemText>
           </MenuItem>
           {headerdata[0].headerMenuOption.length-1!=index?<Divider />:''}
           </div>
          ))}
      </div>
            </div>
        </Typography>
                
               </div>
            </div>
          </div>
        ))}
            <div className="cards" style={{margin: '20px'}}>
              <ModeCommentOutlinedIcon className={classes.icon}/>
              <FavoriteBorderOutlinedIcon className={classes.icon}/>
              <LocalMallOutlinedIcon className={classes.icon}/>
            </div>
        </div>
      </div>
    </>
  )
}
