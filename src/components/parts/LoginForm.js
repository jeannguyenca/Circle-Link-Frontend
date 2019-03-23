import React, { Component } from "react"
import { Grid, Button, TextField } from "@material-ui/core/"
import { Link } from "react-router-dom"

import Styled from "styled-components"

import user from "../../assets/icons/profile.svg"
import lock from "../../assets/icons/password.svg"


let TextField1 = Styled(TextField)`
  width: 220px;
  input[placeholder] { text-align: center }
  fieldset{ 
    border-radius: 24.5px !important;
  }

`
const Login = ({handleChange, onSubmit, googleLogin}) => {
  return (
    <form className="auth-form loginForm" onSubmit={onSubmit}>
      <h2>Log in</h2>
      <p style={{ marginBottom: 0, padding: "auto 12px" }}>
        Welcome back! If you not a member yet.
      </p>
      <Link className="signUp" to="/signup">
        Sign up free!
      </Link>

      <div className="email">
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <figure style={{ margin: "12px" }}>
              <img src={user} alt="user" />
            </figure>
          </Grid>
          <Grid item style={{ marginRight: "35px" }}>
            <TextField1
              id="outlined-with-placeholder"
              label="Email"
              margin="normal"
              variant="outlined"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </div>

      <div className="password">
        <Grid
          className="field"
          container
          spacing={8}
          alignItems="flex-end"
          style={{ marginRight: "35px" }}
        >
          <Grid item>
            <figure style={{ margin: "12px" }}>
              <img src={lock} alt="lock" />
            </figure>
          </Grid>
          <Grid item>
            <TextField1
              id="outlined-with-placeholder"
              label="Password"
              margin="normal"
              variant="outlined"
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </div>
      <Link className="forgot" style={{}} to="/forgot">
        Forgot Password
      </Link>

      <div className="form-actions">
        <Button className=" btnForm btnLogin" type="submit">
          Log In
        </Button>
        <Button className="btnForm btnGmail" type="button" onClick={googleLogin}>
          Log In with Gmail
        </Button>
      </div>
    </form>
  )
}

export default Login
