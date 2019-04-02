import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Typography, Hidden } from "@material-ui/core"

import Notification from "../../assets/icons/notification.svg"

import DropDown from "./DropDownTopMenuList"

const styles = theme => ({
  icon: {
    width: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      marginRight: "10px",    
    },
    "&:hover": {
      opacity: 0.7
    }
  },
  notification: {
    marginTop: "10px"
  },
  userName: {
    fontWeight: 600
  }
})

const TopMenuList = props => {
  const { classes, name } = props

  return (
    <React.Fragment>
      <Hidden smDown implementation="css">
        <img src={Notification} alt="notification" className={`${classes.icon} ${classes.notification}`} />
      </Hidden>
      <Hidden mdDown implementation="css">
        <Typography variant="body1">
          Hello, <span className={classes.userName}>{name || "guest"}</span>
        </Typography>
      </Hidden>
      <DropDown logout={props.logout}/>
    </React.Fragment>
  )
}

export default withStyles(styles)(TopMenuList)
