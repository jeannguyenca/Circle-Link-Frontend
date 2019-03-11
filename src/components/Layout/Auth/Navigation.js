import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Typography, Fab} from '@material-ui/core/';
import Styled from 'styled-components';
import { BrowserRouter as Link } from "react-router-dom";

import logoDesk from '../../../media/logo_text.png';
import logoMobile from '../../../media/logo_icon.png';


// #4FC95B
let Button1 = Styled(Fab)`
  background-color: #F9f9f9 !important;
  color: black !important;
  border-radius: 24.4px !important;
  padding: 4px 12px;
  width: 125px !important;
  span{
    font-weight: 700;
  }
`;
let Figure = Styled.figure`
  img {
    width: 260px;
    height: 81px;
  }
`
  
  let AppBar1 = Styled(AppBar)`
  
  background-color: white !important;
  div{
    display: flex; 
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .flex{
      a{
        text-decoration: none;
        margin: 0 12px 4px 12px;
      }
    }
    .buttonG button{
      margin: 0 12px;
    }
  }


`

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      isActive: 0
  
    }
    this.handleClick = this.handleClick.bind(this);
  }  
  
  handleClick = (index) => this.setState({ activeIndex: index })


  render() {
  // const {classes} = props
    const { handleClick } = this
    const { activeIndex } = this.state
    return (
      <AppBar1 className="navigation">
        <Toolbar position="static">
            <div className="flex">
              <Figure><img src={logoDesk} alt=""/></Figure>
              <a href="#overview" className={isActive ? 'active' : 'album'} name="overview" index={0} isActive={ activeIndex===0 } onClick={ handleClick }>
                <Typography variant="h5">Overview</Typography>
              </a>
              <a href="#feature" className={this.isActive ? 'active' : 'album'} name="feature" index={1} isActive={ activeIndex===1 } onClick={ handleClick }>
                <Typography variant="h5">Feature</Typography>
              </a>
              <a href="#contactUs" className={this.isActive ? 'active' : 'album'} name="contactUs" index={2} isActive={ activeIndex===2 } onClick={ handleClick }>
                <Typography variant="h5">Contact Us</Typography>
              </a>
            </div>
          
            <div className="buttonG">
              <Link to="/login">
                <Button1 variant="extended" aria-label="Delete">
                Login</Button1>
              </Link>

              <Link to="/signup">
                <Button1 variant="extended" aria-label="Delete">Sign Up</Button1>
              </Link>
            </div>

        </Toolbar>
      </AppBar1>    
    )
  }
}
