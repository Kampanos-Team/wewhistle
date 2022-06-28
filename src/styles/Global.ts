import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0; 
  boxsizing: border-box;
}
html{
  @media(max-width: 1080px) {
    font-size:93.75%;
  }

  @media(max-width:720px) {
    font-size:87.5%;
  }
}

body{
  background: #F5F5F5;
  -webkit-font-smoothing: antialiased;
}

button{
  cursor: pointer;
}

[disabled] {
  opacity:0.6;
  cursor:not-allowed;
}

`;