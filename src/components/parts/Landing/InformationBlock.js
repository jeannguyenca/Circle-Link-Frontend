import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  img: {
    display: "block",
    margin: "30px 0"
  }
})

const InformationBlock = props => {
  const classes = props.classes
  const { header_1, header_2, img, header_align, alt, para, paraDark, align } = props
  return (
    <div className={props.className}>
      {header_1 && (
        <Typography component="h1" variant="h2" align={header_align}>
          {header_1}
        </Typography>
      )}
      {header_2 && (
        <Typography
          component="h2"
          variant="h4"
          color="primary"
          align={header_align}
        >
          {header_2}
        </Typography>
      )}
      {img && <img className={classes.img} src={Object.values(img)} alt={alt} />}
      {para && (
        <Typography
          variant="body2"
          className={classes.para}
          align={align}
        >{para}
        </Typography>
      )}
      {paraDark && (
        <Typography
          variant="body1"
          className={classes.para}
          align={align}
        >{paraDark}
        </Typography>
      )}
    </div>
  )
}

export default withStyles(styles)(InformationBlock)
