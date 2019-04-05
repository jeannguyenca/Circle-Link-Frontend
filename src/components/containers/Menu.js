import React from "react"
import { Link, withRouter } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"

import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"

import { Typography } from "@material-ui/core"

import AppBar from "../parts/AppBarDashboard"
import logo from "../../assets/logo_text.svg"

import Customer from "../../assets/icons/customer.svg"
import CustomerIn from "../../assets/icons/customer-inactive.svg"
import Coupon from "../../assets/icons/coupon.svg"
import CouponIn from "../../assets/icons/coupon-inactive.svg"
import Create from "../../assets/icons/create.svg"
import CreateIn from "../../assets/icons/create-inactive.svg"
import Manage from "../../assets/icons/setting.svg"
import ManageIn from "../../assets/icons/manage-inactive.svg"
import Support from "../../assets/icons/support.svg"
import SupportIn from "../../assets/icons/support-inactive.svg"
import Feedback from "../../assets/icons/mail.svg"
import FeedbackIn from "../../assets/icons/mail-inactive.svg"

const drawerWidth = 220

const styles = theme => ({
  nav: {
    // width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "none",
    boxShadow: "5px 0px 10px 1px rgba(0, 0, 0, 0.1)"
  },
  menu: {
    padding: "20px 0"
  },
  item: {
    marginLeft: "30px",
    borderTopLeftRadius: "50px",
    borderBottomLeftRadius: "50px",
    margin: "10px 0",
    padding: "10px 0 10px 30px",
    "&:hover": {
      background: theme.palette.primary.main,
      "&>h6": {
        color: "white !important"
      }
    },
    "&:focus": {
      background: theme.palette.primary.main
    }
  },
  selected: {
    background: `${theme.palette.primary.main} !important`,
    "&>h6": {
      color: "white !important"
    }
  },
  sectionName: {
    textTransform: "uppercase",
    fontSize: 18,
    color: "black",
    marginLeft: "30px",
    marginBottom: "20px"
  },
  responsiveImg: {
    height: "auto",
    width: "70%",
    margin: "40px 0 40px 30px"
  },
  icon: {
    width: "20px",
    height: "100%",
    "&:hover": {}
  },
  menuText: {
    paddingLeft: "10px"
  }
})

const groups = ["My stats", "Coupon Sys", "Collab", "Help"]
const items = [
  ["Customers", "Coupons"],
  ["Create", "Manage"],
  ["Create", "Manage"],
  ["Support", "Feedback"]
]

const icons = [
  [Customer, Coupon],
  [Create, Manage],
  [Create, Manage],
  [Support, Feedback]
]

const iconsIn = [
  [CustomerIn, CouponIn],
  [CreateIn, ManageIn],
  [CreateIn, ManageIn],
  [SupportIn, FeedbackIn]
]

const linkTo = [
  ["/dashboard/stat/customers", "/dashboard/stat/coupons"],
  ["/dashboard/coupons/create", "/dashboard/coupons"],
  ["/dashboard/collab/create", "/dashboard/collab"],
  ["/dashboard/support", "/dashboard/feedback"]
]

