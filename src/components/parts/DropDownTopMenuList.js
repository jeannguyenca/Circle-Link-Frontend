import React from "react"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { withStyles } from "@material-ui/core/styles"

import Profile from "../../assets/icons/profile.svg"

const options = ["Settings", "Log out"]

const ITEM_HEIGHT = 48

const styles = theme => ({
  roundOutlined: {
    width: "25px",
    height: "25px",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "15px",
      height: "15px",
      margin: "0"
    }
  },
  menu: {
    marginTop: "60px",
    marginLeft: "-60px"
  }
})

class DropDownTopMenuList extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = (option) => {
    this.setState({ anchorEl: null })
    if(option === "Log out") {
      this.props.logout()
    }
  }

  render() {
    const { anchorEl } = this.state
    const { classes } = this.props
    const open = Boolean(anchorEl)

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? "long-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <img
            src={Profile}
            alt="notification"
            className={`${classes.icon} ${classes.roundOutlined}`}
          />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          className={classes.menu}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              // selected={option === "Pyxis"}
              onClick={() => this.handleClose(option)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(DropDownTopMenuList)
