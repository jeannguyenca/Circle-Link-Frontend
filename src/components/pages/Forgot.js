import React, { Component } from 'react';
import Styled, {ThemeProvider} from "styled-components";
import { Link } from 'react-router-dom';
import {Grid, Button, TextField} from '@material-ui/core/';



import backGround from '../../assets/contact_blur.jpg';
import logoText from '../../assets/logo_text.svg';
import login from "../../graphql/authentication";

import { theme } from '../parts/theme';
import user from '../../assets/icons/profile.svg';
import lock from '../../assets/icons/password.svg';


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
`;


let TextField1 = Styled(TextField)`
  width: 220px;
  input[placeholder] { text-align: center }
  fieldset{ 
    border-radius: 24.5px !important;
  }

`;

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
    }
    .signUp{
      color: ${ props => props.theme.second }
      margin: 8px auto 24px auto;
      &:hover {
        font-weight: 700;
      }
    }
    /* .emailField label {left: 75px !important}
    .passField label {left: 65px !important}
    .pass2Field label {left: 45px !important}
    .emailField .MuiFormLabel-focused-114, .passField .MuiFormLabel-focused-114, .pass2Field .MuiFormLabel-focused-114{
      left: 0 !important
    } */
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

`;

class Forgot extends Component {
  state = {
    isLogin: true,
    email: '',
    password: ''
    
  }

// constructor(props) {
  // super(props);
    // this.emailEl = React.createRef();
    // this.passwordEl = React.createRef();
  // }

  HandleChange = e => {
    e.preventDefault();
    this.setState ({
      [ e.target['name'] ]: e.target['value']
    })
  }

  switchModeHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin };
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = login(email, password);

    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation {
            createUser(userInput: {email: "${email}", password: "${password}"}) {
              _id
              email
            }
          }
        `
      };
    }

    fetch('http://18.218.142.78/test/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {HandleChange} = this;
    return (
      <ThemeProvider theme={theme}>
        <Login>
          <div className="lWrapper">
            <div className="Gtitle">
              <Figure>
                <img src={logoText} alt="Logo Text"/>
              </Figure>
              <h1>Hello Partner!</h1>
    
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nulla voluptas velit sit ipsa accusantium ipsum eum assumenda molestiae. Sunt quas corrupti et iusto cupiditate. Totam est numquam obcaecati nesciunt quasi voluptatum nemo perferendis?</p>
            </div>
    
            <form className="auth-form loginForm" onSubmit={this.submitHandler}>
              <h2>Forgot Passrord</h2>
              <p style={{marginBottom: 0}}>Go back to Login?</p>
              <Link className="signUp" to="/login">Login</Link>

              <p style={{marginBottom: 0}}>Enter Your Email to get Verify Link?</p>
              <div className="email">
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <figure style={{margin: '12px'}}><img src={user} alt="user"/></figure>
                  </Grid>
                  <Grid item style={{marginRight: '55px'}}>
                    <TextField1 id="outlined-with-placeholder" 
                               label="Email" 
                               margin="normal"
                               variant="outlined"
                               placeholder="Email"
                               name="email"
                               onChange={HandleChange}
                              className="emailField"
                               />
                  </Grid>
                </Grid>
              </div>

              {/* <div className="form-control">
                <label htmlFor="email">E-Mail</label>
                <input type="email" id="email" ref={this.emailEl} />
              </div> */}

              {/* <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref={this.passwordEl} />
              </div> */}

              <div className="form-actions">
                <Button className=" btnForm btnLogin" type="submit">Submit</Button>
              </div>

            </form>
          </div>
        </Login>
      </ThemeProvider>  
    );
  }
}

export default Forgot