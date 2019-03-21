import React, { Component } from 'react'
import Styled, { ThemeProvider} from 'styled-components';
import { NavLink } from 'react-router-dom';
let Div = Styled.div`
  text-align: center;
`


export default class NotFound404 extends Component {
  render() {
    return (
      <Div>
        <h1>Not Found Page</h1>
        <NavLink to="/dashboard">Go back to Dashboard</NavLink>
      </Div>
    )
  }
}
