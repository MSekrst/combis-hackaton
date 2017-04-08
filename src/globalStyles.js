/* eslint no-unused-expressions:0 */

import { injectGlobal } from 'styled-components'

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=PT+Sans&amp;subset=latin-ext');
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body, html{
    height: 100%;
    margin: 0;
    background: white;
    font-family: 'PT Sans';
  }
  
  a {
    color: black;
    text-decoration: none;
  }
`
