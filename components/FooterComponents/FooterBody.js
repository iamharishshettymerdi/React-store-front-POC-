import { ClassNames } from '@emotion/react'
import { makeStyles } from '@material-ui/core/styles'
import Box from 'react-storefront/Box'
import FooterColumn from './FooterColumn'
import { Container } from '@material-ui/core'
import Grid from '@mui/material/Grid'
import bodyData from '../../local-json/Footerdata/bodyData.json'
import FooterForm from './FooterForm'
import Accordion from 'react-storefront/Accordion'
import ExpandableSection from 'react-storefront/ExpandableSection'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Link from 'react-storefront/link/Link'
import AddIcon from '@material-ui/icons/Add'
const useStyles = makeStyles(theme => ({
  container: {
    margin: 0,
    paddingTop: '30px',
    display: 'flex',
  },
  custom: {
    display: "grid",
    gridTemplateColumns: "53% 17% 15%",
    alignItems: 'center',
    width: 'max-content',
    columnGap: '40px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: "100%",
    },
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    width: 'max-content',
  },
  sub: {
    display: 'flex',
    columnGap: '40px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: '10px',
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    padding: 0,
    lineHeight: '2.25',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

function FooterRes() {
  const matches = useMediaQuery(theme => theme.breakpoints.down('md'))
  const classes = useStyles()
  return (
    <>
      {matches ? (
        <Accordion>
          {bodyData?.map((data, index) => (
            <>
              <ExpandableSection
                title={data.title}
                key={index}
                style={{ color: 'white', padding: '5px 0 5px 0' }}
              >
                {data.items?.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      lineHeight: '1.25',
                      paddingBottom: '5px',
                    }}
                  >
                    {item.data}
                  </a>
                ))}
              </ExpandableSection>
            </>
          ))}
        </Accordion>
      ) : (
        <div className={classes.sub}>
          {bodyData?.map(({ title, items }, index) => (
            <Box className={classes.wrap} style={{ alignItems: 'left' }} key={index}>
              <span className={classes.title}>{title}</span>
              {items?.map((item, index) => (
                <Link key={index} href={`${item.url}`} prefetch="visible">
                  <a className={classes.link}>
                    <span className={classes.items} key={index}>
                      {item.data}
                    </span>
                  </a>
                </Link>
              ))}
            </Box>
          ))}
        </div>
      )}
    </>
  )
}
const FooterBody = () => {
  const classes = useStyles()
  return (
    <Container>
      <Grid container spacing={12} className={classes.container}>
        <Grid
          className={classes.custom}
          style={{ margin: '0px', alignItems: 'baseline', columnGap: '40px' }}
        >
          <FooterRes />
          <FooterColumn />
          <FooterForm />
        </Grid>
      </Grid>
    </Container>
  )
}
export default FooterBody
