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

//=======================================
import Content from '../components/OfferComponents/Content'
import justdropped from '../local-json/justdropped.json'
import sellingfast from '../local-json/sellingfast.json' 
import giftandpromotion from '../local-json/giftsandpromotion.json'
import giftandpromotion2 from '../local-json/giftsandpromotion2.json'

import MultiCarousel from '../components/custom components/Featured Categories/CardCarousal/cardCarousal'
import InsiderRewards from '../components/Insiderpoint/InsiderRewards'
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
          <GiftandPromotion  data={giftandpromotion}/>
          <Divider/>
          <MultiCarousel productdata={sellingfast}/>
          <InsiderRewards/>
          <Divider/>

          <CategoriesComponent data={featuredcategories}/>

          <Divider/>
          <CategoriesComponent data={Guidlines}/>
       
          <Divider/>

          <GiftandPromotion data={giftandpromotion2}/>
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
