import React from "react"

import BarChartCustom from "../parts/BarChart"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import DownIcon from "@material-ui/icons/ArrowDropDown"
import LeftIcon from "@material-ui/icons/ArrowLeft"
import RightIcon from "@material-ui/icons/ArrowRight"

import { Typography } from "@material-ui/core"

const styles = theme => ({
  container: {
    minHeight: `calc(100vh - 200px)`
  },
  item: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    },
  },
  chartContainer: {
    width: "100%"
  },
  button: {
    marginRight: "10px"
    // marginBottom: "40px"
  }
})

const Stats = props => {
  const { classes } = props
  return (
    <Grid container spacing={24} className={classes.container}>
      <Grid
        item
        xs={12}
        md={6}
        container
        alignItems="flex-end"
        className={classes.item}
      >
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Month
          <DownIcon
          //  className={classes.rightIcon}
          />
        </Button>
        <Button color="secondary" className={classes.button}>
          Quarter
          {/* <DownIcon
          display="none"
          //  className={classes.rightIcon}
        /> */}
        </Button>
        <Button color="secondary" className={classes.button}>
          Year
          {/* <DownIcon
          display="none"
        //  className={classes.rightIcon}
        /> */}
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        container
        alignItems="flex-end"
        justify="flex-end"
        className={classes.item}
      >
        <LeftIcon
          display="none"
          //  className={classes.rightIcon}
        />
        <Typography variant="body1">Today, April 10</Typography>
        <RightIcon
          display="none"
          //  className={classes.rightIcon}
        />
      </Grid>
      <Grid item xs={12} container alignItems="center" justify="center">
        <div className={classes.chartContainer}>
          <BarChartCustom data={props.data} keyData={props.keyData} />
        </div>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Stats)
