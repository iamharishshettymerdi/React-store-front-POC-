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
  },
  navtab:{
     backgroundColor:'black !important',
     color:'red'
  }
}))

function NavBar({ tabs }) {
  const classes = useStyles()

  return (
    <Paper square elevation={2} style={{color:'white',backgroundColor:'black'}}>
      <Container maxWidth="lg" className={classes.container}>
        <NavTabs>
          {category &&
            category.map(tab => (
              <NavTab key={tab.as} href={tab.href} as={tab.as} label={tab.text} prefetch="visible" >
                {tab.items.length>0 && (
                  <div style={{ padding: 20 ,left: '0px'}}>
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
