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
//=======================================

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
flexItem:{

  }
}))
const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '32%',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
  padding:' 0px 16px'
};

export default function Index(lazyProps) {
  const classes = useStyles()
  const [state] = useLazyState(lazyProps)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("featuredcategories ",featuredcategories)
  return (
    <>
    <body>
      <div> 
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

            {/* <button onClick={handleOpen}>Open modal</button> */}
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 style={{fontWeight: '700',fontSize: '16px'}}>
              Sign In
          </h2>
          <p>Sign in or create an account to enjoy FREE standard shipping on all orders.</p>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          <FormGroup>
            <input placeholder='Email Address' className={classes.textbox}/>
            <input type="password" placeholder='Password'  className={classes.textbox}/>
            <span className='pviewer'>
              <RemoveRedEyeOutlinedIcon/>
              <VisibilityOffOutlinedIcon/>
            </span>
            <div className={classes.flexcontainer}>
              <div >
                <FormControlLabel control={<Checkbox />} label="Keep me signed in" />
              </div>
              <div style={{ flex: '50%',
                padding: '10px'}}>
                  <Link>Forgot password?</Link>
              </div>
            </div>
      
          </FormGroup>
           {/* <div>
            <span><input type='checkbox'>Keep me signed in</input></span>
           </div> */}
          </Typography>
        </Box>
      </Modal>
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
