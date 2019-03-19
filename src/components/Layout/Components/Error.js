import React from 'react'
import Styled, {ThemeProvider} from 'styled-components';
import {theme} from '../../parts/theme';

let P = Styled.p`
  color: #E33258 !important;
`

const Error = ({ error }) => 
  (
    <P>{error.message}</P>
  );


export default Error;
