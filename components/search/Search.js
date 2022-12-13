import React from 'react'
import SearchDesktop from './SearchDesktop'
import SearchMobile from './SearchMobile'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import Spacer from 'react-storefront/Spacer'
import { useAmp } from 'next/amp'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  container: {
    flex: '0.7'
  }
}))
function Search() {
  const classes = useStyles()
  const theme = useTheme()
  const amp = useAmp()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm')) && !amp 

  return (
    <>
      {!isDesktop && <SearchMobile />}
      <Spacer className={classes.container}/>
      {isDesktop && <SearchDesktop />}
    </>
  )
}

export default Search
