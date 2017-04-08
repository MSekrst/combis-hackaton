/* eslint no-unused-expressions:0 */

import { injectGlobal } from 'styled-components'

injectGlobal`

  @import: url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import: url('https://fonts.googleapis.com/css?family=Open+Sans:300,800|Source+Code+Pro:300,500&amp;subset=latin-ext');

  body, html{
    height: 100%;
    margin: 0;
    background: white;
    font-family: 'Source Code Pro', monospace;
    font-family: 'Open Sans', sans-serif;
  }
  
  a{
    color: black;
    text-decoration: none;
  }
`
