import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"

import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Face from "@material-ui/icons/Face"
import { Typography } from "@material-ui/core"

import AppBar from "../parts/AppBarDashboard"
import logo from "../../assets/logo_text.svg"

import Customer from "../../assets/icons/customer.svg"
import CustomerIn from "../../assets/icons/customer-inactive.svg"
// import Coupon from "../../assets/icons/customer.svg"
// import CouponIn from "../../assets/icons/customer-inactive.svg"
import Create from "../../assets/icons/edit.svg"
import CreateIn from "../../assets/icons/edit-inactive.svg"
import Manage from "../../assets/icons/setting.svg"
import ManageIn from "../../assets/icons/setting-inactive.svg"
import Support from "../../assets/icons/message.svg"
import SupportIn from "../../assets/icons/message-inactive.svg"
import Feedback from "../../assets/icons/mail.svg"
import FeedbackIn from "../../assets/icons/mail-inactive.svg"

const drawerWidth = 220

const styles = theme => ({
  nav: {
    // width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  menu: {
    padding: "20px 0"
  },
  item: {
    marginLeft: "20px",
    borderTopLeftRadius: "50px",
    borderBottomLeftRadius: "50px",
    margin: "10px 0",
    padding: "10px 0 10px 30px",
    "&:hover": {
      background: theme.palette.primary.main
    },
    "&:focus": {
      background: theme.palette.primary.main
    }
  },
  selected: {
    background: `${theme.palette.primary.main} !important`
  },
  sectionName: {
    textTransform: "uppercase",
    fontSize: 20,
    marginLeft: "20px",
    marginBottom: "20px"
  },
  responsiveImg: {
    height: "auto",
    width: "70%",
    margin: "20px 0 40px 20px"
  },
  icon: {
    width: "20px",
    height: "100%"
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
  [Customer, Customer],
  [Create, Manage],
  [Create, Manage],
  [Support, Feedback]
]

const iconsIn = [
  [CustomerIn, CustomerIn],
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
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  handleClick = id => {
    console.log(id)
    this.setState({
      selectedIndex: id
    })
  }

  render() {
    const { classes } = this.props

    const drawer = (
      <div className={classes.drawer}>
        <img src={logo} alt="Logo" className={classes.responsiveImg} />

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
                    onClick={() => this.handleClick(`${index}${i}`)}
                    selected={
                      this.state.selectedIndex % 10 === i &&
                      Math.round(this.state.selectedIndex / 10) === index
                    }
                    classes={{ selected: classes.selected }}
                  >
                    {this.state.selectedIndex % 10 === i &&
                    Math.round(this.state.selectedIndex / 10) === index ? (
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
      {
          this.state.selectedIndex ? 
          <AppBar
            handleDrawerToggle={this.handleDrawerToggle}
            header={
              header[Math.round(this.state.selectedIndex / 10)][this.state.selectedIndex % 10]
            }
          />: 
            <AppBar
              handleDrawerToggle={this.handleDrawerToggle}
            />
      }


        <Hidden smUp implementation="css">
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
        <Hidden xsDown implementation="css">
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

export default withStyles(styles)(ResponsiveDrawer)
