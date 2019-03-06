import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import ButtonAppBarCollapse from "../Landing/ButtonAppBarCollapse"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import { Link, animateScroll as scroll } from "react-scroll";


import LogoText from "../../../assets/logo_text.svg"
import LogoIcon from "../../../assets/logo_icon.svg"


const styles = theme => ({
  root: {
    maxWidth: "75em",
    margin: "30px auto",
    display: "flex",
    "justify-content": "space-between",
    position: "sticky",
    top: 0,
  },
  wrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      top: "100px !important",
      left: "0",
      width: "100%",
      height: "100vh",
      background: "white"
    },
    [theme.breakpoints.up("md")]: {
      display: "grid !important",
      "grid-template-columns": "auto auto",
      "align-items": "center"
    },
    width: "100%",
    background: "transparent"
  },
  left: {
    "justify-self": "start",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      "flex-direction": "column",
    }
  },
  right: {
    "justify-self": "end",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      "flex-direction": "column"
    }
  },
  link: {
    margin: "0 25px",
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
      color: theme.palette.primary.main,
    }
  }, 
  logoText: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  logoIcon: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
})

const menus = ["Overview", "Features", "Contact us"]

class AppBarCollapse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <Link to="Home" spy={true} smooth={true} className={classes.link} offset={-136}>
          <img src={LogoText} className={classes.logoText} alt="c3d logo" />
          <img src={LogoIcon} className={classes.logoIcon} alt="c3d logo" />
        </Link>

        <div className={classes.wrapper} id="appbar-collapse">
          <div className={classes.left}>
            {menus.map((menu,index) => {
              console.log(menus[index])
              return <Link
                to={menus[index]} spy={true} smooth={true}
                color="inherit" className={classes.link} offset={-50} key={menu}>
                {menu}
                </Link>
            })}
          </div>
          <div className={classes.right}>
            <Link to="links" spy={true} smooth={true} 
              color="inherit" className={classes.link}>
              Log in
            </Link>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Sign up
            </Button>
          </div>
        </div>
        <ButtonAppBarCollapse dataTarget="#appbar-collapse" />
      </div>
    )
  }
}
AppBarCollapse.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(AppBarCollapse)
