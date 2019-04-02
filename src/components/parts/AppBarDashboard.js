import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import { Typography } from "@material-ui/core"
import Hidden from "@material-ui/core/Hidden"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"

import Menu from "../../assets/icons/hamburger_menu.svg"
import logo from "../../assets/logo_icon.svg"

import TopMenuList from "./TopMenuList"

const styles = theme => ({
  root: {
    padding: 0,
    position: "fixed",
    background: "white",
    zIndex: 999,
    width: "calc(100% - 240px)",
    paddingTop: "20px",
    top: 0,
    paddingLeft: "60px",
    paddingRight: "60px",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 120px)",
      paddingBottom: "20px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "calc(100% - 60px)",
      padding: "20px 30px 20px 30px"
    }
  },
  item: {
    flexShrink: 0,
    [theme.breakpoints.down("sm")]: {
      alignContent: "center",
      textAlign: "center"
    }
  },
  left: {
    [theme.breakpoints.down("sm")]: {
      alignContent: "flex-start",
      justifyContent: "flex-end"
    }
  },
  menuButton: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "20px"
    }
  },
  header: {
    fontSize: "20px",
    fontWeight: "900",
    textTransform: "uppercase",
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px"
    }
  }
})

const AppBarDashBoard = props => {
  const { classes } = props

  return (
    <Toolbar className={classes.root}>
      <Grid container justify="space-between">
        <Grid item sx={1}>
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={props.handleDrawerToggle}
              className={classes.menuButton}
            >
              <img src={Menu} alt="Menu" />
            </IconButton>
          </Hidden>
        </Grid>

        <Grid item sx={8} md={8} className={classes.item}>
          <Hidden mdUp implementation="css">
            <Link to="/dashboard" onClick={() => this.handleClick("-1")}>
              <img src={logo} alt="Logo" className={classes.responsiveImg} />
            </Link>
          </Hidden>

          {props.header ? (
            <Typography variant="h3" className={classes.header}>
              {props.header}
            </Typography>
          ) : (
            <Typography variant="h3" className={classes.header}>
              My Dashboard
            </Typography>
          )}
        </Grid>
        <Grid
          item
          xs={2}
          md={4}
          className={`${classes.item} ${classes.left}`}
          container
          alignItems="center"
        >
          <TopMenuList name={props.name} logout={props.logout} />
        </Grid>
      </Grid>
    </Toolbar>
  )
}

export default withStyles(styles)(AppBarDashBoard)
