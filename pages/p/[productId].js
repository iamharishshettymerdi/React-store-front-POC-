import React, { useContext, useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import qs from 'qs'
import useLazyState from 'react-storefront/hooks/useLazyState'
import Breadcrumbs from 'react-storefront/Breadcrumbs'
import CmsSlot from 'react-storefront/CmsSlot'
import MediaCarousel from 'react-storefront/carousel/MediaCarousel'
import PWAContext from 'react-storefront/PWAContext'
import { Container, Grid, Typography, Hidden, Button } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Row from 'react-storefront/Row'
import { Hbox } from 'react-storefront/Box'
import Label from 'react-storefront/Label'
import Rating from 'react-storefront/Rating'
import get from 'lodash/get'
import fetch from 'react-storefront/fetch'
import { fetchLatest, StaleResponseError } from 'react-storefront/utils/fetchLatest'
import SessionContext from 'react-storefront/session/SessionContext'
import AddToCartConfirmation from '../../components/product/AddToCartConfirmation'
import SuggestedProducts from '../../components/product/SuggestedProducts'
import Lazy from 'react-storefront/Lazy'
import TabPanel from 'react-storefront/TabPanel'
import QuantitySelector from 'react-storefront/QuantitySelector'
import ProductOptionSelector from 'react-storefront/option/ProductOptionSelector'
import fetchFromAPI from 'react-storefront/props/fetchFromAPI'
import createLazyProps from 'react-storefront/props/createLazyProps'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
import Carousel from 'react-storefront/carousel/Carousel'
import ReactImageMagnify from 'react-image-magnify';
var productaa = 'https://images.unsplash.com/photo-1526887520775-4b14b8aed897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'

const fetchVariant = fetchLatest(fetch)

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false)
  useEffect(() => {
    if (didMount.current) {
      func()
    } else {
      didMount.current = true
    }
  }, deps)
}

const styles = theme => ({
  carousel: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, -2),
      width: '100vw',
    },
  },
  lightboxCarousel: {
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      width: '100%',
    },
  },
  confirmation: {
    padding: '2px 0',
  },
  dockedSnack: {
    [theme.breakpoints.down('xs')]: {
      left: '0',
      bottom: '0',
      right: '0',
    },
  },
  docked: {
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      padding: `${theme.spacing(2)}px`,
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      zIndex: 10,
      borderRadius: '0',
    },
  },
  noShadow: {
    [theme.breakpoints.down('xs')]: {
      boxShadow: 'none',
    },
  },
  breadcrumsclass:{
    background:'white'
  }
})

const useStyles = makeStyles(styles)

