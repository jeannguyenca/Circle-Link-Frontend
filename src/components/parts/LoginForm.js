import React from "react"
import { Grid, Button, TextField } from "@material-ui/core/"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import red from "@material-ui/core/colors/red"
import grey from "@material-ui/core/colors/grey"

import user from "../../assets/icons/profile.svg"
import lock from "../../assets/icons/password.svg"
import google from "../../assets/icons/logo_google.svg"
import google_white from "../../assets/icons/logo_google_white.svg"

const styles = theme => ({
  container: {
    textAlign: "center",
    marginBottom: "20px"
  },
  text: {
    margin: "20px 0 0 0"
  },
  link: {
    color: red[500]
  },
  linkForgot: {
    color: grey[700]
  },
  icon: {
    paddingTop: "5px"
  },
  textField: {
    margin: 0
  },
  button: {
    width: "100%",
    boxShadow: "none"
  },
  login: {
    border: `1px solid white`,
    "&:hover": {
      background: "white",
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  google: {
    // border: `1px solid white`,
    "&:hover": {
      background: theme.palette.primary.main,
      color: "white"
      // border: `1px solid ${theme.palette.primary.main}`
    },
    "&:hover img": {
      content: `url(${google_white})`
    }
  },
  googleIcon: {
    paddingRight: "10px"
  }
})

const Login = props => {
  const { classes, handleChange, onSubmit, googleLogin } = props

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Grid
        container
        spacing={16}
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.text}>
            Log in
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Welcome back! If you not a member yet.
          </Typography>
          <Link to="/signup" className={`${classes.text} ${classes.link}`}>
            Sign up free!
          </Link>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={16}
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={2}>
          <img src={user} alt="user" className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <TextField
            className={classes.textField}
            margin="normal"
            variant="outlined"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <img src={lock} alt="lock" className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <TextField
            className={classes.textField}
            margin="normal"
            variant="outlined"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={16}
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12}>
          <Link className={classes.linkForgot} style={{}} to="/forgot">
            Forgot Password
          </Link>
        </Grid>

        <Grid item xs={8}>
          <Button
            className={`${classes.button} ${classes.login}`}
            type="submit"
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button
            className={`${classes.button} ${classes.google}`}
            type="button"
            variant="outlined"
            color="primary"
            onClick={googleLogin}
          >
            <img
              src={google}
              alt="Google logo"
              className={classes.googleIcon}
            />
            Log In with Gmail
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default withStyles(styles)(Login)
