/* eslint no-unused-expressions:0 */

import { injectGlobal } from 'styled-components'

injectGlobal`

  @import: url("https://fonts.googleapis.com/css?family=PT+Sans:400,900&amp;subset=latin-ext");
  @import: url('https://fonts.googleapis.com/css?family=PT+Sans:400&amp;subset=latin-ext');

  body, html{
    height: 100%;
    margin: 0;
    background: whitesmoke;
    font-family: 'PT Sans', sans-serif;
  }
  
  a {
    color: black;
    text-decoration: none;
  }
`
