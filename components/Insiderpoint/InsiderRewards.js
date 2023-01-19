import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Product from './Product'
import productData from '../../local-json/InsideOffer/data.json'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: '20px',
    marginBottom: '25px',
    marginLeft: '12px',
  },
  product: {
    padding: '16px',
    minHeight:'330px'
  },
  mainheading:{
      alignItems: "baseline",
      display: "grid",
      gridTemplateColumns: "90% 10%",
      gridTemplateRows:"55px",
  },
}))

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSilde:6,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 5,
    slidesToSilde: 6,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3,
    slidesToSilde:2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
export default function InsiderRewards() {
  const classes = useStyles()
  const product = productData.map((item, index) => (
    <Product
      className={classes.product}
      key={index}
      name={item.name}
      url={item.imageurl}
      point={item.point}
      description={item.description}
      productimage={item.producturl}
      id={item.itemNumber}
    />
  ))

  return (
    <div className={classes.container}>
       <div className={classes.mainheader} style={{display:"grid",gridTemplateRows:"55px", gap: "12px",gridTemplateColumns: "auto auto",alignItems:"baseline"}}>
      <h2 style={{alignContent:"left"}}>Beauty Inside Rewards
      </h2>
      <a style={{display:"flex",justifyContent:"flex-end",'&hover':{textDecoratin:"underline"}}} href={'https://www.sephora.com/rewards'}>view all</a>
      </div>
      <span>Sign in to redeem your Points</span>
      <Carousel  slidesToSlide={6} ssr={true} draggable={true} style={{minHeight:'330px'}} responsive={responsive}>{product}</Carousel>
    </div>
  )
}
