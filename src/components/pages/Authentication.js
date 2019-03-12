import React, { Component } from 'react';
import Styled from "styled-components";


import backGround from '../../assets/contact_blur.jpg';
import logoText from '../../assets/logo_text.svg';
import login from "../../graphql/authentication"


let Figure = Styled.figure`
  margin-top: 0;
  img {
    width: 360px;
    height: 92px;
  }
`;

let Login = Styled.div`
  background: url(${backGround});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;

  
  .Gtitle{
    
  }
  h1,h2{
    color: #4FC95B;
    font-weight: 800;
  } 
  h1{
    font-size: 42pt;
    letter-spacing: 2pt;
  }
  h2{
    font-size: 35pt
  }

  p{
    color: white;
    text-shadow: 1px 2px 3px rgb(0, 0, 0);
    display: none;
  }

  .loginForm {

  }
  @media only screen and (min-width: 1050px){
    display: flex;
  j flex-flow: row nowrap;
    justify-content: center;
    

    p{display: initial;}
  }

`;

class Authentication extends Component {
  state = {
    isLogin: true
  };

  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
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
    return (
        <Login>
          <div className="Gtitle">
            <Figure>
              <img src={logoText} alt="Logo Text"/>
            </Figure>
            <h1>Hello Partner!</h1>
  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nulla voluptas velit sit ipsa accusantium ipsum eum assumenda molestiae. Sunt quas corrupti et iusto cupiditate. Totam est numquam obcaecati nesciunt quasi voluptatum nemo perferendis?</p>
          </div>
  
          <form className="auth-form loginForm" onSubmit={this.submitHandler}>
            <h2>Log in</h2>

            <div className="form-control">
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" ref={this.emailEl} />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" ref={this.passwordEl} />
            </div>
            <div className="form-actions">
              <button type="submit">Submit</button>
              <button type="button" onClick={this.switchModeHandler}>
                Switch to {this.state.isLogin ? 'Signup' : 'Login'}
              </button>
            </div>
          </form>
        </Login>
    );
  }
}

export default Authentication