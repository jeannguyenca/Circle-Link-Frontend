import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  link: {
    margin: "0 25px",
    textDecoration: 'none',
    fontFamily: ["Raleway", "sans-serif"].join(","),
    [theme.breakpoints.down("sm")]: {
      margin: "20px",
      textAlign: "center"
    },
    "&:hover": {
      color: theme.palette.primary.main
    },
    "&:.active": {
      color: theme.palette.primary.main
    },
    cursor: "pointer"
  },
  button: {
    borderRadius: "50px",
    boxShadow: "none",
    "-webkit-box-shadow": "0px 0px 15px 5px rgba(17,211,188,.3)",
    "-moz-box-shadow": "0px 0px 15px 5px rgba(17,211,188,.3)",
    "box-shadow": "0px 0px 15px 5px rgba(17,211,188,.3)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      margin: "0 auto"
    },
    "&:hover": {
      background: "white",
      color: theme.palette.primary.main
    }
  }
});

class AuthButtonGroup extends Component {

  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <Link to="/login" 
                color="inherit" className={classes.link}>
                <Button>
                  Log in
                </Button>
              </Link>
              
              <Link to="/signup" className={classes.link}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Sign up
                </Button>
              </Link>
      </div>
    )
  }
}

export default withStyles(styles)(AuthButtonGroup)
