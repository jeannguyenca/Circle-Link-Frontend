import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import SignIn from './components/signIn';
import SignUp from './components/signUp';

import Title from './components/title';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="main">
      
      <Grid container spacing={0}>
            <Grid item xs={5} className="title-container">
            <Title/>
            </Grid>
            <Grid item xs={7} className='box-container'>
            
            <SignUp/>
            </Grid>
          </Grid>
      </div>
      
       
      </div>
    );
  }
}

export default App;
