import React, { Component, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"

import CardDashboard from "../parts/CardDashboard"

import Mail from "../../assets/icons/mail.svg"
import Customer from "../../assets/icons/customer.svg"
import Coupon from "../../assets/icons/coupon.svg"
import Location from "../../assets/icons/location.svg"

const styles = {
  title: {
    fontWeight: 700,
    marginTop: "20px"
  }
}

const overview1 = {
  icon: Customer,
  number: 111,
  title: "Customer visited",
  arrow: "down",
  percentage: "8%"
}

const overview2 = {
  icon: Coupon,
  number: 61,
  title: "Coupon used",
  arrow: "up",
  percentage: "9%"
}

const overview3 = {
  icon: Location,
  number: 1,
  title: "Stores in collab",
}

const overviews = [overview1, overview2, overview3]

class Dashboard extends Component {
  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <Grid container className={classes.root} spacing={40}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h4" className={classes.title}>
              Inbox
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardDashboard
              icon={Mail}
              title="Messages"
              number="2"
              buttonText="View Inbox"
            />
          </Grid>
        </Grid>

        <Divider />

        <Grid container className={classes.root} spacing={40}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" className={classes.title}>
              Analytics Overview
            </Typography>
          </Grid>
          {overviews.map((overview, key) => {
            return (
              <Grid item xs={12} md={4} key={key} container alignItems="stretch">
                <CardDashboard {...overview} />
              </Grid>
            )
          })}
        </Grid>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Dashboard)
