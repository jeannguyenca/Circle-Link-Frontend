import React, { Component } from "react"
import Styled, { ThemeProvider } from "styled-components"
import { Link } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import LoginForm from "../parts/LoginForm"

import backGround from "../../assets/contact_blur.jpg"
import logoText from "../../assets/logo_text.svg"
// import login from "../../graphql/authentication"
import login, { googleLogin, createUser } from "../../graphql/authentication"

import { theme } from "../parts/theme"

let Figure = Styled.figure`
  margin-top: 0;
  display: flex;
  justify-content: center;
  img {
    width: 320px;
    height: 72px;
  }
  @media only screen and (min-width: 1150px){
    justify-content: flex-start;
    margin-left: 0;
    img {
      width: 360px;
      height: 92px;
    }


  }
`

let Login = Styled.div`
  background: url(${backGround});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .lWrapper{
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

  }

  p, .signUp {
    font-size: 14pt;
  }
  .Gtitle{
    width: 100%;
    p {
      color: white;
      text-shadow: 1px 2px 3px rgb(0, 0, 0);
      display: none;
    }
  }
  h1,h2{
    color: ${props => props.theme.main};
    font-weight: 800;
    text-align: center;
  } 
  h1{
    font-size: 35pt;
    letter-spacing: 2pt;
    text-shadow: 1px 2px 3px rgb(0, 0, 0);
  }
  h2{
    font-size: 35pt;
    
  }
  
  .loginForm {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    height: 600px;
    max-width: 320px;
    box-shadow: 1px 2px 3px rgb(0, 0, 0);
    padding: 16px 0;
    h2{margin: 0 auto }
    p{
      color: black;
      text-align: center;
      padding: 0 16px;
    }
    .signUp{
      color: ${props => props.theme.second}
      margin: 8px auto 24px auto;
      &:hover {
        font-weight: 700;
      }
    }
    .emailField label {left: 75px !important}
    .passField label {left: 65px !important}
    .pass2Field label {left: 45px !important}
    .emailField .MuiFormLabel-focused-114, .passField .MuiFormLabel-focused-114, .pass2Field .MuiFormLabel-focused-114{
      left: 0 !important
    }
  }
  .forgot{color: black;  margin: 12px auto 16px auto }
  .form-actions{
    display: flex;
    margin-left: 20px;
    flex-flow: column nowrap;
    .btnForm{
      width: 220px;
      height: 53px;
      margin: 8px auto;
      font-size: 14pt;
      
    }
    .btnGmail{ 
      border: 2px solid ${props => props.theme.main} 
      font-size: 12pt;
    }
    .btnLogin{
      background-color: ${props => props.theme.main}
      color: white;
      &:hover {
        background-color: white
        color: black !important;
        border: 2px solid ${props => props.theme.main} 
      }
    }

  }

  @media only screen and (min-width: 550px){
    height: 100vh;
    .loginForm{
      max-width: 400px
    }
    h1{font-size: 42pt;}
  }
  @media only screen and (min-width: 1150px){
    .lWrapper{
      width: 1250px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
    }
    .Gtitle{
      h1{
        margin: 24px auto; 
        width: 400px
      }
      h1, h2{text-align: left;}
      p{width: 400px; display: initial}
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    .loginForm, .Gtitle {
      height: 570px;
      width: 520px;

    }
  }

`

class Authentication extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
      email: "",
      password: ""
    }
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
    if (!window.location.href.includes("code")) {
      const clientId =
        "812921217937-d0gldtfcfa3r5c6c9rbqdc8tcnv7bt09.apps.googleusercontent.com"
      // this will redirect the page to facebook, then back
      window.location.href = [
        `https://accounts.google.com/o/oauth2/v2/auth?`,
        `client_id=${clientId}&`,
        `response_type=code&`,
        `scope=openid%20email&`,
        `redirect_uri=http://localhost:3000/login&`,
        `access_type=offline`
      ].join("&")
    } else {
      // we have a token
      // Retrieve access token with custom api
      this.retriveGoogleCode()
    }
  }

  retriveGoogleCode = () => {
    var params = new URLSearchParams(window.location.search)
    var code = params.get("code")


    let requestBody = googleLogin(code)


    fetch("http://18.218.142.78/test/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!")
        }
        return res.json()
      })
      .then(resData => {
        this.setState({ auth: resData.data.googleUser })
        sessionStorage.setItem("auth", resData.data.googleUser)
        console.log(resData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    if (window.location.href.includes("code")) {
      this.retriveGoogleCode()
    }
  }

  submitHandler = event => {
    event.preventDefault()
    const email = this.state.email
    const password = this.state.password

    if (email.trim().length === 0 || password.trim().length === 0) {
      return
    }

    let requestBody = login(email, password)

    if (!this.state.isLogin) {
      // requestBody = createUser(email, password, name, address)
    }

    fetch("http://18.218.142.78/test/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!")
        }
        return res.json()
      })
      .then(resData => {
        this.setState({ auth: resData.data.login })
        sessionStorage.setItem("auth", resData.data.login)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
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
      <ThemeProvider theme={theme}>
        <Login>
          <div className="lWrapper">
            <div className="Gtitle">
              <Link to="/">
                <Figure>
                  <img src={logoText} alt="Logo Text" />
                </Figure>
              </Link>
              <h1>Hello Partner!</h1>

              <p>
                With CircleLink, you can have a one-stop-shop application that
                will provide an optimized and attractive system for your
                business.
              </p>
            </div>

            <LoginForm
              handleChange={this.handleChange}
              onSubmit={this.submitHandler}
              googleLogin={this.googleLogin}
            />
          </div>
        </Login>
      </ThemeProvider>
    )
  }
}

export default Authentication
