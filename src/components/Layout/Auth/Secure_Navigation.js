import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Styled, { ThemeProvider} from 'styled-components';

import Signout from './Signout';

let Nav = Styled.nav`
  position: absolute;
  right: 16px
`

const Navbar = ({ session }) => (
  <Nav>
    {session && session.getCurrentUser ? (
      <NavbarAuth session={session} />
    ) : (
      <NavbarUnAuth />
    )}
  </Nav>
);

const NavbarAuth = ({ session }) => (
  <Fragment>
    <ul>
      <li>
        <NavLink to="/" exact>
          Secured
        </NavLink>
      </li>
      <li>
        <Signout />
      </li>
    </ul>
    <h4>
      Welcome, <strong>{session.getCurrentUser.username}</strong>
    </h4>
  </Fragment>
);

const NavbarUnAuth = () => (
  <ul>
    <li>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/login">Signin</NavLink>
    </li>
    <li>
      <NavLink to="/signup">Signup</NavLink>
    </li>
  </ul>
);

export default Navbar;
