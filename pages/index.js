import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useLazyState from 'react-storefront/hooks/useLazyState'
import createLazyProps from 'react-storefront/props/createLazyProps'
import fetchFromAPI from 'react-storefront/props/fetchFromAPI'
import CategoriesComponent from '../components/custom components/Featured Categories/categoriesComponent'
import Guidlines from '../local-json/guidlines.json'
import featuredcategories from '../local-json/featuredCategories.json'
import CarouselBanner from '../components/custom components/carouselBanner'
import GiftandPromotion from '../components/custom components/Featured Categories/GiftsAndPromotion/giftsAndPromotion'
import productdata from '../local-json/product.json'
import Divider from '@material-ui/core/Divider';
import Lazy from 'react-storefront/Lazy'
import { styled } from '@mui/material/styles';

//Modal pop up 
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Tooltip from '@material-ui/core/Tooltip';
//=======================================
import Content from '../components/OfferComponents/Content'
import justdropped from '../local-json/justdropped.json'
import sellingfast from '../local-json/sellingfast.json' 


import MultiCarousel from '../components/custom components/Featured Categories/CardCarousal/cardCarousal'
import { useState } from 'react'
const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: theme.spacing(10, 0, 0, 0),
  },
  textbox:
  {
    width: '100%',
    margin: '5px 0px',
    border:'1px solid gray',
    padding: '10px',
    borderRadius: '5px'
  },
  flexcontainer:{
    display: 'flex',
    flexDrection: 'row',
    textAlign: 'center',
    padding: '10px'
},
signupbutton:{
    fontSize: '14px',
    padding: '0.25em 1.125em',
    minHeight: '44px',
    fontWeight: 'var(--font-weight-bold)',
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
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(0, 0, 0)',
    transition: 'background-color 0.2s ease 0s',
    minWidth: '14.5em',
  '&:hover':{
    backgroundColor: 'rgb(102, 102, 102)'
  },
},
datacontainer:
{
  width: '81%',
  margin: 'auto',
  marginTop: '30px',
}
}))


const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
  padding:' 0px 16px'
};

export default function Index(lazyProps) {
  const classes = useStyles()
  const [state] = useLazyState(lazyProps)

  return (
    <>
    <body>
      <div > 
      <CarouselBanner/>
      <div className={classes.datacontainer}>
          <MultiCarousel productdata={productdata}/>
          <MultiCarousel productdata={justdropped}/>
          <Content/>
          <Divider/>
          <GiftandPromotion style={{display:'inline-block'}} imageurl={'https://www.sephora.com/contentimages/2022-12-26-holiday-launch-site-mobile-desktop-rwd-home-page-marketing-banner-gift-card-redeem-800x256-us-can.jpg?imwidth=400'} heading={'Got A Gift Card?'} description={'Redeem now and shop our sale.'} backgroundcolor={'darkgoldenrod'}/>
          <GiftandPromotion style={{display:'inline-block'}} imageurl={'https://www.sephora.com/contentimages/2022-12-30-jo-malone-london-roses-collection-site-desktop-mweb-home-page-rwd-marketing-banner-800x256-en-us-can.jpg?imwidth=400'} heading={'NEW Jo Malone London'} description={'Limited-edition floral scents with notes of scarlet velvet rose, honeycomb, and vanilla.'} backgroundcolor={'antiquewhite'}/>
          <GiftandPromotion style={{display:'inline-block'}} imageurl={'https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/2022-09-30-hp-marketing-banner-convenience-hub-same-day-unlimited-us-ca-rwd-slice.jpeg?imwidth=400'} heading={'Try Same-Day Unlimited for FREE'} description={'Want to get your beauty in as little as two hours? Enjoy a 30-day subscription trial.'} backgroundcolor={'lightsteelblue'}/>
          <Divider/>
          <MultiCarousel productdata={sellingfast}/>
          <Divider/>

          <CategoriesComponent data={featuredcategories}/>

          <Divider/>
          <CategoriesComponent data={Guidlines}/>
          <Divider/>

          <GiftandPromotion style={{display:'inline-block'}} imageurl={'https://www.sephora.com/contentimages/2022-12-26-holiday-launch-site-mobile-desktop-rwd-home-page-marketing-banner-gift-card-redeem-800x256-us-can.jpg?imwidth=400'} heading={'Got A Gift Card?'} description={'Redeem now and shop our sale.'} backgroundcolor={'darkgoldenrod'}/>
          <GiftandPromotion style={{display:'inline-block'}} imageurl={'https://www.sephora.com/contentimages/2022-12-30-jo-malone-london-roses-collection-site-desktop-mweb-home-page-rwd-marketing-banner-800x256-en-us-can.jpg?imwidth=400'} heading={'NEW Jo Malone London'} description={'Limited-edition floral scents with notes of scarlet velvet rose, honeycomb, and vanilla.'} backgroundcolor={'antiquewhite'}/>
          <GiftandPromotion style={{display:'inline-block'}} imageurl={'https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/2022-09-30-hp-marketing-banner-convenience-hub-same-day-unlimited-us-ca-rwd-slice.jpeg?imwidth=400'} heading={'Try Same-Day Unlimited for FREE'} description={'Want to get your beauty in as little as two hours? Enjoy a 30-day subscription trial.'} backgroundcolor={'lightsteelblue'}/>
      
          <Divider/>
      </div>

      </div>
    </body>
    </>
  )
}

Index.getInitialProps = createLazyProps(options => {
  const { res } = options
  if (res) res.setHeader('Cache-Control', 'max-age=99999')
  return fetchFromAPI(options)
})
