import React, { memo, useState } from 'react'
import Link from 'react-storefront/link/Link'
import { Vbox } from 'react-storefront/Box'
import { Typography, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from 'react-storefront/Rating'
import ForwardThumbnail from 'react-storefront/ForwardThumbnail'
import Image from 'react-storefront/Image'
import clsx from 'clsx'
import ProductOptionSelector from 'react-storefront/option/ProductOptionSelector'
import Form from '../../Common/Form'
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px 0`,
  },
  thumbnail: {
    marginBottom: theme.spacing(1),
    zIndex: -1,
    objectFit: 'contain',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  price: {
    marginTop: '5px',
    fontFamily: 'bold',
    fontWeight: '400',
  },
  reviews: {
    marginTop: '5px',
  },
  reviewCount: {
    marginLeft: '2px',
  },
  info: {
    margin: '0',
  },
}))

function ProductItem({ product, index, classes, className, colorSelector, shortKey = false }) {
  classes = useStyles({ classes })
  const [store, updateStore] = useState(product)
  const [formbutton, setFormbutton] = React.useState(false)
  const closeForm = () => {
    setFormbutton(state => !state)
  }
  return (
    <div id={`item-${index}`} className={clsx(className, classes.root)} style={{ width: '170px' }}>
      <Vbox alignItems="stretch">
        <ForwardThumbnail>
          <Link
            as={product.url}
            href="/p/[productId]"
            className={classes.link}
            prefetch="visible"
            pageData={{ product, color: store.color }}
          >
            <a style={{ position: 'relative' }}>
              {shortKey && (
                <>
                  <Grid
                    style={{
                      display: 'grid',
                      justifyContent: 'start',
                      position: 'absolute',
                      top: '2px',
                      left: '0',
                      gap: '.2em',
                      padding: '.2em',
                    }}
                  >
                    <span
                      style={{
                        color: 'white',
                        backgroundColor: 'black',
                        borderRadius: '4px',
                        padding: '.2em .3em',
                        fontSize: '.725em',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        lineHeight: '1.3',
                      }}
                    >
                      New arrival
                    </span>
                  </Grid>
                </>
              )}
              <Form value={formbutton} closeForm={closeForm} />
              <Image
                className={classes.thumbnail}
                src={
                  (store.color && store.color.media.thumbnail.src) ||
                  (store.thumbnail && store.thumbnail.src)
                }
                alt={
                  (store.color && store.color.media.thumbnail.alt) ||
                  (store.thumbnail && store.thumbnail.alt)
                }
                optimize={{ maxWidth: 200 }}
                lazy={index >= 4 && index < 20 ? 'ssr' : false}
                aspectRatio={1}
              />
            </a>
          </Link>
        </ForwardThumbnail>
        <div className={classes.info}>
          <Typography variant="subtitle1" className={classes.name}>
            {product.name}
          </Typography>
          {colorSelector && (
            <ProductOptionSelector
              options={store.colors}
              value={store.color}
              onChange={value => updateStore({ ...store, color: value })}
              optionProps={{
                size: 'small',
                showLabel: false,
              }}
            />
          )}
          <Rating product={product} className={classes.rating} />
          <Typography className={classes.price}>${product.price}</Typography>
        </div>
      </Vbox>
      {shortKey && (
        <Grid>
          <button
            style={{
              position: 'absolute',
              top: '15px',
              right: '1px',
              backgroundColor: 'transparent',
              border: 'none',
            }}
            onClick={closeForm}
          >
            <FavoriteIcon
              style={{
                width: '1em',
                cursor: 'pointer',
              }}
            />
          </button>
        </Grid>
      )}
    </div>
  )
}

ProductItem.defaultProps = {
  colorSelector: true,
}

export default memo(ProductItem)
