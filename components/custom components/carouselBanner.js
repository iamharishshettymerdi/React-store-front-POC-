import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from '@material-ui/core/styles';
import Product from "./Featured Categories/ProductComponent/Product";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const productData = [
  {
    id: 1,
    imageurl:
      "https://www.sephora.com/contentimages/2022-12-30-slotting-just-arrived-v2-standard-site-rwd-home-page-hero-banner-4-product-english-US-handoff_01.jpg?imwidth=545",
    name: "Tatcha",
    price: "$19.99",
    description: "The Dewy Skin Cream Plumping & Hydrating Moisturizer",
    itemid: 'ITEM 2181006',
    fullDescription: "A rich cream that feeds skin with plumping hydration and antioxidant-packed Japanese purple rice for a dewy, healthy glow.",
    size : " 2.5 oz/ 75 mL",
  },
  {
    id: 2,
    imageurl:"https://www.sephora.com/contentimages/2022-12-29-makeup-by-mario-surrealskin-foundation-site-desktop-mweb-rwd-hero-banner-1000x750-en-us-can.jpg?imwidth=545",
    name: "Rare Beauty by Selena Gomez",
    price: "$21.99",
    description: "Soft Pinch Liquid Blush",
    itemid:"ITEM 2518959",
    size: '0.25 oz/ 7.5 mL',
    fullDescription: 'A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in matte and dewy finishes',
  },
  {
    id: 3,
    imageurl:
      "https://www.sephora.com/contentimages/2022-12-26-jlo-beauty-booty-cream-site-desktop-mweb-home-page-rwd-hero-banner-1000x750-en-us-can.jpg?imwidth=545",
    name: "LANEIGE",
    price: "$99.99",
    description: "Lip Sleeping Mask Intense Hydration with Vitamin C",
    itemid: 'ITEM 2181006',
    fullDescription: "A rich cream that feeds skin with plumping hydration and antioxidant-packed Japanese purple rice for a dewy, healthy glow.",
    size : " 2.5 oz/ 75 mL",
  },
  {
    id: 4,
    imageurl:
      "https://www.sephora.com/contentimages/2022-12-26-sale-on-sale-eoy-sale-site-homepage-hero-banner-new-rwd-starts-today-us-can-1000x750.jpg?imwidth=545",
    name: "Charlotte Tilbury",
    price: "$14.99",
    description: "Hollywood Flawless Filter",
    itemid: 'ITEM 2181006',
    fullDescription: "A rich cream that feeds skin with plumping hydration and antioxidant-packed Japanese purple rice for a dewy, healthy glow.",
    size : " 2.5 oz/ 75 mL",
  }
];

const useStyles = makeStyles(theme => ({
  heading: {
      fontSize: "20px",
      marginBottom:'25px',
      marginLeft:'12px',
  },
  product: {
    padding: "16px",
    width:"200px"
  },
  coclass:{
    'div > button:': {
      backgroundColor: "yellow",
  }
},
}))
const CarouselBanner=()=>{

  const classes = useStyles()
  const product = productData.map((item) => (
    <Product className={classes.product}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  


  return (  
    <Carousel responsive={responsive} className={classes.coclass}>
     {product}
    </Carousel>
  )
 
}

export default CarouselBanner;


