// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import useLazyState from 'react-storefront/hooks/useLazyState'
// import createLazyProps from 'react-storefront/props/createLazyProps'
// import fetchFromAPI from 'react-storefront/props/fetchFromAPI'
// import CategoriesComponent from '../components/custom components/Featured Categories/categoriesComponent'
// import Guidlines from '../local-json/guidlines.json'
// import featuredcategories from '../local-json/featuredCategories.json'
// import CarouselBanner from '../components/custom components/carouselBanner'
// import GiftandPromotion from '../components/custom components/Featured Categories/GiftsAndPromotion/giftsAndPromotion'
// import productdata from '../local-json/product.json'
// import Divider from '@material-ui/core/Divider';
// import Lazy from 'react-storefront/Lazy'
// import { styled } from '@mui/material/styles';

// //=======================================
// import Content from '../components/OfferComponents/Content'
// import justdropped from '../local-json/justdropped.json'
// import sellingfast from '../local-json/sellingfast.json' 
// import giftandpromotion from '../local-json/giftsandpromotion.json'
// import giftandpromotion2 from '../local-json/giftsandpromotion2.json'
// import corousal from '../local-json/corousal.json'

// import MultiCarousel from '../components/custom components/Featured Categories/CardCarousal/CardCarousal'
// import InsiderRewards from '../components/Insiderpoint/InsiderRewards'
// import { useState } from 'react'
// const useStyles = makeStyles(theme => ({
// datacontainer:
// {
//   width: '81%',
//   margin: 'auto',
//   marginTop: '30px',
// }
// }))

// export default function Index(lazyProps) {
//   const classes = useStyles()
//   const [state] = useLazyState(lazyProps)

//   return (
//     <>
//     <body>
//       <div > 
//       <CarouselBanner data={corousal}/>
//       <div className={classes.datacontainer}>
//           <MultiCarousel productdata={productdata}/>
//           <MultiCarousel productdata={justdropped}/>
//           <Content/>
//           <Divider/>
//           <GiftandPromotion  data={giftandpromotion}/>
//           <Divider/>
//           <MultiCarousel productdata={sellingfast}/>
//           <InsiderRewards/>
//           <Divider/>

//           <CategoriesComponent data={featuredcategories}/>

//           <Divider/>
//           <CategoriesComponent data={Guidlines}/>
       
//           <Divider/>

//           <GiftandPromotion data={giftandpromotion2}/>
//           <Divider/>
//       </div>

//       </div>
//     </body>
//     </>
//   )
// }

// Index.getInitialProps = createLazyProps(options => {
//   const { res } = options
//   if (res) res.setHeader('Cache-Control', 'max-age=99999')
//   return fetchFromAPI(options)
// })

import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useLazyState from 'react-storefront/hooks/useLazyState'
import CmsSlot from 'react-storefront/CmsSlot'
import LoadMask from 'react-storefront/LoadMask'
import Head from 'next/head'
import createLazyProps from 'react-storefront/props/createLazyProps'
import fetchFromAPI from 'react-storefront/props/fetchFromAPI'

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

  return (
    <>
      {state.loading ? null : (
        <Head>
          <title>{state.pageData.title}</title>
        </Head>
      )}
      <Container maxWidth="lg">
        {state.loading ? (
          <LoadMask fullscreen />
        ) : (
          <div className={classes.main}>
            <Typography variant="h3" component="h1" gutterBottom color="primary">
              {state.pageData.slots.heading}
            </Typography>
            <CmsSlot>{state.pageData.slots.description}</CmsSlot>
          </div>
        )}
      </Container>
    </>
  )
}

Index.getInitialProps = createLazyProps(options => {
  const { res } = options
  if (res) res.setHeader('Cache-Control', 'max-age=99999')
  return fetchFromAPI(options)
})
