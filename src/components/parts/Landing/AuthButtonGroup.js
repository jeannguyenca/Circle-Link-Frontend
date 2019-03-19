import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  link: {
    margin: "0 25px",
    textDecoration: 'none',
    [theme.breakpoints.down("sm")]: {
      margin: "20px",
      textAlign: "center"
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
    "&:active": {
      color: theme.palette.primary.main
    },
    cursor: "pointer"

  },

  button1: {
    padding: "4px 16px",
    borderRadius: "24.5px",
    "&:hover": {
      border: "1px solid #4FC95B"
    }
  },
  button: {
    borderRadius: "24.5px",
    boxShadow: "none",
    background: "rgb(79, 201, 91)",
    "-webkit-box-shadow": "0px 0px 15px 5px rgba(17,211,188,.3)",
    "-moz-box-shadow": "0px 0px 15px 5px rgba(17,211,188,.3)",
    "box-shadow": "0px 0px 15px 5px rgba(17,211,188,.3)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      margin: "0 auto"
    },
    "&:hover": {
      background: "white",
      color: "#4FC95B",
      borderRadius: "24.5px",
    }
  }
});
  // function refreshPage() {
  //   window.location.reload();
  // }onClick={ refreshPage }
  
class AuthButtonGroup extends Component {

  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <Link to="/login" 
                className={classes.link}>
                <Button className={classes.button1}>
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
