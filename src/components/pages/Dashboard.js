import React, { Component, Fragment } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Face from '@material-ui/icons/Face';
import Aup from '@material-ui/icons/ArrowDropUp'

import Styled, { ThemeProvider} from 'styled-components';
import Menu from "../containers/Menu"
import AppBar from "../Layout/Auth/Secure_Navigation"

let Dash = Styled.div`
  margin-left: 230px;
`

class Dashboard extends Component {
    
  render() {

    return (
        <Fragment>
          <Menu />
          <AppBar/>
          <Dash>
            this is Dashboard
          </Dash>
        </Fragment>
    );
    }
  }

  
  export default(Dashboard);
