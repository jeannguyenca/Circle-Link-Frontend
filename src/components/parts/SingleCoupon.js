import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"

import red from "@material-ui/core/colors/red"

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
    borderColor: theme.palette.primary.main,
    background: "white",
    color: theme.palette.primary.main,
    "&:hover": {
      color: "white",
      border: `1px solid ${theme.palette.primary.main}`,
      background: theme.palette.primary.main
    },
    "&:first-of-type": {
      marginRight: "20px"
    }
  },
  buttonDelete: {
    borderColor: red[500],
    background: "white",
    color: red[500],
    "&:hover": {
      color: "white",
      border: `1px solid ${red[500]}`,
      background: red[500],
      margin: "20px 0 20px 0"
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
  const {
    classes,
    _id,
    name,
    description,
    condition,
    startDay,
    expiredDay,
    status,
  } = props

  const option = props.option
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
          {option === "collab" && <Typography variant="body1" style={{textTransform: "capitalize"}}>
            <span className={classes.span}>Status: </span>
            {status}
          </Typography>}
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
            onClick={() => props.deleteHandler(_id)}
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
