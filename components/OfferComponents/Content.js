import { Container } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import data from '../../local-json/OfferCard/data.json'
import Card from './Card'
const useStyles = makeStyles(theme => ({
  card: {
    display:"flex",
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    gap: "12px",
    
  },
  header:{
    alignItems: "baseline",
    display: "grid",
    gridTemplateColumns: "90% 10%",
    gridTemplateRows:"55px",
  },
  wrap:{
  gap:"12px",
  },
}))
const Content = () => {
  const classes = useStyles()
  const count = data.length
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      sildestoSilde:5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800},
      items: 3,
      sildestoSilde:4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
      sildestoSilde:2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      sildestoSilde:1
    },
  }

  return (
    <div>
      <div className={classes.header} style={{display:"grid",gridTemplateRows:"55px", gap: "12px",gridTemplateColumns: "auto auto",alignItems:"baseline"}}>
      <h2 style={{alignContent:"left"}}>Beauty Offer({count})
      </h2>
      <a style={{display:"flex",justifyContent:"flex-end"}}>view all</a>
      </div>
      <Carousel className={classes.card} responsive={responsive}>

        {data.map((item, index) => (
          <div className={classes.wrap} key={index} style={{alignItems:"center",marginLeft: "2px"}} >
            <Card  item={item} />
            </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Content
