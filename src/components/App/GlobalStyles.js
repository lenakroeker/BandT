import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, sans-serif;
}
html,
body,
div,
span {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: 'Montserrat', sans-serif;
}

button {
  padding: 5px 10px;
  background: mintcream;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  box-shadow: -3px 3px 0px 0px navy;
  margin: 10px;
  transition:0.3s ease-in-out;
}

button:hover {
  transform:scale(1.1,1.1);
}

input {
  height: 27px;
  border-radius: 4px;
background:navy;
padding: 3px 10px;
color:white;
border:none;
}


`;

export default GlobalStyle;
