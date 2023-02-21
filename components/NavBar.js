import React, { memo } from 'react'
import NavTab from 'react-storefront/nav/NavTab'
import NavTabs from 'react-storefront/nav/NavTabs'
import Link from 'react-storefront/link/Link'
import { Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import category from '.././local-json/category.json'

console.log("category ============= ",category);
const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  link: {
    display: 'block',
    marginTop: theme.spacing(2),
    '&:first-child': {
      marginTop: 0,
    },
    textDecoration:'none',
    color:'black',
    fontWeight: '600',
    '&:hover':{
      textDecoration:'underline'
    }
  },
  navtab:{
     backgroundColor:'black !important',
     color:'red'
  },
  flexcontainer:{
    display: 'flex',
    flexDirection: 'row',
    padding: 20 ,left: '0px', width: '1310px'
  },
  flexitemleft:{
    padding: '10px',
    flex: '50%',
  },
  flexitemright :{
    padding: '10px',
    flex: '50%'
  }
}))

function NavBar({ tabs }) {
  console.log("tabs ",tabs)

  const classes = useStyles()

  return (
    <Paper square elevation={2} style={{color:'white',backgroundColor:'black'}}>
      <Container maxWidth="lg" className={classes.container}>
        <NavTabs>
          {tabs &&
            tabs.map(tab => (
              <NavTab key={tab.as} href={tab.href} as={tab.as} label={tab.text} prefetch="visible" >
                {tab?.items?.length>0 && (
                  <div className={classes.flexcontainer} >

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

                    <div className={classes.flexitemright}>
                          <img src={tab?.image}/>
                    </div>
                  </div>
                )}
              </NavTab>
            ))}
        </NavTabs>
      </Container>
    </Paper>
  )
}

NavBar.defaultProps = {
  tabs: [],
}

export default memo(NavBar)
