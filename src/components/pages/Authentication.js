import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid, Hidden } from "@material-ui/core/"

import { Link, Redirect } from "react-router-dom"

import LoginForm from "../parts/LoginForm"
import InformationBlock from "../parts/Landing/InformationBlock"

import background from "../../assets/contact_blur.jpg"
import logoText from "../../assets/logo_white.png"

import login, { googleLogin } from "../../graphql/authentication"

import fetchFunction from "../../graphql/fetchFunction"

const styles = theme => ({
  container: {
    background: `url(${background}) rgba(0,0,0,.5)`,
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    minHeight: "100vh",
    padding: "30px"
  },
  item: {
    maxHeight: "80vh",
    margin: "20px",
    "&:last-of-type": {
      background: "white",
      padding: "60px 50px"
    }
  },
  logoLink: {
    display: "block",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
      margin: "0 auto"
    }
  },
  logo: {
    width: "100%",
    objectFit: "cover"
  }
})

class Authentication extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
      email: "",
      password: "",
      url: window.location.href
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target["name"]]: e.target["value"]
    })
  }

  switchModeHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin }
    })
  }

  googleLogin = () => {
    const url = this.state.url

    if (!window.location.href.includes("code")) {
      const clientId =
        "812921217937-d0gldtfcfa3r5c6c9rbqdc8tcnv7bt09.apps.googleusercontent.com"
      // this will redirect the page to facebook, then back
      window.location.href = [
        `https://accounts.google.com/o/oauth2/v2/auth?`,
        `client_id=${clientId}&`,
        `response_type=code&`,
        `scope=openid%20email&`,
        `redirect_uri=${url}&`,
        `access_type=offline`
      ].join("&")
    } else {
      // we have a token
      // Retrieve access token with custom api
      this.retriveGoogleCode()
    }
  }

  async retriveGoogleCode() {
    const url = this.state.url.split("?")[0]

    var params = new URLSearchParams(window.location.search)
    var code = params.get("code")

    let body = googleLogin(code, url)

    const resData = await fetchFunction(body, this.state.token)

    sessionStorage.setItem("auth", JSON.stringify(resData.data.googleUser))
    this.setState({ auth: resData.data.googleUser })
  }

  async submitHandler(event) {
    event.preventDefault()
    const email = this.state.email
    const password = this.state.password

    if (email.trim().length === 0 || password.trim().length === 0) {
      return
    }

    let body = login(email, password)

    if (!this.state.isLogin) {
      // requestBody = createUser(email, password, name, address)
    }

    const resData = await fetchFunction(body, this.state.token)
    sessionStorage.setItem("auth", JSON.stringify(resData.data.login))
    this.setState({ auth: resData.data.login })
  }

  componentDidMount() {
    if (window.location.href.includes("code")) {
      this.retriveGoogleCode()
    }
  }

  render() {
    const { classes } = this.props
    if (this.state.auth) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { auth: this.state.auth }
          }}
        />
      )
    }
    return (
      <Grid
        container
        className={classes.container}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={3} className={classes.item}>
          <Link to="/" className={classes.logoLink}>
            <img src={logoText} alt="Logo Text" className={classes.logo} />
          </Link>
          <Hidden smDown implementation="css">
            <InformationBlock
              // header_align={data.header_align}
              header_1={["Hello, ", <br key="1" />, "Partner!"]}
              para="With CircleLink, you can have a one-stop-shop application that will
            provide an optimized and attractive system for your business."
              align="left"
            />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={1} className={classes.item} />

        <Grid item xs={12} md={4} className={classes.item}>
          <LoginForm
            handleChange={this.handleChange}
            onSubmit={this.submitHandler}
            googleLogin={this.googleLogin}
          />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Authentication)
