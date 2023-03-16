import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import QuicklookModal from '../../../Quicklookmodal/quicklookmadal'
import React from 'react'
const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: '20px',
    marginBottom: '25px',
    marginLeft: '12px',
  },
  product: {
    padding: '16px',
  },
  productImage: {
    maxWidth: '100%',
    objectFit: 'contain',
    width: '170px',
  },
  Image: {
    textAlign: 'center',
  },
  card: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    margin: '8px',
    borderRadius: '8px',
    maxHeight: '100%',
    transitionDuration: '10s',
    transform: '0.2s ease 0s',
    padding: '16px',
    cursor: 'pointer',
    '&:hover $btnclass': {
      display: 'block',
    },
  },
  price: {
    color: 'grey',
    fontSize: '22px',
  },
  productName: {
    fontSize: '12px',
    fontWeight: 'bold',
    margin: '0px !important',
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  productDescription: {
    fontSize: '14px',
    margin: '0px !important',
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  container: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  spancl: {
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
    width: 'fit-content',
  },
  btnclass: {
    width: '100%',
    transition: 'opacity 0.3s ease 0s',
    textAlign: 'center',
    color: 'rgb(255, 255, 255)',
    lineHeight: '1',
    fontWeight: '700',
    paddingTop: '8px',
    paddingBottom: '8px',
    fontSize: '12px',
    borderRadius: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    opacity: 1,
    '&hover': {
      backgroundColor: 'rgba(102, 102, 102, 0.9)',
    },
    cursor: 'pointer',
    display: 'none',
  },
  edgetext: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    display: 'flex',
    justifyContent: 'flex-end',
    lineHeight: '1',
    color: 'rgb(255, 255, 255)',
    fontWeight: 700,
    width: '3.75em',
    height: '3.75em',
    background:
      'linear-gradient(to right top, transparent 0%, transparent 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%)',
    margin: '8px',
    padding: '8px',
  },
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
}

export default function MultiCarousel(props) {
  const [value, setValue] = useState(false)
  const [data, setData] = useState('')
  const [productdata, setproductdata] = useState(props.productdata)
  const classes = useStyles()
  const handleClose = React.useCallback(value => {
    setValue(value)
  }, [])
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>{productdata.title}</h2>
      <Carousel slidesToSlide={6} responsive={responsive}>
        {productdata.productdata.map((product, index) => (
          <div className={classes.card} key={index}>
            {productdata.title === 'Just Dropped' && (
              <div
                style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  display: 'grid',
                  gap: '4px',
                }}
              >
                {product.new ? <span className={classes.spancl}>New</span> : ''}
                {product.limitedEdition ? (
                  <span className={classes.spancl}>Limited Edition</span>
                ) : (
                  ''
                )}
              </div>
            )}

            {productdata.title === 'Selling Fast' && (
              <div className={classes.edgetext}>#{index + 1}</div>
            )}

            <div className={classes.Image}>
              <img className={classes.productImage} src={product.imageurl} alt="product image" />
            </div>
            <div
              style={{ transition: 'opacity .2s', position: 'absolute', width: ' 73%', top: '55%' }}
            >
              <button
                className={classes.btnclass}
                onClick={() => {
                  setValue(true)
                  setData(product)
                }}
              >
                Quicklook
              </button>
            </div>
            <div>
              <h2 className={classes.productName}>{product.name}</h2>
              <p className={classes.productDescription}>{product.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <QuicklookModal value={value} handleClose={() => setValue(false)} productData={data} />
    </div>
  )
}