const header = [
  ["My stats", "My stats"],
  ["Create Coupon", "Manage Coupon"],
  ["Create Collab Coupon", "Manage Collab"],
  ["Support", "Feedback"]
]

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    selectedIndex: this.checkCurrentPath(),
    hoveredIndex: "-1"
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  handleClick = (id, path) => {
    this.setState({
      selectedIndex: id,
      path: path
    })

    if (this.state.mobileOpen === true) {
      this.setState(state => ({ mobileOpen: false }))
    }
  }

  handleHover = id => {
    this.setState({
      hoveredIndex: id
    })
  }

  handleOut = () => {
    this.setState({
      hoveredIndex: -1
    })
  }

  // componentDidMount() {
  //   this.setState({
  //     selectedIndex: this.checkCurrentPath()
  //   })
  // }

  componentDidMount() {
    this.interval = setInterval(
      this.setState({
        selectedIndex: this.checkCurrentPath(),
        path: window.location.pathname
      }),
      200
    )
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  // shouldComponentUpdate(prepProp, prepState) {
  //   console.log(window.location.pathname)
  //   console.log(this.state.path)
  //   return (
  //     prepState !== this.state || this.state.path !== window.location.pathname
  //   )
  // }

  componentDidUpdate() {
    if (this.state.path !== window.location.pathname) {
      this.setState({
        selectedIndex: this.checkCurrentPath(),
        path: window.location.pathname
      })
    }
  }

  checkCurrentPath() {
    const path = window.location.pathname

    const pathArray = path.split("/")
    const truePath = pathArray.splice(1, pathArray.length - 2).join("/")

    if (linkTo[0].indexOf(path) !== -1) {
      return `0${linkTo[0].indexOf(path)}`
    } else if (linkTo[1].indexOf(path) !== -1) {
      return `1${linkTo[1].indexOf(path)}`
    } else if (linkTo[2].indexOf(path) !== -1) {
      return `2${linkTo[2].indexOf(path)}`
    } else if (linkTo[3].indexOf(path) !== -1) {
      return `3${linkTo[3].indexOf(path)}`
    } else if ("dashboard/collab/createCoupon" === truePath) {
      return `20`
    }
  }

  render() {
    const { classes } = this.props
    // Drawer object
    const drawer = (
      <div className={classes.drawer}>
        <Hidden smDown implementation="css">
          <Link
            to="/dashboard"
            onClick={() => this.handleClick("-1", "/dashboard")}
          >
            <img src={logo} alt="Logo" className={classes.responsiveImg} />
          </Link>
        </Hidden>

        {/* Render sidebar menu items with section headers */}
        {groups.map((section, index) => {
          return (
            <MenuList key={index} className={classes.menu}>
              <Typography variant="h2" className={classes.sectionName}>
                {section}
              </Typography>

              {items[index].map((item, i) => {
                return (
                  <MenuItem
                    className={classes.item}
                    button
                    key={i}
                    component={Link}
                    to={linkTo[index][i]}
                    // change selected item
                    onClick={() =>
                      this.handleClick(`${index}${i}`, linkTo[index][i])
                    }
                    // handle mouseover item
                    onMouseEnter={() => this.handleHover(`${index}${i}`)}
                    onMouseLeave={() => this.handleOut()}
                    // selected item condition
                    selected={
                      this.state.selectedIndex % 10 === i &&
                      Math.round(this.state.selectedIndex / 10) === index
                    }
                    classes={{ selected: classes.selected }}
                  >
                    {/* Render img for menu item */}
                    {(this.state.selectedIndex % 10 === i &&
                      Math.round(this.state.selectedIndex / 10) === index) ||
                    (this.state.hoveredIndex % 10 === i &&
                      Math.round(this.state.hoveredIndex / 10) === index) ? (
                      <img
                        src={iconsIn[index][i]}
                        alt={item}
                        className={classes.icon}
                      />
                    ) : (
                      <img
                        src={icons[index][i]}
                        alt={item}
                        className={classes.icon}
                      />
                    )}
                    <Typography variant="h6" className={classes.menuText}>
                      {item}
                    </Typography>
                  </MenuItem>
                )
              })}
            </MenuList>
          )
        })}
      </div>
    )

    return (
      <nav className={classes.nav}>
        {this.state.selectedIndex ? (
          <AppBar
            handleDrawerToggle={this.handleDrawerToggle}
            header={
              header[Math.round(this.state.selectedIndex / 10)][
                this.state.selectedIndex % 10
              ]
            }
            name={this.props.name}
            logout={this.props.logout}
          />
        ) : (
          <AppBar
            handleDrawerToggle={this.handleDrawerToggle}
            name={this.props.name}
            logout={this.props.logout}
          />
        )}

        <Hidden mdUp implementation="css">
          <Drawer
            container={this.props.container}
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    )
  }
}

export default withStyles(styles)(withRouter(ResponsiveDrawer))
