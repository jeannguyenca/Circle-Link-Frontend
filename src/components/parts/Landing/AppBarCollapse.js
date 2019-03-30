import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import ButtonAppBarCollapse from "../Landing/ButtonAppBarCollapse"
import PropTypes from "prop-types"
import { Link } from "react-scroll"

import LogoText from "../../../assets/logo_text.svg"
import LogoIcon from "../../../assets/logo_icon.svg"
import AuthButtonGroup from "./AuthButtonGroup"

const styles = theme => ({
  root: {
    maxWidth: "75em",
    margin: "0 auto",
    padding: "30px 0",
    display: "flex",
    "justify-content": "space-between",
    position: "sticky",
    top: 0,
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0 0 0"
    }
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
      "flex-direction": "column"
    },
    "& .active": {
      color: `${theme.palette.primary.main} !important`
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
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      margin: "20px",
      textAlign: "center"
    },
    "&:hover": {
      color: `${theme.palette.primary.main} !important`
    },
    cursor: "pointer"
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

const menus = ["Overview", "Features", "ContactUs"]

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
        <Link
          to="Home"
          spy={true}
          smooth={true}
          className={classes.link}
          offset={-136}
        >
          <img
            src={LogoText}
            className={classes.logoText}
            alt="CircleLink logo"
          />
          <img
            src={LogoIcon}
            className={classes.logoIcon}
            alt="CircleLink logo"
          />
        </Link>

        <div className={classes.wrapper} id="appbar-collapse">
          <div className={classes.left}>
            {menus.map((menu, index) => {
              return (
                <Link
                  to={menus[index]}
                  spy={true}
                  smooth={true}
                  color="inherit"
                  className={classes.link}
                  offset={-50}
                  key={menu[index]}
                >
                  {menu}
                </Link>
              )
            })}
          </div>
          <div className={classes.right}>
            <AuthButtonGroup />
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
