import React from "react";
import { makeStyles } from '@material-ui/core/styles'
// import QuicklookModal from './QuicklookModal'

const useStyles = makeStyles(theme => ({
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
        minHeight: '450px',
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
  }))
export default function Product(props) {
    const classes = useStyles()
    var productImage = props.url;
  return (
    <div className={classes.card}>
    <div className = {classes.Image}>
      <img className={classes.productImage} src={props.url} alt="product image" />
       <p>
        {/* <QuicklookModal productImage={productImage}/> */}
      </p>
    </div>
    <div >
      <h2 className ={classes.productName}>{props.name}</h2>
      <p className = {classes.productDescription}>{props.description}</p>
      </div>
    </div>
  );
}