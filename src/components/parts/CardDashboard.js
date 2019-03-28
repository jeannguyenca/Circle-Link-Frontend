import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import DownIcon from "@material-ui/icons/ArrowDropDown"
import UpIcon from "@material-ui/icons/ArrowDropUp"

const styles = {
  card: {
    borderRadius: 0,
    "-webkit-box-shadow": "0px 0px 15px 2px rgba(0,0,0,.1)",
    "-moz-box-shadow": "0px 0px 15px 2px rgba(0,0,0,.1)",
    "box-shadow": "0px 0px 15px 2px rgba(0,0,0,.1)",
    textAlign: "center",
    padding: "20px 0",
    marginBottom: "20px",
    width: "100%"
  },
  icon: {
    height: "30px",
    paddingBottom: "20px"
  },
  button: {
    margin: "0 auto",
    width: "80%",
    padding: "2px !important"
  },
  arrow: {
    position: "relative",
    top: "10px",
    left: "5px"
  }
}
const CardDashboard = props => {
  const { classes } = props

  return (
    <Card className={classes.card}>
      <CardContent>
        {props.icon && (
          <img src={props.icon} alt="icon" className={classes.icon} />
        )}
        {props.number && <Typography variant="h3">{props.number}</Typography>}
        {props.title && (
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
        )}
      </CardContent>
      {props.buttonText && (
        <CardActions className={classes.cardAction}>
          <Button color="primary" variant="outlined" className={classes.button}>
            {props.buttonText}
          </Button>
        </CardActions>
      )}

      {props.percentage && (
        <Typography variant="body1">
          {props.arrow === "down"
            && <DownIcon color="error" fontSize="large" className={classes.arrow}/>}
          {props.arrow === "up" 
            && <UpIcon color="primary" fontSize="large" className={classes.arrow}/>}
          {props.percentage}
        </Typography>
      )}
    </Card>
  )
}

export default withStyles(styles)(CardDashboard)