const Product = React.memo(lazyProps => {
  const theme = useTheme()
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const [addToCartInProgress, setAddToCartInProgress] = useState(false)
  const [state, updateState] = useLazyState(lazyProps, {
    pageData: { quantity: 1, carousel: { index: 0 } },
  })
  const classes = useStyles()
  const product = get(state, 'pageData.product') || {}
  const color = get(state, 'pageData.color') || {}
  const size = get(state, 'pageData.size') || {}
  const quantity = get(state, 'pageData.quantity')
  const { actions } = useContext(SessionContext)
  const { loading } = state

  console.log("product === ",product)
  console.log("product.media.thumbnails ",product.media.thumbnails)
  const [productimages,setproductimage]=useState(product.media.thumbnails)
  console.log("productimages ",productimages)
  // This is provided when <ForwardThumbnail> is wrapped around product links
  const { thumbnail } = useContext(PWAContext)

  // Adds an item to the cart
  const handleSubmit = async event => {
    event.preventDefault() // prevent the page location from changing
    setAddToCartInProgress(true) // disable the add to cart button until the request is finished

    try {
      // send the data to the server
      await actions.addToCart({
        product,
        quantity,
        color: color.id,
        size: size.id,
      })

      // open the confirmation dialog
      setConfirmationOpen(true)
    } finally {
      // re-enable the add to cart button
      setAddToCartInProgress(false)
    }
  }

  const header = (
    <Row>
      <Typography variant="h6" component="h1" gutterBottom>
        {product ? product.name : <Skeleton style={{ height: '1em' }} />}
      </Typography>
      <Hbox>
        <Typography style={{ marginRight: theme.spacing(2) }}>{product.priceText}</Typography>
        <Rating value={product.rating} reviewCount={10} />
      </Hbox>
    </Row>
  )

  // Fetch variant data upon changing color or size options
  useDidMountEffect(() => {
    const query = qs.stringify({ color: color.id, size: size.id }, { addQueryPrefix: true })
    fetchVariant(`/api/p/${product.id}${query}`)
      .then(res => res.json())
      .then(data => {
        return updateState({ ...state, pageData: { ...state.pageData, ...data.pageData } })
      })
      .catch(e => {
        if (!StaleResponseError.is(e)) {
          throw e
        }
      })
  }, [color.id, size.id])

  const imageProps = {
    smallImage: {
      alt: 'Product Image',
      isFluidWidth: true,
      src: productaa,
      height:400
    },
    largeImage: {
      src: productaa,
      width: 1200,
      height: 1800
    },
    enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
  };

  return (
    <>
      <Breadcrumbs items={!loading && state.pageData.breadcrumbs} />
      <Container maxWidth="lg" style={{ paddingTop: theme.spacing(2) }} >
        <form onSubmit={handleSubmit} method="post" action-xhr="/api/cart">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={5}>
              <Hidden implementation="css" smUp>
                {header}
              </Hidden>
              {/* <ReactImageMagnify {...imageProps} /> */}
              <div style={{display:'flex'}}>
                <div>

                {productimages.map(m=>
                   <div style={{width: '40.33%',float:'top',}}>
                      <img src={m.src} alt={m.alt} style={{width:'100%',borderRadius:'50%'}}/>
                  </div>
                  )}
                </div>
                <div style={{width:'100%'}}>
                  <MediaCarousel
                  className={classes.carousel}
                  lightboxClassName={classes.lightboxCarousel}
                  thumbnail={thumbnail.current}
                  height="100%"
                  media={color.media || (product && product.media)}
                />
                </div>
              </div>

           
              
              {/* {
                product.media.thumbnails.map((m)=>{
                  <div>
                    <img src={m.src} style={{width:'100%'}} key={m.src}/>
                  </div>
                })
              } */}
             

             
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Hidden implementation="css" xsDown>
                    <div style={{ paddingBottom: theme.spacing(1) }}>{header}</div>
                  </Hidden>
                  {product ? (
                    <>
                      <Hbox style={{ marginBottom: 10 }}>
                        <Label>COLOR: </Label>
                        <Typography>{color.text}</Typography>
                      </Hbox>
                      <ProductOptionSelector
                        options={product.colors}
                        value={color}
                        onChange={value =>
                          updateState({ ...state, pageData: { ...state.pageData, color: value } })
                        }
                        strikeThroughDisabled
                        optionProps={{
                          showLabel: false,
                        }}
                      />
                    </>
                  ) : (
                    <div>
                      <Skeleton style={{ height: 14, marginBottom: theme.spacing(2) }}></Skeleton>
                      <Hbox>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                      </Hbox>
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  {product ? (
                    <>
                      <Hbox style={{ marginBottom: 10 }}>
                        <Label>SIZE: </Label>
                        <Typography>{size.text}</Typography>
                      </Hbox>
                      <ProductOptionSelector
                        options={product.sizes}
                        value={size}
                        strikeThroughDisabled
                        onChange={value =>
                          updateState({ ...state, pageData: { ...state.pageData, size: value } })
                        }
                      />
                    </>
                  ) : (
                    <div>
                      <Skeleton style={{ height: 14, marginBottom: theme.spacing(2) }}></Skeleton>
                      <Hbox>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                        <Skeleton style={{ height: 48, width: 48, marginRight: 10 }}></Skeleton>
                      </Hbox>
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Hbox>
                    <Label>QTY:</Label>
                    <QuantitySelector
                      value={quantity}
                      onChange={value =>
                        updateState({ ...state, pageData: { ...state.pageData, quantity: value } })
                      }
                    />
                  </Hbox>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    key="button"
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    data-th="add-to-cart"
                    className={clsx(classes.docked, classes.noShadow)}
                    disabled={addToCartInProgress}
                  >
                    Add to Cart
                  </Button>
                  <AddToCartConfirmation
                    open={confirmationOpen}
                    setOpen={setConfirmationOpen}
                    product={product}
                    color={color}
                    size={size}
                    quantity={quantity}
                    price={product.priceText}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TabPanel>
              <CmsSlot label="Description">{product.description}</CmsSlot>
              <CmsSlot label="Specs">{product.specs}</CmsSlot>
            </TabPanel>
          </Grid>

          <Grid item xs={12}>
          <Accordion onClick={()=>{console.log("Clicked Accordian")}}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              Isododecane, CI 77000 (Aluminum Powder), Trimethylsiloxysilicate, Polyethylene, Dimethicone, Synthetic Wax, Synthetic Fluorphlogopite, Silica, Polybutene, Polyglyceryl-4 Diisostearate/Polyhydroxystearate/Sebacate, CI 77891 (Titanium Dioxide), Mica, Caprylic/Capric Triglyceride, Stearalkonium Hectorite, Propylene Carbonate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How to Use</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <b>Suggested Usage:</b>
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel3a-content"
          id="panel2a-header"
        >
          <Typography>Compare Similar Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Grid>

          <Grid item xs={12}>
            <Lazy style={{ minHeight: 285 }}>
              <SuggestedProducts product={product} />
            </Lazy>
          </Grid>
        </form>
      </Container>
    </>
  )
})

Product.getInitialProps = createLazyProps(fetchFromAPI)

export default Product
