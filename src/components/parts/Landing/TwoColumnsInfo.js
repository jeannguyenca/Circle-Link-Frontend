import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import InformationBlock from "./InformationBlock"

const styles = theme => ({
  root: {
    margin: "auto",
    padding: "30px 30px 0 30px"
  },
  container: {
    maxWidth: "75rem",
    margin: "auto"
  },
  img: {
    width: "100%",
    objectFit: "contain"
  }
})

const TwoColumnsInfo = props => {
  const classes = props.classes
  return (
    <div className={classes.root} id={props.id} style={ {background: props.color} }>
      <Grid
        container
        direction={props.direction}
        className={classes.container}
      >
        <Grid item xs={12} md={5} container className={classes.container}>
          <InformationBlock
            header_align={props.header_align}
            header_1={props.header}
            para={props.para}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <img className={classes.img} src={props.img} alt={props.alt} />
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(TwoColumnsInfo)
