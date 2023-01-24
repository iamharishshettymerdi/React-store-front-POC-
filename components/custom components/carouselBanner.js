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
const CarouselBanner=(props)=>{

  const productData = props.data
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


