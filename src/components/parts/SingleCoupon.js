import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"

import DateFormat from "../../helpers/DateFormat"

const styles = theme => ({
  itemRight: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      textAlign: "left"
    }
  },
  itemLeft: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      textAlign: "left"
    }
  },
  button: {
    margin: "20px 0",
    "&:first-of-type": {
      marginRight: "20px"
    }
  },
  buttonDelete: {
    color: "#f44336",
    borderColor: "#f44336",
    margin: "20px 0 20px 0",
    "&:hover": {
      borderColor: "#f44336",
      background: "rgba(244,67,54, 0.1)"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 20px 0"
    }
  },
  divider: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px"
    }
  },
  span: {
    display: "inline-block",
    width: "120px",
    fontWeight: 600
  }
})

const SingleCoupon = props => {
  const { classes, name, description, condition, startDay, expiredDay } = props

  return (
    <Grid container className={classes.container} spacing={8}>
      {/* ------ Content row ------- */}
      <Grid item xs={12} md={8} className={classes.itemLeft} container>
        <Grid item>
          <Typography variant="body1">
            <span className={classes.span}>Name: </span>
            {name}
          </Typography>
          <Typography variant="body1">
            <span className={classes.span}>Description: </span>
            {description}
          </Typography>
          <Typography variant="body1">
            <span className={classes.span}>Condition: </span>
            {condition > 0 ? condition + " point" : "None"}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} className={classes.itemRight}>
        <Typography variant="body1">
          Start:{" "}
          {DateFormat(startDay) === null ? "Not set yet" : DateFormat(startDay)}
        </Typography>
        <Typography variant="body1">
          End:{" "}
          {DateFormat(expiredDay) === null
            ? "Not set yet"
            : DateFormat(expiredDay)}
        </Typography>
      </Grid>

      {/* ------ Button row ------- */}
      <Grid container className={classes.insideContainer}>
        <Grid item xs={12} md={9} className={classes.itemLeft}>
          <Button color="primary" variant="outlined" className={classes.button}>
            View stats
          </Button>
          {DateFormat(expiredDay) < new Date() && (
            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
            >
              Edit coupon
            </Button>
          )}
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          className={classes.itemRight}
          container
          alignItems="center"
          justify="flex-end"
        >
          <Button
            color="secondary"
            variant="outlined"
            className={classes.buttonDelete}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.itemRight}>
        <Divider component="div" className={classes.divider} />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(SingleCoupon)
