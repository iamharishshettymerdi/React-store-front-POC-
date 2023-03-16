import React, { memo } from 'react'
import NavTab from 'react-storefront/nav/NavTab'
import NavTabs from 'react-storefront/nav/NavTabs'
import Link from 'react-storefront/link/Link'
import { Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import category from '.././local-json/category.json'

console.log('category ============= ', category)
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(2),
    '&:first-child': {
      marginTop: 0,
    },
    textDecoration: 'none',
    color: 'black',
    fontWeight: '600',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  navtab: {
    backgroundColor: 'black !important',
    color: 'red',
  },
  flexcontainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    left: '0px',
    width: '100%',
    height: '100%',
  },
  flexitemleft: {
    padding: '10px',
    width: '50%',
    minWidth: '720px',
  },
  flexitemright: {
    padding: '10px',
    maxWidth: '750px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  hovImage: {
    width: '294px',
    height: '294px',
    objectFit: 'cover',
    margin: '20px',
  },
}))

function NavBar({ tabs }) {
  console.log('tabs ', tabs)
  const source = [
    {
      as: '',
      href: '',
      text: 'New Arrivals',
      images: [
        {
          image:
            'https://zzun-006.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-storefront-catalog-en/default/dw3d51e6a1/images/slot/landing/cat-landing-slotbanner-womens.jpg',
        },
        {
          image:
            'https://zzun-006.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-storefront-catalog-en/default/dw3d51e6a1/images/slot/landing/cat-landing-slotbanner-womens.jpg',
        },
        {
          image:
            'https://zzun-006.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-storefront-catalog-en/default/dw3d51e6a1/images/slot/landing/cat-landing-slotbanner-womens.jpg',
        },
      ],
      items: [
        {
          as: '',
          href: '',
          text: '',
          link: '',
        },
      ],
    },
    {
      as: '',
      href: '',
      text: 'Mens',
      image: '',
      items: [
        {
          as: '',
          href: '',
          text: 'new arrivals',
          link: '',
        },
        {
          as: '',
          href: '',
          text: 'mens',
          link: '',
        },
        {
          as: '',
          href: '',
          text: 'womens',
          link: '',
        },
        {
          as: '',
          href: '',
          text: 'new arrivals',
          link: '',
        },
        {
          as: '',
          href: '',
          text: 'mens',
          link: '',
        },
        {
          as: '',
          href: '',
          text: 'womens',
          link: '',
        },
      ],
    },
    {
      as: '',
      href: '',
      text: 'Womens',
      image: '',
      items: [
        {
          as: '',
          href: '',
          text: '',
          link: '',
        },
      ],
    },
  ]

  const classes = useStyles()

  return (
    <Paper square elevation={2} style={{ color: 'white', backgroundColor: 'black' }}>
      <Container maxWidth="lg" className={classes.container}>
        <NavTabs>
          {tabs &&
            tabs.map(tab => (
              <NavTab key={tab.as} href={tab.href} as={tab.as} label={tab.text} prefetch="visible">
                {tab?.items?.length > 0 && (
                  <div className={classes.flexcontainer}>
                    <div class={classes.flexitemleft}>
                      {tab.items.map(subcategory => (
                        <Link
                          href={subcategory.href}
                          key={subcategory.as}
                          as={subcategory.as}
                          className={classes.link}
                        >
                          {subcategory.text}
                        </Link>
                      ))}
                    </div>
                    {tab?.image ? (
                      <div className={classes.flexitemright}>
                        <img src={tab?.image} className={classes.hovImage} />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                )}
              </NavTab>
            ))}
        </NavTabs>
        {/* <NavTabs>
          {source &&
            source.map(tab => (
              <NavTab key={tab.as} href={tab.href} as={tab.as} label={tab.text} prefetch="visible">
                {tab?.items?.length > 0 && (
                  <div className={classes.flexcontainer}>
                    <div class={classes.flexitemleft}>
                      {tab.items.map(subcategory => (
                        <Link
                          href={subcategory.href}
                          key={subcategory.as}
                          as={subcategory.as}
                          className={classes.link}
                        >
                          {subcategory.text}
                        </Link>
                      ))}
                    </div>
                    {tab?.images ? (
                      <div className={classes.flexitemright}>
                        {tab?.images.map(item => (
                          <img src={item?.image} className={classes.hovImage} />
                        ))}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                )}
              </NavTab>
            ))}
        </NavTabs> */}
        <div style={{display:'flex',flexDirection:'column'}}>
          <div>
          {source.items?.map(()=>
            <div style={{display:'flex',flexDirection:'row'}}>

            </div>
          )}
          </div>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
          {source.images?.map((item,index)=>
           <img src={item?.image} key={index} /> 
          )
          }
          </div>
        </div>
      </Container>
    </Paper>
  )
}

NavBar.defaultProps = {
  tabs: [],
}

export default memo(NavBar)
