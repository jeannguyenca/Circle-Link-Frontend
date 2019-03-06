import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import Logo from "../../assets/logo_icon.svg"
import SvgIcon from '@material-ui/core/SvgIcon'
import { Typography } from "@material-ui/core";


const styles = theme => ({
  root: {
    margin: "auto",
    padding: "0 20px",
    background: "#353535",
    height: "50px"
  },
  container: {
    maxWidth: "75rem",
    margin: "auto"
  },
  logo: {
    width: "30px",
    marginTop: "10px"
  },
  socialIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid #fff",
    borderRadius: "50%",
    padding: "5px",
    marginTop: "10px",
    cursor: "pointer",
    "&:hover": {
      opacity: .8
    }
  },
  body: {
    color: "#fff",
    fontSize: "16px",
    marginTop: "15px"
  }
})

function FacebookIcon(props) {
  return (
        <SvgIcon {...props}>
    <path fill="#fff" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
        </SvgIcon>
  );
}

const Footer = props => {
  const classes = props.classes

  return (
    <div className={classes.root}>
      <Grid container className={classes.container} justify="space-between">
        <Grid item className={classes.item} >
          <a href="#home">
            <img src={Logo} className={classes.logo} alt="c3d logo" />
          </a>
        </Grid>
        <Grid item className={classes.item} >
          <Typography align="center" className={classes.body}>
            CircleLink. All rights reserved
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <FacebookIcon className={classes.socialIcon}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Footer)
