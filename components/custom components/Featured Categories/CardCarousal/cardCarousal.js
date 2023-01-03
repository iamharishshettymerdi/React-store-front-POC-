import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from '@material-ui/core/styles'
import { useState } from "react";

const useStyles = makeStyles(theme => ({
  heading: {
      fontSize: "20px",
      marginBottom:'25px',
      marginLeft:'12px',
  },
  product: {
    padding: "16px",
  },
  productImage: {
    maxWidth: "100%",
    objectFit: "contain",
},
Image: {
    textAlign: 'center',
},
card:{
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    margin: "8px",
    borderRadius:'8px',
    maxHeight:"100%",
    transitionDuration: "10s",
    transform : "0.2s ease 0s",
    minHeight: '250px',
    // '&:hover':{
    //     margin: "16px",
    // }
},
price: {
    color: "grey",
    fontSize: "22px",
},
productName: {
    fontSize: "12px",
    fontWeight:"bold",
    margin: '0px !important',
    whiteSpace: "nowrap", 
    width: "100%", 
    overflow: "hidden",
    textOverflow: "ellipsis", 
},
productDescription:{
    fontSize: '14px',
    margin: '0px !important',
    whiteSpace: "nowrap", 
    width: "100%", 
    overflow: "hidden",
    textOverflow: "ellipsis", 
},
container:{
  width: '81%',
  margin: 'auto',
  marginTop: '30px'
},
spancl:
{
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    borderRadius: '4px',
    verticalAlign: 'middle',
    textTransform: 'uppercase',
    fontSize: '10px',
    lineHeight: '1.3',
    display: 'inline-block',
    fontWeight: 'var(--font-weight-bold)',
    backgroundColor: 'rgb(0, 0, 0)',
    color: 'rgb(255, 255, 255)',
    paddingLeft: '0.6em',
    paddingRight: '0.6em',
    width: 'fit-content'
}

}))
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 6,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

export default function MultiCarousel(props) {

  console.log("productdata ",props.productdata)
  const [productdata,setproductdata]=useState(props.productdata)
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>{productdata.title}</h2>
      <Carousel  responsive={responsive}>
      {productdata.productdata.map((product)=>(
        <div className={classes.card}>
          {productdata.title==='Just Dropped' && <div style={{position: 'absolute',
    top: '8px',
    left: '8px',
    display: 'grid',
    gap: '4px'}}>
      {product.new?<span className={classes.spancl}>New</span>:''}
      {product.limitedEdition?<span className={classes.spancl}>Limited Edition</span>:''}

          </div>}
        <div className = {classes.Image}>
          <img className={classes.productImage} src={product.imageurl} alt="product image" />
          <p>
            
          </p>
        </div>
        <div >
          <h2 className ={classes.productName}>{product.name}</h2>
          <p className = {classes.productDescription}>{product.description}</p>
        </div>
    </div>
      ))}
         
      </Carousel>
    </div>
  );
}