import Head from 'next/head'
import React from 'react'
import theme from '../components/theme'
import Header from '../components/Header'
import { CssBaseline } from '@material-ui/core'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles'
import PWA from 'react-storefront/PWA'
import NavBar from '../components/NavBar'
import reportError from '../components/reportError'
import useJssStyles from 'react-storefront/hooks/useJssStyles'
import SessionProvider from 'react-storefront/session/SessionProvider'
import useAppStore from 'react-storefront/hooks/useAppStore'
import Banner from '../components/Banner'
import Corousel from '../components/custom components/carouselBanner'
import Footer from '../components/Footer'
// import Header from '../components/customheader'
import '../components/custom components/corousal.css'

const styles = theme => ({
  main: {
    paddingTop: 3,
  },
  header:{
    backgroundColor:'white',
    position:'relative'
  }
})

const useStyles = makeStyles(styles)

export default  function MyApp({ Component, pageProps ,products}) {
  useJssStyles()
  const classes = useStyles()
  const [appData] = useAppStore(pageProps || {})

  console.log("Existing Props ",pageProps)
  console.log("Component Value ",Component)
  console.log("Page props products ",products)

  return (
    <PWA errorReporter={reportError}>
      <Head>
        {/* <meta
          key="viewport"
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        /> */}
      </Head>
      <SessionProvider url="/api/session">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Banner {...pageProps}/>
          {/* <Header className={classes.header}/> */}
          <Header menu={appData && appData.menu} /> 
          <NavBar tabs={appData && appData.tabs}/>
          <main className={classes.main}>
  
            <Component {...pageProps} />
          </main>
          <Footer/>
        </MuiThemeProvider>
      </SessionProvider>
    </PWA> 
  )
}

MyApp.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  // const products=await fetch("https://kv7kzm78.api.commercecloud.salesforce.com/product/shopper-products/v1/organizations/f_ecom_zzun_006/products?siteId=SiteGenesis&ids=91736743%2C25752235%2C25604524%2C12416789%2C34736758%2C73910432%2C25752218%2C82936941%2C25686364%2C32416783%2C25686514%2C25752986%2C62516752%2C25686395%2C25686544%2C44736828%2C82516743%2C25752981%2C83536828%2C25686571&allImages=true", {
  //   method: 'get',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization':'Bearer eyJ2ZXIiOiIxLjAiLCJqa3UiOiJzbGFzL3Byb2Qvenp1bl8wMDYiLCJraWQiOiJhNmM4Y2I4YS01ZDI1LTRkNDQtOGU3Yi02ZTZhMWFlY2U0NTUiLCJ0eXAiOiJqd3QiLCJjbHYiOiJKMi4zLjQiLCJhbGciOiJFUzI1NiJ9.eyJhdXQiOiJHVUlEIiwic2NwIjoic2ZjYy5zaG9wcGVyLWJhc2tldHMtb3JkZXJzIHNmY2Muc2hvcHBlci1iYXNrZXRzLW9yZGVycy5ydyBzZmNjLnNob3BwZXItY2F0ZWdvcmllcyBzZmNjLnNob3BwZXItY3VzdG9tZXJzLmxvZ2luIHNmY2Muc2hvcHBlci1jdXN0b21lcnMucmVnaXN0ZXIgc2ZjYy5zaG9wcGVyLWRpc2NvdmVyeS1zZWFyY2ggc2ZjYy5zaG9wcGVyLWdpZnQtY2VydGlmaWNhdGVzIHNmY2Muc2hvcHBlci1teWFjY291bnQgc2ZjYy5zaG9wcGVyLW15YWNjb3VudC5hZGRyZXNzZXMgc2ZjYy5zaG9wcGVyLW15YWNjb3VudC5hZGRyZXNzZXMucncgc2ZjYy5zaG9wcGVyLW15YWNjb3VudC5iYXNrZXRzIHNmY2Muc2hvcHBlci1teWFjY291bnQub3JkZXJzIHNmY2Muc2hvcHBlci1teWFjY291bnQucGF5bWVudGluc3RydW1lbnRzIHNmY2Muc2hvcHBlci1teWFjY291bnQucGF5bWVudGluc3RydW1lbnRzLnJ3IHNmY2Muc2hvcHBlci1teWFjY291bnQucHJvZHVjdGxpc3RzIHNmY2Muc2hvcHBlci1teWFjY291bnQucHJvZHVjdGxpc3RzLnJ3IHNmY2Muc2hvcHBlci1teWFjY291bnQucncgc2ZjYy5zaG9wcGVyLXByb2R1Y3Qtc2VhcmNoIHNmY2Muc2hvcHBlci1wcm9kdWN0bGlzdHMgc2ZjYy5zaG9wcGVyLXByb2R1Y3RzIHNmY2Muc2hvcHBlci1wcm9tb3Rpb25zIiwic3ViIjoiY2Mtc2xhczo6enp1bl8wMDY6OnNjaWQ6YTU4M2QxY2YtODQ5Ni00MTk2LTkwMGMtMjk0M2NkZTI4NTNiOjp1c2lkOmE0OGIwNTU1LWE0YWYtNDM3Yi04ODY0LTkzOTBkNTk1MjdmNSIsImN0eCI6InNsYXMiLCJpc3MiOiJzbGFzL3Byb2Qvenp1bl8wMDYiLCJpc3QiOjEsImF1ZCI6ImNvbW1lcmNlY2xvdWQvcHJvZC96enVuXzAwNiIsIm5iZiI6MTY3ODY4Mzg4MCwic3R5IjoiVXNlciIsImlzYiI6InVpZG86c2xhczo6dXBuOkd1ZXN0Ojp1aWRuOkd1ZXN0IFVzZXI6OmdjaWQ6YmN3cm8yd0hhWmxyc1J3cnBGeEdZWWtYQkc6OmNoaWQ6ICIsImV4cCI6MTY3ODY4NTcxMCwiaWF0IjoxNjc4NjgzOTEwLCJqdGkiOiJDMkM1Nzg4OTU4MTIwLTE3OTc0MDMyNzc0NjU1NDQxNTYyNDIyMjI4In0.2TIU8rI80xw5tVT7voOksol0j-lu7mVCWyq2E6SZ7ycuieJdlfyJK1R1MCbtLNAWOn9gf1xiGrRK48U-vEbVqA'
  //   }
  // })
  // .then(res => res.json())
  //   .then(
  //     (result) => {
  //       console.log("result === ",result)
  //       return result
  //     },
  //     (error) => {
  //      console.log("Error ",error)
  //     }
  //   )

  return { pageProps}
}