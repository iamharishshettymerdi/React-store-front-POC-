import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container,Paper,Grid,Typography,Popover } from '@material-ui/core'
import Link from 'react-storefront/link/Link'
import { listData,icons } from '../../local-json/Footerdata'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Image from 'react-storefront/Image'
const useStyles = makeStyles(theme => ({
  container: {
     padding: '0px !important', 
    bottom: '0px',
    backgroundColor:'black',
    color:'white',
    // margin:"5px 0 0 20px",
    [theme.breakpoints.down('md')]: {
      margin:"55px 0 0 0",
    },
    width:' 89%',
    margin: 'auto'

  },
  headerLine:{
    borderBottom: '1px solid',
    marginTop: '12px',
    marginBottom: '12px'
  },
  paper: {
    boxShadow : 'none !important',
    backgroundColor:'black',
    color:'white'
  },
  link : {
    textDecoration:'none !important',
    fontSize:"12px",
    [theme.breakpoints.up('md')]: {
      fontSize:"11px",
    },
    color:'white',
  },
  typo:{
    fontSize:"12px",
    [theme.breakpoints.up('md')]: {
      fontSize:"11px",
    }
  },
  span:{
    [theme.breakpoints.up('md')]: {
      float:"right",
      marginTop: "-19px",
      marginRight: "-14px",
  },
  image:{
    justifyContent: 'flex-start !important',
  }
},
}))


function FooterLine() {
  const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const classes = useStyles()
  return (  
    <>
    {
      matches ? <Container style={{width:"100%",paddingLeft:'0px'}}> 
      <hr className={classes.headerLine}>
      </hr>
          <Grid container direction='row' style={{padding: '0px !important'}}>
                <Grid item   xs={12}  sm ={12}>
                  <Typography className={classes.typo}>Download the Sephora App.</Typography>
                  <Grid container   direction="row"  alignItems="baseline"> 
                  {icons.map(({ image_url }) => (
                    <Grid item   xs={12}  sm ={2} style={{justifyContent:'flex-start'}}>
                      <Image width={120} height={40} src={image_url}  className={classes.image} alt="playstorebadge"/>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
          </Grid>
          <hr className={classes.headerLine}>
      </hr>
    </Container>
    
       : ""
    }
    </>
    );
}

export default function Header({ menu }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Container  maxWidth="xl" className = {classes.container}>
      <Grid container style ={{margin:'12px'}} >
        <Grid  item xs={12} sm={12} md={6} lg={6} >
          <Paper className={classes.paper}>
            <Typography className={classes.typo}>© 2022 Sephora USA, Inc. All rights reserved.</Typography>
            <Grid container   direction="row"  alignItems="baseline" style={{margin:'4px 0px 4px 0px'}} > 
            {listData.map(({name, url, iconComponent }) => (
              <Grid item  xs={2} sm={2} lg={2} md={2}>
                  <Link href={url} prefetch="visible" className={classes.link}>
                    <a>
                      <Typography  className={classes.typo}>{name}   
                        <span className={classes.span} onClick={handleClick} onMouseEnter={handlePopoverOpen}onMouseLeave={handlePopoverClose}>{iconComponent}
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
                              PaperProps={{
                                style: { width: '100%' ,height: '100%'},
                              }}
                              onClose={handlePopoverClose}
                              disableRestoreFocus
                            >
                            <Typography sx={{ p: 1 }} style={{textAlign:"centre"}}> YOUR PRIVACY CHOICES</Typography>
                          </Popover>
                        </span>
                      </Typography>
                    </a>
                  </Link>
              </Grid>
          ))}
            </Grid>
            <Typography className={classes.typo}>1-877-737-4672  TTY:1-888-866-9845.</Typography>
          </Paper>
        </Grid>
        <FooterLine  />
        <Grid item xs={12} sm={12} md={3} lg={3} ></Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} >
          <Grid container   direction="row">
              {icons.map(({ url, iconComponent }) => (
                <Grid item   xs={1}  sm ={1} lg={2} md={2} style={{paddingTop:'9px', margin:'4px 0px 4px 0px'}}>
                  <Paper className={classes.paper}>
                    <Link href={url} prefetch="visible" className={classes.link}>
                      <a>
                        {iconComponent}
                      </a>
                    </Link>
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Grid>
    </Grid>
    </Container>
  )
}