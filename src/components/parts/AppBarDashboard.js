import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import { Typography } from "@material-ui/core"
import Button from '@material-ui/core/Button';

import Menu from "../../assets/icons/hamburger_menu.svg"

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
    textTransform: "uppercase",
    margin: "45px 0 0 40px"
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
          <img src={Menu} alt="Menu"/>
        </IconButton>

        <Button size="small" variant="outlined" onClick={props.logout}>Logout</Button>
        
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
