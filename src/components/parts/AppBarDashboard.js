import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { Typography } from "@material-ui/core"

const styles = theme => ({
  menuButton: {
    color: "red",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  header: {
    fontSize: "20px",
    fontWeight: "900",
    textTransform: "uppercase"
  }
})

const AppBarDashBoard = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        {props.header ? (
          <Typography variant="h3" className={classes.header}>
            {props.header}
          </Typography>
        ) : (
          <Typography variant="h3" className={classes.header}>
            My Dashboard
          </Typography>
        )}
      </Toolbar>
    </div>
  )
}

export default withStyles(styles)(AppBarDashBoard)
