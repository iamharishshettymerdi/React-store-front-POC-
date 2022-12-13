import { AppBar, Toolbar, Box } from "@material-ui/core";
import Link from 'react-storefront/link/Link'
import Logo from '../components/assets/sephora.svg'
import { makeStyles } from "@material-ui/styles";
import Stack from '@mui/material/Stack';
import React from "react";
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@material-ui/core/IconButton'
import StoreIcon from '@material-ui/icons/Store'
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
</svg>

import { padding } from "@mui/system";

export default function Header(pageProps) {

  console.log('pageProps ',pageProps);
  const styles=theme=>({
    toolbar:{
        color:'black',
        backgroundColor:'white',
        padding: '25px'
    },
    appbar:{
        position:'relative'
    },
    logo: {
  
      },

      iconContainer: {
        "&:hover $icon": {
            color: 'red',
            textDecoration: 'underline'
        },
        padding:'0px'
    },
    icon: {
        color: 'black',
    },
    belowtext:{
      whiteSpace: 'pre-wrap',
      overflowWrap: 'break-word',
      maxWidth: '28ch',
      display: 'block',
      fontSize: '11px',
      paddingBottom: '4px',
      marginBottom: '-4px',
      color: 'rgb(102, 102, 102)'
    },
    community:{
      "&:hover $community": {
        textDecoration: 'underline'
    },
    width: '130px',
    
    },
  })
  const useStyles = makeStyles(styles)

  const classes = useStyles()
  console.log('use styles ',classes);

  const displayDesktop = () => {
    return <Toolbar  className={classes.toolbar}>
                 <Grid container spacing={1}>
                    <Grid item xs={6}>
                    <Box >
                            <Link href="/">
                                <a>
                                <Logo style={{ width: 120, height: 20 }} className={classes.logo} />
                                </a>
                            </Link>
                    </Box>
                    </Grid>
                    <Grid item xs={6}>
                    <Stack
                      direction="row"
                      divider={<Divider orientation="vertical" flexItem />}
                      spacing={2}>
                      <Box>
                      <Grid container spacing={1}>
                        <Grid item xs={7}>
                          <IconButton
                            classes={{
                                root: classes.iconContainer
                            }}>
                            <StoreIcon className={classes.icon}/>
                          </IconButton>
                          Stores & Services
                          <span className={classes.belowtext}>Choose your store</span>
                        </Grid>
                        <Grid item xs={5} className={classes.community}>
                        <span ><IconButton
                              classes={{
                                  root: classes.iconContainer
                              }}>
                              <PeopleOutlinedIcon className={classes.icon}/>
                            </IconButton>
                            Community</span>
                        </Grid>
                      </Grid>
                    </Box>
                      <Box>
                        Sign-In 
                        {/* <span className={classes.belowtext}>Choose your store</span> */}
                        <IconButton style={{ width: '70px'}}
                              classes={{
                                  root: classes.iconContainer
                              }}>
                              <ChatBubbleOutlineOutlinedIcon className={classes.icon}/>
                            </IconButton>

                            <IconButton style={{ width: '70px'}}
                              classes={{
                                  root: classes.iconContainer
                              }}>
                              <FavoriteBorderRoundedIcon className={classes.icon}/>
                            </IconButton>
                            <IconButton style={{ width: '70px'}}
                              classes={{
                                  root: classes.iconContainer
                              }}>
                              <ShoppingBasketOutlinedIcon className={classes.icon}/>
                            </IconButton>
                        </Box>
                    </Stack>
                    </Grid>
                </Grid>
            </Toolbar>;
  };
  
  return (
    <header>
      <AppBar className={classes.appbar}>{displayDesktop()}</AppBar>
    </header>
  );
}