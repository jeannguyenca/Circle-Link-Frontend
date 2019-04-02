import React from "react"
import { Typography, Grid, TextField, Button } from "@material-ui/core/"
import { withStyles } from "@material-ui/core/styles"

import heart from "../../assets/icons/favourite.svg"

const styles = theme => ({
  container: {
    minHeight: "calc(100vh - 150px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  header: {
    color: "black"
  },
  img: {
    width: "100px",
    margin: "50px"
  },
  cssLabel: {
    // color: "white"
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`
    }
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "1px"
    // borderColor: "white !important"
  },
  multi: {
    borderRadius: "10px"
  },
  para: {
    marginBottom: "20px"
  },
  button: {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: "none",
    "&:hover": {
      background: "white",
      color: theme.palette.primary.main
    },
    margin: "20px 0"
  }
})

const CommingSoon = props => {
  const { classes } = props
  return (
    <React.Fragment>
      <div className={classes.container}>

        <Grid
          container
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              className={classes.header}
            >
              Coming Soon
          </Typography>
          </Grid>
          <Grid item xs={12} container alignItems="center" justify="center">
            <img src={heart} alt="heart" className={classes.img} />
          </Grid>
          <Grid item xs={7} container alignItems="center" justify="center">
            <Typography variant="body1" align="center" className={classes.para}>
              We are currently working on an awesome web app. Stay tune for more
              information. Subscribe to our newsletter to stay updated on our
              progress.
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField
              className={classes.input}
              label="Enter your email"
              placeholder="Enter your email"
              margin="dense"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Grid>
          <Grid item xs={7} container justify="center">
            <Button
              href="#"
              color="primary"
              className={classes.button}
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default withStyles(styles)(CommingSoon)
