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

import justdropped from '../local-json/justdropped.json'


import MultiCarousel from '../components/custom components/Featured Categories/CardCarousal/cardCarousal'
const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: theme.spacing(10, 0, 0, 0),
  },
}))

export default function Index(lazyProps) {
  const classes = useStyles()
  const [state] = useLazyState(lazyProps)

  console.log("featuredcategories ",featuredcategories)
  return (
    <>
    <body>
            <CarouselBanner/>
            <MultiCarousel productdata={productdata}/>
            <MultiCarousel productdata={justdropped}/>
            <div style={{display: 'flex',marginTop: '100px'}}>
             <h2 style={{width: '125px'}}>Featured Categories</h2> {featuredcategories.map((element)=>(<CategoriesComponent  key={element.categoryname} data={element}/>))}
            </div>
            <div style={{display: 'flex'}}>
            <h2  style={{width: '125px'}}>Need a Little Guidance?</h2> {Guidlines.map((element)=>(<CategoriesComponent  key={element.guidename} data={element}/>))}
            </div>
            <div style={{ display: 'flex',
              width: '82%',
              margin: 'auto'}}>
              <GiftandPromotion style={{display:'inline-block'}} imageurl={'https://www.sephora.com/contentimages/2022-12-26-holiday-launch-site-mobile-desktop-rwd-home-page-marketing-banner-gift-card-redeem-800x256-us-can.jpg?imwidth=400'} heading={'Got A Gift Card?'} description={'Redeem now and shop our sale.'} backgroundcolor={'darkgoldenrod'}/>
              <GiftandPromotion style={{display:'inline-block'}} imageurl={'https://www.sephora.com/contentimages/2022-12-30-jo-malone-london-roses-collection-site-desktop-mweb-home-page-rwd-marketing-banner-800x256-en-us-can.jpg?imwidth=400'} heading={'NEW Jo Malone London'} description={'Limited-edition floral scents with notes of scarlet velvet rose, honeycomb, and vanilla.'} backgroundcolor={'antiquewhite'}/>
              <GiftandPromotion style={{display:'inline-block'}} imageurl={'https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/2022-09-30-hp-marketing-banner-convenience-hub-same-day-unlimited-us-ca-rwd-slice.jpeg?imwidth=400'} heading={'Try Same-Day Unlimited for FREE'} description={'Want to get your beauty in as little as two hours? Enjoy a 30-day subscription trial.'} backgroundcolor={'lightsteelblue'}/>
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
